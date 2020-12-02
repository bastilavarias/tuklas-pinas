import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import Discovery from "./Discovery";

@Entity()
export default class DiscoveryFile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  url: string;

  @Column({ nullable: false })
  publicID: string;

  @Column({ nullable: false })
  name: string;

  @Column("bigint", { nullable: false })
  size: number;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: false })
  format: string;

  @ManyToOne(() => Discovery, (discovery) => discovery.files)
  discovery: Discovery;
}
