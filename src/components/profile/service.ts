import { IProfileServiceUpdateDetailsInput } from "./typeDefs";
import profileModel from "./model";
import cloudinaryService from "../cloudinary/service";

const profileService = {
  async update(profileID: number, input: IProfileServiceUpdateDetailsInput) {
    const gotDetails = await profileModel.getDetails(profileID);
    if (input.displayImage) {
      const folder = "profile/display-images";
      const uploadedImage = await cloudinaryService.upload(
        input.displayImage,
        folder
      );
      await profileModel.updateDisplayImage(
        gotDetails.image.id,
        uploadedImage.url
      );
    }
    if (input.coverPhoto) {
      const folder = "profile/cover-photos";
      const uploadedImage = await cloudinaryService.upload(
        input.coverPhoto,
        folder
      );
      await profileModel.updateCoverPhoto(
        gotDetails.image.id,
        uploadedImage.url
      );
    }
    return await profileModel.updateDetails(profileID, input);
  },
};

export default profileService;
