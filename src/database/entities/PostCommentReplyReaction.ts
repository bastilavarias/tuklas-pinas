import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import Account from "./Account";
import PostCommentReply from "./PostCommentReply";

@Entity()
export default class PostCommentReplyReaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @ManyToOne(() => PostCommentReply, (comment) => comment.reactions)
  reply: PostCommentReply;

  @ManyToOne(() => Account)
  account: Account;
}
