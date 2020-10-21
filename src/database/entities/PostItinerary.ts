import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Post from "./Post";

@Entity()
export default class PostItinerary extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("timestamp with time zone", {
    nullable: false,
  })
  date: Date;

  @Column("int", {
    nullable: false,
  })
  destinationsCount: number;

  @Column("numeric", {
    nullable: false,
  })
  expenses: number;

  @ManyToOne(() => Post)
  post: Post;
}
