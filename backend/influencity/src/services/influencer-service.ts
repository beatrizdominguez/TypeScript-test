import {logger} from "../utils/logger";
import {models, sequelize} from "../models/index";
import {InfluencerAttributes, InfluencerInstance} from "../models/interfaces/influencer-interface";
import {Transaction} from "sequelize";

export class InfluencerService {
  createInfluencer(influencerAttributes: InfluencerAttributes): Promise<InfluencerInstance> {
    let promise = new Promise<InfluencerInstance>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Influencer.create(influencerAttributes).then((influencer: InfluencerInstance) => {
          logger.info(`Created influencer with name ${influencerAttributes.name}.`);
          resolve(influencer);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  getInfluencer(name: string): Promise<InfluencerInstance> {
    let promise = new Promise<InfluencerInstance>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Influencer.findOne({where: {name: name}}).then((influencer: InfluencerInstance) => {
          if (influencer) {
            logger.info(`Retrieved influencer with name ${name}.`);
          } else {
            logger.info(`Influencer with name ${name} does not exist.`);
          }
          resolve(influencer);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  listInfluencers(): Promise<Array<InfluencerInstance>> {
    let promise = new Promise<Array<InfluencerInstance>>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Influencer.findAll().then((influencers: Array<InfluencerInstance>) => {
          logger.info("Retrieved all influencers.");
          resolve(influencers);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  updateInfluencer(name: string, influencerAttributes: any): Promise<void> {
    let promise = new Promise<void>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Influencer.update(influencerAttributes, {where: {name: name}})
          .then((results: [number, Array<InfluencerInstance>]) => {
          if (results.length > 0) {
            logger.info(`Updated influencer with name ${name}.`);
          } else {
            logger.info(`Influencer with name ${name} does not exist.`);
          }
          resolve(null);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  deleteInfluencer(name: string): Promise<void> {
    let promise = new Promise<void>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Influencer.destroy({where: {name: name}}).then((afffectedRows: number) => {
          if (afffectedRows > 0) {
            logger.info(`Deleted influencer with name ${name}`);
          } else {
            logger.info(`Influencer with name ${name} does not exist.`);
          }
          resolve(null);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }
}

export const influencerService = new InfluencerService();
