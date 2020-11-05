import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Post from "./Post";
import Account from "./Account";
import PostCommentReply from "./PostCommentReply";
import PostCommentReaction from "./PostCommentReaction";

@Entity()
export default class PostComment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  text: string;

  @ManyToOne(() => Account)
  author: Account;

  @Column("timestamp with time zone", {
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column({
    nullable: false,
    default: () => false,
  })
  isDeleted: boolean;

  @ManyToOne(() => Post, (post) => post.files)
  post: Post;

  @OneToMany(() => PostCommentReply, (reply) => reply.comment)
  @JoinColumn({ name: "commentId" })
  replies: PostCommentReply[];

  @OneToMany(() => PostCommentReaction, (reply) => reply.comment)
  @JoinColumn({ name: "commentId" })
  reactions: PostCommentReaction[];
}
