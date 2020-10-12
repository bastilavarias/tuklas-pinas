import {
  AuthenticationServiceSignupInput,
  AuthenticationServiceSignupResult,
} from "./typeDefs";
import validator from "validator";
import profileModel from "../profile/model";
import utilityService from "../utility/service";
import accountModel from "../account/model";

const authenticationService = {
  async signup(
    input: AuthenticationServiceSignupInput
  ): Promise<AuthenticationServiceSignupResult> {
    const result = {
      token: "",
      error: {
        email: `${input.email} already exists.`,
      },
    };
    const isEmail = validator.isEmail(input.email);
    if (!isEmail) {
      result.error.email = `${input.email} is not valid email.`;
      return result;
    }
    const gotAccountDetails = await accountModel.getDetailsByEmail(input.email);
    const isEmailExists = !!gotAccountDetails;
    if (isEmailExists) {
      result.error.email = `${input.email} is already exists.`;
      return result;
    }
    const profileSaveDetailsInput = {
      firstName: input.firstName,
      lastName: input.lastName,
      nationality: input.nationality,
      birthDate: input.birthDate,
      sex: input.sex,
    };
    const savedProfileDetails = await profileModel.saveDetails(
      profileSaveDetailsInput
    );
    const accountSaveDetailsInput = {
      email: input.email,
      password: utilityService.hashPassword(input.password),
      type: "client",
      profileID: savedProfileDetails.id,
    };
    const savedAccountDetails = await accountModel.saveDetails(
      accountSaveDetailsInput
    );
    console.log(savedAccountDetails);
    return {
      token: "token here",
      error: {
        email: "",
      },
    };
  },
};

export default authenticationService;
