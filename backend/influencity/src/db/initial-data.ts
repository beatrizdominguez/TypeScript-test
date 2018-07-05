import { logger } from "../utils/logger";
import * as SequelizeStatic from "sequelize";
// import { models, sequelize } from "../models/index";
import { InfluencerAttributes, InfluencerInstance } from "../models/interfaces/influencer-interface";

const influencersIds = [1, 2, 3, 4, 5];
const socialMediasIds = [1, 2, 3];

const influencerAttributes = {
  id: 1,
  name: "influencer2",
  lastName: "LastName of influencer1.",
  gender: "m"
  // deletionDate: null
};

export interface SequelizeModels {
  // Product: SequelizeStatic.Model<ProductInstance, ProductAttributes>;
  Influencer: SequelizeStatic.Model<InfluencerInstance, InfluencerAttributes>;
  // Socialmedia: SequelizeStatic.Model<SocialmediaInstance, SocialmediaAttributes>;
}

export class InitialData {
  createInfluencer(models: SequelizeModels): void {
    models.Influencer.create(influencerAttributes).then((influencer: InfluencerInstance) => {
      logger.info(`Created influencer with id ${influencerAttributes.id}.`);
      // resolve(influencer);
    }).catch((error: Error) => {
      logger.error(error.message);
      // reject(error);
    });
  }

  createMultipleInfluencers(models: SequelizeModels): void {
    //let influencersIds = [1, 2, 3, 4, 5];

    for (let influencerId of influencersIds) {
      console.log('ADD INFLUENCER ' + influencerId);
      let customIinfluencerAttributes = {
        id: influencerId,
        name: "influencer" + influencerId,
        lastName: "LastName of influencer" + influencerId,
        gender: (influencerId % 2 == 0) ? "f" : "m"
      }

      models.Influencer.create(customIinfluencerAttributes).then((influencer: InfluencerInstance) => {
        logger.info(`Created influencer with id ${customIinfluencerAttributes.id}.`);
        // resolve(influencer);
      }).catch((error: Error) => {
        logger.error(error.message);
        // reject(error);
      });
    }
  }

  createMultipleSocialmedias(models: SequelizeModels): void {

    // let influencersIds = [1, 2, 3, 4, 5];
    // let socialMediasIds = [1, 2, 3];

    for (let influencerId of influencersIds) {
      for (let socialMediaId of socialMediasIds) {

        console.log('ADD INFLUENCER ' + influencerId + ' with soocial media ' + socialMediaId);
      }
    }
  }

}

export const initialdata = new InitialData();
