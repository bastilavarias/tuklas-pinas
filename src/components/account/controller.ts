import { Request, Response } from "express";
import accountService from "./service";

const accountController = {
  async getPosts(request: Request, response: Response) {
    try {
      const accountID = parseInt(request.params.accountID) || 0;
      const gotPosts = await accountService.getPosts(accountID);
      response.status(200).json(gotPosts);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async getDiscoveryCoordination(request: Request, response: Response) {
    try {
      const accountID = parseInt(request.params.accountID) || 0;
      const gotCoordination = await accountService.getDiscoveryCoordination(
        accountID
      );
      response.status(200).json(gotCoordination);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },
};

export default accountController;
