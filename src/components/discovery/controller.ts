import { Request, Response } from "express";
import {
  IDiscoveryCoordination,
  IDiscoveryServiceCreateInput,
} from "./typeDefs";
import discoveryService from "./service";

const discoveryController = {
  async create(request: Request, response: Response) {
    try {
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
      const result = await discoveryService.create(
        coordination,
        authorID,
        input
      );
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },
};

export default discoveryController;
