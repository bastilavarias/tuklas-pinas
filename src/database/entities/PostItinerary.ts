import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
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

  @ManyToOne(() => Post)
  post: Post;

  @OneToMany(
    () => PostItineraryDay,
    (postItineraryDay) => postItineraryDay.itinerary
  )
  @JoinColumn({ name: "itineraryId" })
  days: PostItineraryDay[];
}
