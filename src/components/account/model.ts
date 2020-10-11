import Account from "../../database/entities/Account";

const accountModel = {
  async getDetailsByEmail(email: string): Promise<Account> {
    const gotDetails = await Account.findOne({ where: { email } });
    return gotDetails!;
  },
};

export default accountModel;
