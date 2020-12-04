import Discovery from "../../database/entities/Discovery";
import {
  IDiscoveryModelSaveFilePayload,
  IDiscoveryServiceCreateInput,
  IDiscoveryServiceCreatePayload,
} from "./typeDefs";
import DiscoveryFile from "../../database/entities/DiscoveryFile";
import { getRepository } from "typeorm";

const discoveryModel = {
  async saveDetails(
    authorID: number,
    payload: IDiscoveryServiceCreatePayload,
    input: IDiscoveryServiceCreateInput
  ): Promise<Discovery> {
    const { placeName, coordination, country } = payload;
    const { text, rating } = input;
    return await Discovery.create({
      author: { id: authorID },
      placeName,
      country,
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

  async fetchDiscoveries(): Promise<Discovery[]> {
    return await getRepository(Discovery)
      .createQueryBuilder("discovery")
      .distinctOn([`"placeName"`])
      .select([`"placeName"`, "country", "coordination"])
      .getRawMany();
  },
};

export default discoveryModel;
