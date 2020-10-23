import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import PostReview from "./PostReview";

@Entity()
export default class PostReviewLodging extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column("text", { nullable: true })
  text: string;

  @Column({ nullable: false })
  rating: number;

  @ManyToOne(() => PostReview)
  review: PostReview;
}
