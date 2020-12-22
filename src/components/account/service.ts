import postModel from "../post/model";
import discoveryModel from "../discovery/model";
import accountModel from "./model";

const accountService = {
  async getPosts(accountID: number) {
    return await postModel.getAccountPosts(accountID);
  },

  async getDiscoveryCoordination(accountID: number) {
    return await discoveryModel.getAccountCoordination(accountID);
  },

  async getInformation(accountID: number) {
    return await accountModel.getDetailsByID(accountID);
  },
};

export default accountService;
