import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventsService } from '../services/events.service';
import { Event } from '../entities/event.entity';
import { CreateEventDto } from '../dto/event.dto';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Post()
  create(@Body() body: CreateEventDto): Promise<Event> {
    return this.eventsService.createEvent(body);
  }
}