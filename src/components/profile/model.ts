import Profile from "../../database/entities/Profile";
import {
  IProfileModelSaveDetailsInput,
  IProfileModelUpdateDetailsInput,
} from "./typeDefs";
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

  async updateDetails(
    profileID: number,
    input: IProfileModelUpdateDetailsInput
  ): Promise<Profile> {
    const { firstName, lastName, nationality, birthDate, sex } = input;
    await Profile.update(profileID, {
      firstName,
      lastName,
      nationality,
      birthDate,
      sex,
    });
    return await this.getDetails(profileID);
  },

  async saveImage(display: string, cover: string): Promise<ProfileImage> {
    return await ProfileImage.create({
      display,
      cover,
    }).save();
  },

  async getDetails(profileID: number): Promise<Profile> {
    const gotDetails = await Profile.findOne(profileID, {
      relations: ["image"],
    });
    return gotDetails!;
  },

  async updateDisplayImage(imageID: number, url: string) {
    await ProfileImage.update({ id: imageID }, { display: url });
  },

  async updateCoverPhoto(imageID: number, url: string) {
    await ProfileImage.update({ id: imageID }, { cover: url });
  },
};

export default profileModel;
