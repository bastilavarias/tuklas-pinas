import { SignupInputs, SignupResult } from "./typeDef";
import accountModel from "./model";

const accountService = {
  async signup(inputs: SignupInputs): Promise<SignupResult> {
    const { email } = inputs;
    const gotDetails = await accountModel.getDetailsByEmail(email);
    const isEmailExists = !!gotDetails;
    if (isEmailExists) {
      return {
        token: "",
        error: {
          email: `${email} already exists.`,
        },
      };
    }
    return {
      token: "token here",
      error: {
        email: "",
      },
    };
  },
};

export default accountService;
