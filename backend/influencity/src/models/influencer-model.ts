/* tslint:disable:variable-name */

import * as SequelizeStatic from "sequelize";
import { DataTypes, Sequelize } from "sequelize";
import { InfluencerAttributes, InfluencerInstance } from "./interfaces/influencer-interface";

export default function (sequelize: Sequelize, dataTypes: DataTypes):
  SequelizeStatic.Model<InfluencerInstance, InfluencerAttributes> {
  let Influencer = sequelize.define<InfluencerInstance, InfluencerAttributes>("Influencer", {
    name: { type: dataTypes.STRING, allowNull: false, primaryKey: true },
    lastName: { type: dataTypes.TEXT, allowNull: true },
    gender: { type: dataTypes.TEXT, allowNull: true }
  }, {
      indexes: [],
      classMethods: {},
      timestamps: false
    });

  return Influencer;
}
