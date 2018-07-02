/* tslint:disable:no-require-imports */

import {expect} from "chai";
import {sequelize} from "../../src/models/index";
import {InfluencerInstance} from "../../src/models/interfaces/influencer-interface";
import {InfluencerService} from "../../src/services/influencer-service";

const delay = 500;

describe("InfluencerService", () => {
  const influencerAttributes = {
    id: 1,
    name: "influencer1",
    lastName: "LastName of influencer1.",
    gender: "f"
    // deletionDate: null
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
        expect(influencer.dataValues.lastName).to.equals(influencerAttributes.lastName);
        expect(influencer.dataValues.gender).to.equals(influencerAttributes.gender);
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
      influencerService.getInfluencer(influencerAttributes.id).then((influencer: InfluencerInstance) => {
        expect(influencer.dataValues.id).to.equals(influencerAttributes.id);
        expect(influencer.dataValues.name).to.equals(influencerAttributes.name);
        expect(influencer.dataValues.lastName).to.equals(influencerAttributes.lastName);
        expect(influencer.dataValues.gender).to.equals(influencerAttributes.gender);
      }).catch((error: Error) => {
        throw error;
      });
    });

    it("should retrieve the correct number of influencers", () => {
      influencerService.listInfluencers().then((influencers: Array<InfluencerInstance>) => {
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
        lastName: "Update lastName of influencer1."
      };
      influencerService.updateInfluencer(influencerAttributes.id, updateAttributes).then(() => {
        influencerService.getInfluencer(influencerAttributes.id).then((influencer: InfluencerInstance) => {
          expect(influencer.dataValues.id).to.equals(influencerAttributes.id);
          expect(influencer.dataValues.name).to.equals(influencerAttributes.name);
          expect(influencer.dataValues.lastName).to.equals(updateAttributes.lastName);
          expect(influencer.dataValues.gender).to.equals(influencerAttributes.gender);
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
      influencerService.deleteInfluencer(influencerAttributes.id).then(() => {
        influencerService.getInfluencer(influencerAttributes.id).then((influencer: InfluencerInstance) => {
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
