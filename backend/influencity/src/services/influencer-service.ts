import { logger } from "../utils/logger";
import { models, sequelize } from "../models/index";
// import * as SequelizeStatic from "sequelize";
import { InfluencerAttributes, InfluencerInstance } from "../models/interfaces/influencer-interface";
import { Transaction } from "sequelize";

export class InfluencerService {

  createInfluencer(influencerAttributes: InfluencerAttributes): Promise<InfluencerInstance> {

    let promise = new Promise<InfluencerInstance>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Influencer.create(influencerAttributes).then((influencer: InfluencerInstance) => {
          logger.info(`Created influencer with id ${influencerAttributes.id}.`);
          resolve(influencer);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  getInfluencer(id: number): Promise<InfluencerInstance> {
    let promise = new Promise<InfluencerInstance>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Influencer.findOne({ where: { id: id } }).then((influencer: InfluencerInstance) => {
          if (influencer) {
            logger.info(`Retrieved influencer with id ${id}.`);
          } else {
            logger.info(`Influencer with id ${id} does not exist.`);
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
        return models.Influencer.findAll(
          {
            where: {
              deletionDate: {
                $eq: null
              }
            }
          }
        ).then((influencers: Array<InfluencerInstance>) => {
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

  updateInfluencer(id: number, influencerAttributes: any): Promise<void> {
    return this.updateValues(id, influencerAttributes);
  }

  deleteInfluencer(id: number): Promise<void> {

    let influencerAttributes = {
      deletionDate: new Date()
    };
    return this.updateValues(id, influencerAttributes);
  }

  private updateValues(id: number, influencerAttributes: any) {

    let promise = new Promise<void>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Influencer.update(influencerAttributes, { where: { id: id } })
          .then((results: [number, Array<InfluencerInstance>]) => {
            if (results.length > 0) {
              logger.info(`Updated influencer with id ${id}.`);
            } else {
              logger.info(`Influencer with id ${id} does not exist.`);
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
