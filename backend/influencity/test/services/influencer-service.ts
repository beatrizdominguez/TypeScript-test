/* tslint:disable:no-require-imports */

import {expect} from "chai";
import {sequelize} from "../../src/models/index";
import {InfluencerInstance} from "../../src/models/interfaces/influencer-interface";
import {InfluencerService} from "../../src/services/influencer-service";

const delay = 500;

describe("InfluencerService", () => {
  const influencerAttributes = {
    name: "influencer1",
    description: "Description of influencer1."
  };

  describe("#createInfluencer", () => {
    let influencerService: InfluencerService;

    before((done: Function) => {
      setTimeout(() => {
        sequelize.sync().then(() => {
          let service = require("../../src/services/influencer-service");
          influencerService = service.influencerService;
          done();
        }).catch((error: Error) => {
          done(error);
        });
      }, delay);
    });

    it("should create a influencer in the database correctly", () => {
      influencerService.createInfluencer(influencerAttributes).then((influencer: InfluencerInstance) => {
        expect(influencer.dataValues.name).to.equals(influencerAttributes.name);
        expect(influencer.dataValues.description).to.equals(influencerAttributes.description);
      }).catch((error: Error) => {
        throw error;
      });
    });
  });

  describe("#retrieveInfluencer(s)", () => {
    let influencerService: InfluencerService;

    before((done: Function) => {
      setTimeout(() => {
        sequelize.sync().then(() => {
          let service = require("../../src/services/influencer-service");
          influencerService = service.influencerService;
          influencerService.createInfluencer(influencerAttributes).then((influencer: InfluencerInstance) => {
            done();
          }).catch((error: Error) => {
            done(error);
          });
        }).catch((error: Error) => {
          done(error);
        });
      }, delay);
    });

    it("should retrieve a influencer from the database correctly", () => {
      influencerService.retrieveInfluencer(influencerAttributes.name).then((influencer: InfluencerInstance) => {
        expect(influencer.dataValues.name).to.equals(influencerAttributes.name);
        expect(influencer.dataValues.description).to.equals(influencerAttributes.description);
      }).catch((error: Error) => {
        throw error;
      });
    });

    it("should retrieve the correct number of influencers", () => {
      influencerService.retrieveInfluencers().then((influencers: Array<InfluencerInstance>) => {
        expect(influencers.length).to.equals(1);
      });
    });
  });

  describe("#updateInfluencer", () => {
    let influencerService: InfluencerService;

    before((done: Function) => {
      setTimeout(() => {
        sequelize.sync().then(() => {
          let service = require("../../src/services/influencer-service");
          influencerService = service.influencerService;
          influencerService.createInfluencer(influencerAttributes).then((influencer: InfluencerInstance) => {
            done();
          }).catch((error: Error) => {
            done(error);
          });
        }).catch((error: Error) => {
          done(error);
        });
      }, delay);
    });

    it("should update the influencer attribute(s) correctly", () => {
      let updateAttributes = {
        description: "Update description of influencer1."
      };
      influencerService.updateInfluencer(influencerAttributes.name, updateAttributes).then(() => {
        influencerService.retrieveInfluencer(influencerAttributes.name).then((influencer: InfluencerInstance) => {
          expect(influencer.dataValues.name).to.equals(influencerAttributes.name);
          expect(influencer.dataValues.description).to.equals(updateAttributes.description);
        }).catch((error: Error) => {
          throw error;
        });
      }).catch((error: Error) => {
        throw error;
      });
    });
  });

  describe("#deleteInfluencer", () => {
    let influencerService: InfluencerService;

    before((done: Function) => {
      setTimeout(() => {
        sequelize.sync().then(() => {
          let service = require("../../src/services/influencer-service");
          influencerService = service.influencerService;
          influencerService.createInfluencer(influencerAttributes).then((influencer: InfluencerInstance) => {
            done();
          }).catch((error: Error) => {
            done(error);
          });
        }).catch((error: Error) => {
          done(error);
        });
      }, delay);
    });

    it("should delete the influencer from the database correctly", () => {
      influencerService.deleteInfluencer(influencerAttributes.name).then(() => {
        influencerService.retrieveInfluencer(influencerAttributes.name).then((influencer: InfluencerInstance) => {
          expect(influencer).to.be.null;
        }).catch((error: Error) => {
          throw error;
        });
      }).catch((error: Error) => {
        throw error;
      });
    });
  });
});
