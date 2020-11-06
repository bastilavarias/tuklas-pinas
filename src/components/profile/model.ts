import Profile from "../../database/entities/Profile";
import { IProfileModelSaveDetailsInput } from "./typeDefs";
import ProfileImage from "../../database/entities/ProfileImage";

const profileModel = {
  async saveDetails(input: IProfileModelSaveDetailsInput): Promise<Profile> {
    const { firstName, lastName, nationality, birthDate, sex, imageID } = input;
    return await Profile.create({
      firstName,
      lastName,
      nationality,
      birthDate,
      sex,
      image: {
        id: imageID,
      },
    }).save();
  },

  async saveImage(url: string, publicID: string): Promise<ProfileImage> {
    return await ProfileImage.create({
      url,
      publicID,
    }).save();
  },
};

export default profileModel;
