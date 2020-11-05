import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import Post from "./Post";
import Account from "./Account";

@Entity()
export default class PostReaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @ManyToOne(() => Post, (post) => post.files)
  post: Post;

  @ManyToOne(() => Account)
  account: Post;
}
