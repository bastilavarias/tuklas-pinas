import {
  IDiscoveryCoordination,
  IDiscoveryModelSaveFilePayload,
  IDiscoveryServiceCreateInput,
  IDiscoveryServiceCreatePayload,
  IDiscoveryServiceGetPlaceDetailsResult,
} from "./typeDefs";
import discoveryModel from "./model";
import cloudinaryService from "../cloudinary/service";
import utilityService from "../utility/service";
import Discovery from "../../database/entities/Discovery";

const discoveryService = {
  async create(
    authorID: number,
    payload: IDiscoveryServiceCreatePayload,
    input: IDiscoveryServiceCreateInput
  ): Promise<Discovery> {
    const savedDetails = await discoveryModel.saveDetails(
      authorID,
      payload,
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
    return await discoveryModel.get(savedDetails.id);
  },

  async fetch(): Promise<Discovery[]> {
    return await discoveryModel.fetch();
  },

  async getPlaceDetails(
    coordination: IDiscoveryCoordination
  ): Promise<IDiscoveryServiceGetPlaceDetailsResult> {
    const fetchDiscoveries = await discoveryModel.fetchByCoordination(
      coordination
    );
    if (fetchDiscoveries.length > 0) {
      const firstSelection = fetchDiscoveries[0];
      return {
        name: firstSelection.placeName,
        country: firstSelection.country,
        coordination: firstSelection.coordination,
        experiences: fetchDiscoveries,
      };
    }
    const gotDiscovery = await discoveryModel.getByCoordination(coordination);
    return {
      name: gotDiscovery.placeName,
      country: gotDiscovery.country,
      coordination: gotDiscovery.coordination,
      experiences: [],
    };
  },
};

export default discoveryService;
