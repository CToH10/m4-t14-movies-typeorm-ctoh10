import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Movie {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ type: "text", nullable: true })
  description?: string | undefined;

  @Column()
  price: number;

  @Column()
  duration: number;
}
