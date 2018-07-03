/* tslint:disable:variable-name */

import * as SequelizeStatic from "sequelize";
import {DataTypes, Sequelize} from "sequelize";
import {SocialmediaAttributes, SocialmediaInstance} from "./interfaces/socialmedia-interface";


export default function(sequelize: Sequelize, dataTypes: DataTypes):
  SequelizeStatic.Model<SocialmediaInstance, SocialmediaAttributes> {
  let Socialmedia = sequelize.define<SocialmediaInstance, SocialmediaAttributes>("Socialmedia", {
    id: {type: dataTypes.NUMBER, allowNull: false, primaryKey: true},
    name: {type: dataTypes.STRING, allowNull: false},
    c: {type: dataTypes.NUMBER, allowNull: false},
    profileUrl: {type: dataTypes.TEXT, allowNull: false},
    photoProfile: {type: dataTypes.TEXT, allowNull: true},
    followers: {type: dataTypes.NUMBER, allowNull: true},
    totalPosts: {type: dataTypes.NUMBER, allowNull: true}
  }, {
    indexes: [],
    classMethods: {}
  });

  Socialmedia.associate = function (models) {
    models.Socialmedia.belongsTo(models.Influencer, {
      onDelete: "CASCADE",
      foreignKey: 'influencerId'
    });
  };

  return Socialmedia;
}
