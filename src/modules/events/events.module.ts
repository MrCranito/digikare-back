import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { EventsController } from './controllers/events.controllers';
import { EventsService } from './services/events.service';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, User])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}