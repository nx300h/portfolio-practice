// src/models/profile.model.ts
import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Profile extends Model {
  public id!: number;
  public name!: string;
  public bio!: string;
  public location!: string;
  public nationality!: string;
  public availability!: boolean;
  public dateOfBirth!: Date;
  public email!: string;
  public phone!: string;
  public address!: string;
  public github!: string;
  public twitter!: string;
  public linkedin!: string;
  public expectedSalary!: number;
  public ownACar!: boolean;
  public haveDrivingLicense!: boolean;
  public noticePeriod!: number;
  public immigrationStatus!: string;
  public referees!: string;
  public willingToRelocate!: boolean;
  public languages!: string;
  public skills!: string;
}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    bio: { type: DataTypes.TEXT },
    location: { type: DataTypes.STRING },
    nationality: { type: DataTypes.STRING },
    availability: { type: DataTypes.BOOLEAN, defaultValue: false },
    dateOfBirth: { type: DataTypes.DATE },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone: { type: DataTypes.STRING },
    address: { type: DataTypes.TEXT },
    github: { type: DataTypes.STRING },
    twitter: { type: DataTypes.STRING },
    linkedin: { type: DataTypes.STRING },
    expectedSalary: { type: DataTypes.FLOAT },
    ownACar: { type: DataTypes.BOOLEAN, defaultValue: false },
    haveDrivingLicense: { type: DataTypes.BOOLEAN, defaultValue: false },
    noticePeriod: { type: DataTypes.INTEGER },
    immigrationStatus: { type: DataTypes.STRING },
    referees: { type: DataTypes.TEXT },
    willingToRelocate: { type: DataTypes.BOOLEAN, defaultValue: false },
    languages: { type: DataTypes.STRING },
    skills: { type: DataTypes.STRING },
  },
  {
    sequelize,
    tableName: "profiles",
  }
);

export default Profile;
