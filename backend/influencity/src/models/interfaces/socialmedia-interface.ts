import {Instance} from "sequelize";

export interface SocialmediaAttributes {
  id: number;
  name: string;
  influencerId: number;
  profileUrl: string;
  photoProfile: string;
  followers: number;
  totalPosts: number;
}

export interface SocialmediaInstance extends Instance<SocialmediaAttributes> {
  dataValues: SocialmediaAttributes;
}
