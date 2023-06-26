import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../entities/event.entity';
import { CreateEventDto } from '../dto/event.dto';
import { User } from './../../users/entities/user.entity';

@Injectable()
export class EventsService {

   @InjectRepository(Event)
   private readonly repositoryEvent: Repository<Event>;
   @InjectRepository(User)
   private readonly repositoryUser: Repository<User>;

    createEvent(body: CreateEventDto): Promise<Event> { 
        const event: Event = new Event();
        event.consents = body.consents;
        event.user = body.user;
        event.updatedAt = new Date().toISOString();
        event.createdAt = new Date().toISOString();

        // get User and update consents
        this.repositoryUser.findOneBy({id: Number.parseInt(body.user.id, 10)}).then((user) => {
            this.repositoryUser.update(user.id, {consents: body.consents});
        }).catch((_) => {
            throw new HttpException({
                status: '422',
                error: "L'utilisateur n'existe pas",
              }, HttpStatus.NOT_FOUND);
        })
        return this.repositoryEvent.save(event);
    }
}