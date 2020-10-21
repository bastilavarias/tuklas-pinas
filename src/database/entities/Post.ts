import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Account from "./Account";
import PostFile from "./PostFile";
import Destination from "./Destination";
import PostCategory from "./PostCategory";
import TravelEvent from "./TravelEvent";

@Entity()
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ fulltext: true })
  @Column({ nullable: true })
  title: string;

  @Index({ fulltext: true })
  @Column("text", { nullable: true })
  text: string;

  @Column({ nullable: false })
  type: string;

  @Column({
    nullable: false,
  })
  isDraft: boolean;

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

  @ManyToOne(() => Account)
  author: Account;

  @OneToMany(() => PostFile, (files) => files.post)
  @JoinColumn({ name: "postId" })
  files: PostFile[];

  @OneToMany(() => PostCategory, (categories) => categories.post)
  @JoinColumn({ name: "postId" })
  categories: PostCategory[];

  destinations: Destination[];

  travelEvents: TravelEvent[];
}
