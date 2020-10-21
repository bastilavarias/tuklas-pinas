import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Destination from "./Destination";
import PostItineraryDay from "./PostItineraryDay";
import PostItineraryDayTimestampInterest from "./PostItineraryDayTimestampInterest";

@Entity()
export default class PostItineraryDayTimestamp extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("time", {
    nullable: false,
  })
  time: Date;

  @Column({
    nullable: true,
  })
  transportation: string;

  @Column("numeric", {
    nullable: true,
  })
  fare: number;

  @Column("numeric", {
    nullable: false,
  })
  expenses: number;

  @Column("text", { nullable: true })
  otherDetails: string;

  @ManyToOne(() => Destination)
  destination: Destination;

  @ManyToOne(() => PostItineraryDay)
  itineraryDay: PostItineraryDay;

  @OneToMany(
    () => PostItineraryDayTimestampInterest,
    (interest) => interest.timestamp
  )
  @JoinColumn({ name: "timestampId" })
  interests: PostItineraryDayTimestampInterest[];
}
