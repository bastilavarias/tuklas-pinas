import Discovery from "../../database/entities/Discovery";
import {
  IDiscoveryCoordination,
  IDiscoveryModelSaveFilePayload,
  IDiscoveryServiceCreateInput,
} from "./typeDefs";
import DiscoveryFile from "../../database/entities/DiscoveryFile";

const discoveryModel = {
  async saveDetails(
    coordination: IDiscoveryCoordination,
    authorID: number,
    input: IDiscoveryServiceCreateInput
  ): Promise<Discovery> {
    const { text, rating } = input;
    return await Discovery.create({
      author: { id: authorID },
      coordination,
      text,
      rating,
    }).save();
  },

  async saveFile(discoveryID: number, payload: IDiscoveryModelSaveFilePayload) {
    const { url, publicID, format, name, size, type } = payload;
    await DiscoveryFile.create({
      url,
      publicID,
      format,
      name,
      size,
      type,
      discovery: { id: discoveryID },
    }).save();
  },

  async getDetails(discoveryID: number): Promise<Discovery> {
    const gotDetails = await Discovery.findOne(discoveryID, {
      relations: ["author", "author.profile", "files"],
    });
    //@ts-ignore
    delete gotDetails.author.password;
    return gotDetails!;
  },
};

export default discoveryModel;
