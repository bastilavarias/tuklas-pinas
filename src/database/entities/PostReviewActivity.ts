import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Destination from "./Destination";
import PostReview from "./PostReview";

@Entity()
export default class PostReviewActivity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column("text", { nullable: true })
  text: string;

  @Column({ nullable: false })
  rating: number;

  @ManyToOne(() => Destination)
  destination: Destination;

  @ManyToOne(() => PostReview)
  review: PostReview;
}
