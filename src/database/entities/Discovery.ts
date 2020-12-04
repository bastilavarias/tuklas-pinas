import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Account from "./Account";
import DiscoveryFile from "./DiscoveryFile";
import { ColumnCoordinationTransformer } from "../helper";
import { IDiscoveryCoordination } from "../../components/discovery/typeDefs";

@Entity()
export default class Discovery extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ fulltext: true })
  @Column("text", { nullable: true })
  placeName: string;

  @Column({ nullable: false })
  country: string;

  @Column("point", {
    nullable: false,
    transformer: ColumnCoordinationTransformer,
  })
  coordination: IDiscoveryCoordination;

  @Index({ fulltext: true })
  @Column("text", { nullable: true })
  text: string;

  @Column({ nullable: false })
  rating: number;

  @Column("timestamp with time zone", {
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp with time zone", {
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column({
    nullable: false,
    default: () => false,
  })
  isDeleted: boolean;

  @ManyToOne(() => Account)
  author: Account;

  @OneToMany(() => DiscoveryFile, (files) => files.discovery)
  @JoinColumn({ name: "discoveryId" })
  files: DiscoveryFile[];
}
