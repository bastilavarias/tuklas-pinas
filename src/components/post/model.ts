import {
  PostModelSaveDestinationInput,
  PostModelSaveDetailsInput,
  PostModelSaveFileDetailsInput,
} from "./typeDefs";
import Post from "../../database/entities/Post";
import PostFile from "../../database/entities/PostFile";
import { getRepository } from "typeorm";
import PostDestination from "../../database/entities/PostDestination";
import Destination from "../../database/entities/Destination";
import genericModel from "../generic/model";

const postModel = {
  async saveDetails(input: PostModelSaveDetailsInput): Promise<Post> {
    const { title, text, isDraft, accountID } = input;
    return await Post.create({
      title,
      text,
      isDraft,
      author: { id: accountID },
    }).save();
  },

  async saveFileDetails(
    input: PostModelSaveFileDetailsInput
  ): Promise<PostFile> {
    const { url, publicID, format, data, postID } = input;
    return await PostFile.create({
      url,
      publicID,
      data,
      format,
      post: { id: postID },
    }).save();
  },

  async saveDestination(input: PostModelSaveDestinationInput) {
    const { postID, destinationID } = input;
    return await PostDestination.create({
      post: { id: postID },
      destination: { id: destinationID },
    }).save();
  },

  async getDetails(postID: number): Promise<Post> {
    const gotDetails: Post = <Post>await Post.findOne(postID, {
      relations: ["author"],
    });
    gotDetails.files = await this.getDetailsFiles(gotDetails.id);
    gotDetails.destinations = await this.getDestinations(gotDetails.id);
    // @ts-ignore
    delete gotDetails.author.password;
    return gotDetails!;
  },

  async getDetailsFiles(postID: number): Promise<PostFile[]> {
    return await getRepository(PostFile)
      .createQueryBuilder("post_file")
      .select("post_file.id", "id")
      .addSelect("post_file.url", "url")
      .addSelect("post_file.format", "format")
      .where(`post_file."postId" = :postID`, { postID: postID })
      .getRawMany();
  },

  async getDestinations(postID: number): Promise<Destination[]> {
    const raw = await getRepository(PostDestination)
      .createQueryBuilder("post_destination")
      .select("post_destination.id", "id")
      .addSelect(`post_destination."destinationId"`, "destinationID")
      .where(`post_destination."postId" = :postID`, { postID: postID })
      .getRawMany();
    return await Promise.all(
      raw.map(
        async (postDestination) =>
          await genericModel.getDestination(postDestination.destinationID)
      )
    );
  },
};

export default postModel;
