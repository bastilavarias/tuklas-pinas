import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import PostItinerary from "./PostItinerary";
import PostItineraryDayTimestamp from "./PostItineraryDayTimestamp";
import { ColumnNumericTransformer } from "../helper";

@Entity()
export default class PostItineraryDay extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("date", {
    nullable: false,
  })
  date: Date;

  @Column({
    nullable: false,
  })
  day: number;

  @Column({
    nullable: false,
  })
  destinationsCount: number;

  @Column("numeric", {
    nullable: false,
    transformer: new ColumnNumericTransformer(),
  })
  expenses: number;

  @ManyToOne(() => PostItinerary)
  itinerary: PostItinerary;

  @OneToMany(
    () => PostItineraryDayTimestamp,
    (postItineraryDayTimestamp) => postItineraryDayTimestamp.itineraryDay
  )
  @JoinColumn({ name: "itineraryDayId" })
  timestamps: PostItineraryDayTimestamp[];
}
