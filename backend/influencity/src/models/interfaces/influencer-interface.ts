import {Instance} from "sequelize";

export interface InfluencerAttributes {
  id: number;
  name: string;
  lastName: string;
  gender: string;
  // deletionDate: Date;
}

export interface InfluencerInstance extends Instance<InfluencerAttributes> {
  dataValues: InfluencerAttributes;
}
