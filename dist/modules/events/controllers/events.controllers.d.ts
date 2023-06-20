import { EventsService } from '../services/events.service';
import { Event } from '../entities/event.entity';
import { CreateEventDto } from '../dto/event.dto';
export declare class EventsController {
    private eventsService;
    constructor(eventsService: EventsService);
    create(body: CreateEventDto): Promise<Event>;
}
