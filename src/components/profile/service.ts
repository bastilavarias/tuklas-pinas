import { IProfileServiceUpdateDetailsInput } from "./typeDefs";
import profileModel from "./model";
import cloudinaryService from "../cloudinary/service";

const profileService = {
  async update(profileID: number, input: IProfileServiceUpdateDetailsInput) {
    const gotDetails = await profileModel.getDetails(profileID);
    if (input.displayImage) {
      const folder = "profile/display-images";
      const uploadedDisplayImage = await cloudinaryService.upload(
        input.displayImage,
        folder
      );
      await profileModel.updateImage(
        gotDetails.image.id,
        uploadedDisplayImage.url,
        gotDetails.image.cover
      );
    }
    if (input.coverPhoto) {
      const folder = "profile/cover-photos";
      const uploadedCoverPhoto = await cloudinaryService.upload(
        input.displayImage,
        folder
      );
      await profileModel.updateImage(
        gotDetails.image.id,
        gotDetails.image.display,
        uploadedCoverPhoto.url
      );
    }
    return await profileModel.updateDetails(profileID, input);
  },
};

export default profileService;
