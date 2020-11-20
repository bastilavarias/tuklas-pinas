import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
  OneToMany,
  JoinColumn,
  OneToOne,
} from "typeorm";
import Account from "./Account";
import PostFile from "./PostFile";
import PostCategory from "./PostCategory";
import PostReaction from "./PostReaction";
import PostComment from "./PostComment";
import PostTravelEvent from "./PostTravelEvent";
import PostDestination from "./PostDestination";
import PostReview from "./PostReview";
import PostItinerary from "./PostItinerary";

@Entity()
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ fulltext: true })
  @Column({ nullable: true })
  title: string;

  @Index({ fulltext: true })
  @Column("text", { nullable: true })
  text: string;

  @Column({ nullable: true })
  type: string;

  @Column({
    nullable: false,
  })
  isDraft: boolean;

  @Column("timestamp with time zone", {
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp with time zone", {
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column({
    nullable: false,
    default: () => false,
  })
  isDeleted: boolean;

  @ManyToOne(() => Account)
  author: Account;

  @OneToMany(() => PostFile, (files) => files.post)
  @JoinColumn({ name: "postId" })
  files: PostFile[];

  @OneToMany(() => PostCategory, (categories) => categories.post)
  @JoinColumn({ name: "postId" })
  categories: PostCategory[];

  @OneToMany(() => PostTravelEvent, (travelEvent) => travelEvent.post)
  @JoinColumn({ name: "postId" })
  travelEvents: PostTravelEvent[];

  @OneToMany(() => PostDestination, (destination) => destination.post)
  @JoinColumn({ name: "postId" })
  destinations: PostDestination[];

  @OneToMany(() => PostComment, (comment) => comment.post)
  @JoinColumn({ name: "postId" })
  comments: PostComment[];

  @OneToMany(() => PostReaction, (reaction) => reaction.post)
  @JoinColumn({ name: "postId" })
  reactions: PostReaction[];

  @OneToMany(() => PostReview, (review) => review.post)
  @JoinColumn({ name: "postId" })
  reviews: PostReview[];

  @OneToOne(() => PostItinerary, (itinerary) => itinerary.post)
  itinerary: PostItinerary;

  commentsCount?: number;
  reactionsCount?: number;
}
