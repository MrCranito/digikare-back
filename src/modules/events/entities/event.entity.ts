import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event { 
    @PrimaryGeneratedColumn()
    id: string;

    @Column({type: 'jsonb'})
    public user;

    @Column({type: 'jsonb', nullable: true, default: {}})
    public consents;

    @Column({ type: 'text' })
    public createdAt: String;

    @Column({ type: 'text' })
    public updatedAt: String;
}