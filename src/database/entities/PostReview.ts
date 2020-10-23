import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Post from "./Post";
import PostReviewRestaurant from "./PostReviewRestaurant";
import PostReviewLodging from "./PostReviewLodging";
import PostReviewTransportation from "./PostReviewTransportation";
import PostReviewActivity from "./PostReviewActivity";
import PostReviewInternetAccess from "./PostReviewInternetAccess";
import PostReviewFinance from "./PostReviewFinance";
import PostReviewTip from "./PostReviewTip";
import PostReviewAvoid from "./PostReviewAvoid";

@Entity()
export default class PostReview extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post)
  post: Post;

  @OneToMany(() => PostReviewRestaurant, (table) => table.review)
  @JoinColumn({ name: "reviewId" })
  restaurants: PostReviewRestaurant[];

  @OneToMany(() => PostReviewLodging, (table) => table.review)
  @JoinColumn({ name: "reviewId" })
  lodgings: PostReviewLodging[];

  @OneToMany(() => PostReviewTransportation, (table) => table.review)
  @JoinColumn({ name: "reviewId" })
  transportation: PostReviewTransportation[];

  @OneToMany(() => PostReviewActivity, (table) => table.review)
  @JoinColumn({ name: "reviewId" })
  activities: PostReviewActivity[];

  @OneToOne(() => PostReviewInternetAccess)
  @JoinColumn({ name: "internetAccessId" })
  internetAccess: PostReviewInternetAccess;

  @OneToOne(() => PostReviewFinance)
  @JoinColumn({ name: "financeId" })
  finance: PostReviewFinance;

  @OneToMany(() => PostReviewTip, (table) => table.review)
  @JoinColumn({ name: "reviewId" })
  tips: PostReviewTip[];

  @OneToMany(() => PostReviewAvoid, (table) => table.review)
  @JoinColumn({ name: "reviewId" })
  avoids: PostReviewAvoid[];
}
