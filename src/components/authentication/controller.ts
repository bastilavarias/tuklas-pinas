import { Request, Response } from "express";
import { AuthenticationServiceSignupInput } from "./typeDefs";
import authenticationService from "./service";

const authenticationController = {
  async signup(request: Request, response: Response) {
    try {
      const input: AuthenticationServiceSignupInput = request.body;
      const result = await authenticationService.signup(input);
      response.status(200).json(result);
    } catch (errors) {
      response.status(400).json(errors);
    }
  },
};

export default authenticationController;
