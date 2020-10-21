import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Post from "./Post";

@Entity()
export default class PostReviewInternetAccess extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  text: string;

  @Column({ nullable: true })
  rating: number;

  @ManyToOne(() => Post)
  post: Post;
}
