import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import PostItineraryDayTimestamp from "./PostItineraryDayTimestamp";

@Entity()
export default class PostItineraryDayTimestampInterest extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: true })
  name: string;

  @ManyToOne(() => PostItineraryDayTimestamp)
  itineraryTimestamp: PostItineraryDayTimestamp;
}
