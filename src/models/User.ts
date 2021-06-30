import { IUser } from "./dtos/IUser";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity("users")
class User implements IUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("varchar")
  lastname: string;

  @Column("varchar")
  nickname: string;

  @Column("varchar")
  address: string;

  @Column("varchar")
  bio?: string;

  @CreateDateColumn()
  @Exclude()
  createdAt: Date;

  @CreateDateColumn()
  @Exclude()
  updatedAt: Date;

}

export { User };
