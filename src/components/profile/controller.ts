import { Request, Response } from "express";
import { IProfileServiceUpdateDetailsInput } from "./typeDefs";
import profileService from "./service";
// import profileService from "./service";

const profileController = {
  async update(request: Request, response: Response) {
    try {
      const profileID = parseInt(request.params.profileID) || 0;
      const input: IProfileServiceUpdateDetailsInput = {
        firstName: request.body.firstName || "",
        lastName: request.body.lastName || "",
        nationality: request.body.nationality || "",
        birthDate: request.body.birthDate || "",
        sex: request.body.sex || "",
        //@ts-ignore
        displayImage: request.files.displayImage[0] || null,
        //@ts-ignore
        coverPhoto: request.files.coverPhoto[0] || null,
      };
      const result = await profileService.update(profileID, input);
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },
};

export default profileController;
