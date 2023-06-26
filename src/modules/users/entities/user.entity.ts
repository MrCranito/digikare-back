
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Event } from 'src/modules/events/entities/event.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({})
  @IsEmail()
  public email: string;

  @Column({type: 'jsonb', nullable: true, default: {}})
  public consents: Event[] = [];
}
