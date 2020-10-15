import { PostModelSaveDetailsInput } from "./typeDefs";
import Post from "../../database/entities/Post";

const postModel = {
  async saveDetails(input: PostModelSaveDetailsInput) {
    const { title, text, isDraft, accountID } = input;
    return await Post.create({
      title,
      text,
      isDraft,
      author: { id: accountID },
    }).save();
  },
};

export default postModel;
