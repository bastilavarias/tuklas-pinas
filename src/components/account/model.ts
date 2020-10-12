import Account from "../../database/entities/Account";
import { AccountModelSaveDetailsInput } from "./typeDefs";

const accountModel = {
  async getDetailsByEmail(email: string): Promise<Account> {
    const gotDetails = await Account.findOne({ where: { email } });
    return gotDetails!;
  },

  async saveDetails(input: AccountModelSaveDetailsInput): Promise<Account> {
    const { email, password, type, profileID } = input;
    return await Account.create({
      email,
      password,
      type,
      profile: { id: profileID },
    }).save();
  },
};

export default accountModel;
