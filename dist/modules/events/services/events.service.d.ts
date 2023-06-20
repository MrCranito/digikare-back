import { Event } from '../entities/event.entity';
import { CreateEventDto } from '../dto/event.dto';
export declare class EventsService {
    private readonly repositoryEvent;
    private readonly repositoryUser;
    createEvent(body: CreateEventDto): Promise<Event>;
}
