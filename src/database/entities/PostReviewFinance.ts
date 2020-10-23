import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Post from "./Post";

@Entity()
export default class PostReviewFinance extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: true })
  text: string;

  @Column({ nullable: true })
  rating: number;

  @ManyToOne(() => Post)
  post: Post;
}
