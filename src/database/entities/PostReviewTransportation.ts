import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Post from "./Post";
import Destination from "./Destination";

@Entity()
export default class PostReviewTransportation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  type: string;

  @Column("text", { nullable: true })
  text: string;

  @Column({ nullable: false })
  rating: number;

  @ManyToOne(() => Post)
  post: Post;

  @ManyToOne(() => Destination)
  destination: Destination;
}
