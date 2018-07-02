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
      timestamps: false
    });

  return Influencer;
}
