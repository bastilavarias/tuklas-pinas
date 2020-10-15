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

  @Column("bytea", { nullable: false })
  data: Buffer;

  @ManyToOne(() => Post, (post) => post.files)
  post: Post;
}
