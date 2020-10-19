import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Post from "./Post";
import TravelEvent from "./TravelEvent";

@Entity()
export default class PostTravelEvent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post)
  post: Post;

  @ManyToOne(() => TravelEvent)
  travelEvent: TravelEvent;
}
