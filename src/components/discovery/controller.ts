import { Request, Response } from "express";
import {
  IDiscoveryServiceCreateInput,
  IDiscoveryServiceCreatePayload,
} from "./typeDefs";
import discoveryService from "./service";

const discoveryController = {
  async create(request: Request, response: Response) {
    try {
      const payload: IDiscoveryServiceCreatePayload = {
        coordination: {
          latitude: parseFloat(request.params.latitude) || 0.0,
          longitude: parseFloat(request.params.longitude) || 0.0,
        },
        placeName: request.params.placeName || "",
        country: request.params.country || "",
      };
      //@ts-ignore
      const authorID: number = parseInt(request.user.id) || 0;
      const input: IDiscoveryServiceCreateInput = {
        text: request.body.text || "",
        rating: parseInt(request.body.rating) || 0,
        //@ts-ignore
        files: request.files || [],
      };
      const result = await discoveryService.create(authorID, payload, input);
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async fetchCoordination(_: Request, response: Response) {
    try {
      const fetchedCoordination = await discoveryService.fetchCoordination();
      response.status(200).json(fetchedCoordination);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },
};

export default discoveryController;
