import postModel from "../post/model";
import discoveryModel from "../discovery/model";

const accountService = {
  async getPosts(accountID: number) {
    return await postModel.getAccountPosts(accountID);
  },

  async getDiscoveryCoordination(accountID: number) {
    return await discoveryModel.getAccountCoordination(accountID);
  },
};

export default accountService;
