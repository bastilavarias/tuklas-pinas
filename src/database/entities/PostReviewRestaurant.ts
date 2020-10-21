import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Post from "./Post";

@Entity()
export default class PostReviewRestaurant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column("text", { nullable: true })
  text: string;

  @Column({ nullable: false })
  rating: number;

  @ManyToOne(() => Post)
  post: Post;
}
