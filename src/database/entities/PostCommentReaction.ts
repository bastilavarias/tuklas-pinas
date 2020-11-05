import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import Account from "./Account";
import PostComment from "./PostComment";

@Entity()
export default class PostCommentReaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @ManyToOne(() => PostComment, (comment) => comment.reactions)
  comment: PostComment;

  @ManyToOne(() => Account)
  account: Account;
}
