import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import Post from "./Post";
import PostItineraryDay from "./PostItineraryDay";
import { ColumnNumericTransformer } from "../helper";

@Entity()
export default class PostItinerary extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  totalDestinations: number;

  @Column("numeric", {
    nullable: false,
    transformer: new ColumnNumericTransformer(),
  })
  totalExpenses: number;

  @OneToOne(() => Post, (post) => post.itinerary)
  @JoinColumn({ name: "postId" })
  post: Post;

  @OneToMany(
    () => PostItineraryDay,
    (postItineraryDay) => postItineraryDay.itinerary
  )
  @JoinColumn({ name: "itineraryId" })
  days: PostItineraryDay[];
}
