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
import { DiscoveryCoordination } from "../../components/discovery/typeDefs";

@Entity()
export default class Discovery extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("point", {
    nullable: false,
    transformer: ColumnCoordinationTransformer,
  })
  coordination: DiscoveryCoordination;

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
