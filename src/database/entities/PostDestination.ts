import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Destination from "./Destination";
import Post from "./Post";

@Entity()
export default class PostDestination extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post, (post) => post.destinations)
  post: Post;

  @ManyToOne(() => Destination)
  destination: Destination;
}
