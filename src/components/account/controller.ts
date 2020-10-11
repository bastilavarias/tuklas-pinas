import { Request, Response } from "express";
import { SignupInputs } from "./typeDef";
import accountService from "./service";

const accountController = {
  async signup(request: Request, response: Response) {
    try {
      const inputs: SignupInputs = request.body;
      const result = await accountService.signup(inputs);
      response.status(200).json(result);
    } catch (errors) {
      response.status(400).json(errors);
    }
  },
};

export default accountController;
