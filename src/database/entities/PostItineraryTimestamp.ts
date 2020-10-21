import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Destination from "./Destination";
import PostItinerary from "./PostItinerary";
import PostItineraryTimestampInterest from "./PostItineraryTimestampInterest";

@Entity()
export default class PostItineraryTimestamp extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("time", {
    nullable: false,
  })
  time: Date;

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

  @OneToOne(() => Destination)
  @JoinColumn()
  destination: Destination;

  @ManyToOne(() => PostItinerary)
  itinerary: PostItinerary;

  @OneToMany(
    () => PostItineraryTimestampInterest,
    (interest) => interest.itineraryTimestamp
  )
  @JoinColumn({ name: "itineraryTimestampId" })
  interests: PostItineraryTimestampInterest[];
}
