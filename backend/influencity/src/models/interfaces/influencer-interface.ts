import {Instance} from "sequelize";

export interface InfluencerAttributes {
  name: string;
  description: string;
}

export interface InfluencerInstance extends Instance<InfluencerAttributes> {
  dataValues: InfluencerAttributes;
}
