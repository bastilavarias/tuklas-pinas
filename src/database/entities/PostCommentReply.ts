import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Account from "./Account";
import PostComment from "./PostComment";
import PostCommentReaction from "./PostCommentReaction";

@Entity()
export default class PostCommentReply extends BaseEntity {
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

  @ManyToOne(() => PostComment, (comment) => comment.replies)
  comment: PostComment;

  @OneToMany(() => PostCommentReaction, (reply) => reply.comment)
  @JoinColumn({ name: "replyId" })
  reactions: PostCommentReaction[];

  reactionsCount?: number;
}
