"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const event_entity_1 = require("../entities/event.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let EventsService = exports.EventsService = class EventsService {
    createEvent(body) {
        const event = new event_entity_1.Event();
        event.consents = body.consents;
        event.user = body.user;
        event.updatedAt = new Date().toISOString();
        event.createdAt = new Date().toISOString();
        this.repositoryUser.findOneBy({ id: Number.parseInt(body.user.id, 10) }).then((user) => {
            this.repositoryUser.update(user.id, { consents: body.consents });
        }).catch((_) => {
            throw new common_1.HttpException({
                status: '422',
                error: "L'utilisateur n'existe pas",
            }, common_1.HttpStatus.NOT_FOUND);
        });
        return this.repositoryEvent.save(event);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(event_entity_1.Event),
    __metadata("design:type", typeorm_2.Repository)
], EventsService.prototype, "repositoryEvent", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(user_entity_1.User),
    __metadata("design:type", typeorm_2.Repository)
], EventsService.prototype, "repositoryUser", void 0);
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)()
], EventsService);
//# sourceMappingURL=events.service.js.map