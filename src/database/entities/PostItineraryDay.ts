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
  })
  expenses: number;

  @ManyToOne(() => PostItinerary)
  postItinerary: PostItineraryDay;

  @OneToMany(
    () => PostItineraryDayTimestamp,
    (postItineraryDayTimestamp) => postItineraryDayTimestamp.postItineraryDay
  )
  @JoinColumn({ name: "postItineraryDayId" })
  timestamps: PostItineraryDayTimestamp[];
}
