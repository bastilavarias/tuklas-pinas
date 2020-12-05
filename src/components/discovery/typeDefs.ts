import { ICloudinaryFileMeta } from "../cloudinary/typeDefs";
import Discovery from "../../database/entities/Discovery";

export interface IDiscoveryCoordination {
  latitude: any;
  longitude: any;
}

export interface IDiscoveryServiceCreatePayload {
  coordination: IDiscoveryCoordination;
  placeName: string;
  country: string;
}

export interface IDiscoveryServiceCreateInput {
  files: Express.Multer.File[];
  text: string;
  rating: number;
}

export interface IDiscoveryModelSaveFilePayload extends ICloudinaryFileMeta {
  name: string;
  size: number;
  type: string;
}

export interface IDiscoveryServiceGetPlaceDetailsResult {
  name: string;
  country: string;
  coordination: IDiscoveryCoordination;
  experiences: Discovery[];
}
