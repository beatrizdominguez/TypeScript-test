/* tslint:disable:variable-name */

import * as SequelizeStatic from "sequelize";
import { DataTypes, Sequelize } from "sequelize";
import { SocialmediaAttributes, SocialmediaInstance } from "./interfaces/socialmedia-interface";


export default function (sequelize: Sequelize, dataTypes: DataTypes):
  SequelizeStatic.Model<SocialmediaInstance, SocialmediaAttributes> {
  let Socialmedia = sequelize.define<SocialmediaInstance, SocialmediaAttributes>("Socialmedia", {
    id: { type: dataTypes.INTEGER, allowNull: false, primaryKey: true  },
    // name: { type: dataTypes.STRING, allowNull: false },
    // lastName: { type: dataTypes.TEXT, allowNull: true },
    // gender: { type: dataTypes.TEXT, allowNull: true }
    // deletionDate: { type: dataTypes.DATE, allowNull: true }
  }, {
      indexes: [],
      classMethods: {},
      timestamps: true,
    });

    // Lesson.belongsTo(Course, { foreignKey: "courseId" });
  return Socialmedia;
}
