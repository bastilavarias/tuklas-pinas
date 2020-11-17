import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import Post from "./Post";

@Entity()
export default class PostFile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  url: string;

  @Column({ nullable: false })
  publicID: string;

  @Column({ nullable: false })
  name: string;

  @Column("bigint", { nullable: false })
  size: number;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: false })
  format: string;

  @ManyToOne(() => Post, (post) => post.files)
  post: Post;
}
