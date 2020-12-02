import { Request, Response } from "express";
import {
  IDiscoveryCoordination,
  IDiscoveryServiceCreateInput,
} from "./typeDefs";

const discoveryController = {
  async create(request: Request, _response: Response) {
    const coordination: IDiscoveryCoordination = {
      latitude: parseFloat(request.params.latitude) || 0.0,
      longitude: parseFloat(request.params.longitude) || 0.0,
    };
    //@ts-ignore
    const authorID: number = parseInt(request.user.id) || 0;
    const input: IDiscoveryServiceCreateInput = {
      text: request.body.text || "",
      rating: parseInt(request.body.rating) || 0,
      //@ts-ignore
      files: request.files || [],
    };
    console.log(coordination);
    console.log(authorID);
    console.log(input);
  },
};

export default discoveryController;
