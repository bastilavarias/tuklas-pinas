import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import PostItineraryTimestamp from "./PostItineraryTimestamp";

@Entity()
export default class PostItineraryTimestampInterest extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: true })
  name: string;

  @ManyToOne(() => PostItineraryTimestamp)
  itineraryTimestamp: PostItineraryTimestamp;
}
