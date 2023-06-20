import { Controller, Get, Post } from '@nestjs/common';
import { EventsService } from '../services/events.service';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}
  
  @Post()
  create(): string {
    return this.eventsService.createEvent();
  }
}