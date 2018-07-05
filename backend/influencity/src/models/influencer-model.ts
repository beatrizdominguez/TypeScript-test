/* tslint:disable:variable-name */

import * as SequelizeStatic from "sequelize";
import { DataTypes, Sequelize } from "sequelize";
import { InfluencerAttributes, InfluencerInstance } from "./interfaces/influencer-interface";

export default function (sequelize: Sequelize, dataTypes: DataTypes):
  SequelizeStatic.Model<InfluencerInstance, InfluencerAttributes> {
  let Influencer = sequelize.define<InfluencerInstance, InfluencerAttributes>("Influencer", {
    id: { type: dataTypes.INTEGER, allowNull: false, primaryKey: true  },
    name: { type: dataTypes.STRING, allowNull: false },
    lastName: { type: dataTypes.TEXT, allowNull: true },
    gender: { type: dataTypes.TEXT, allowNull: true }
    // deletionDate: { type: dataTypes.DATE, allowNull: true }
  }, {
      indexes: [],
      classMethods: {},
      timestamps: true,
    });

    // const influencerAttributes = {
    //   id: 1,
    //   name: "influencer1",
    //   lastName: "LastName of influencer1.",
    //   gender: "f"
    //   // deletionDate: null
    // };
    // Influencer.create(influencerAttributes).then((influencer: InfluencerInstance) => {
    //  // logger.info(`Created influencer with id ${influencerAttributes.id}.`);
    //   // resolve(influencer);
    // }).catch((error: Error) => {
    //  // logger.error(error.message);
    //  // reject(error);
    // });

  return Influencer;
}
