import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Specialty } from "./Specialty";

@Entity("dentist")
class Dentist {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Specialty)
  @JoinColumn({ name: "specialty_id" })
  specialty: Specialty;

  @Column()
  specialty_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Dentist };
