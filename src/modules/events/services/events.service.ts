import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
    createEvent(): string { 
        return 'This action adds a new event';
    }
}