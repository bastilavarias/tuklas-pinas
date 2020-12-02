import {
  IDiscoveryCoordination,
  IDiscoveryModelSaveFilePayload,
  IDiscoveryServiceCreateInput,
} from "./typeDefs";
import discoveryModel from "./model";
import cloudinaryService from "../cloudinary/service";
import utilityService from "../utility/service";
import Discovery from "../../database/entities/Discovery";

const discoveryService = {
  async create(
    coordination: IDiscoveryCoordination,
    authorID: number,
    input: IDiscoveryServiceCreateInput
  ): Promise<Discovery> {
    const savedDetails = await discoveryModel.saveDetails(
      coordination,
      authorID,
      input
    );
    if (input.files.length > 0) {
      await Promise.all(
        input.files.map(async (file) => {
          const folder = "discoveries";
          const uploadedFileMeta = await cloudinaryService.upload(file, folder);
          const payload: IDiscoveryModelSaveFilePayload = {
            publicID: uploadedFileMeta.publicID,
            name: file!.originalname,
            fileName: "",
            url: uploadedFileMeta.url,
            size: file!.size,
            type: file!.mimetype,
            format: utilityService.selectFileFormat(file!.mimetype),
          };
          await discoveryModel.saveFile(savedDetails.id, payload);
        })
      );
    }
    return await discoveryModel.getDetails(savedDetails.id);
  },
};

export default discoveryService;
