import postModel from "../post/model";

const accountService = {
  async getPosts(accountID: number) {
    return await postModel.getAccountPosts(accountID);
  },
};

export default accountService;
