import { Entity, Column } from 'typeorm';

@Entity()
export class Event { 
    @Column()
    id: string;

    @Column()
    enabled: boolean;
}