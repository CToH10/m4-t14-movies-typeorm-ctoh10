import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Movies {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column()
  price: number;

  @Column()
  duration: number;
}
