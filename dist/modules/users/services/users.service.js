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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
let UsersService = exports.UsersService = class UsersService {
    constructor() { }
    async getUser(email) {
        await this.repository.findOne({ where: { email } }).then((user) => {
            if (!user) {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_FOUND,
                    error: "L'utilisateur n'existe pas",
                }, common_1.HttpStatus.NOT_FOUND);
            }
        });
        return this.repository.findOne({ where: { email } });
    }
    removeUser(id) {
        return this.repository.delete(id);
    }
    async createUser(body) {
        const user = new user_entity_1.User();
        user.email = body.email;
        await this.repository.findOne({ where: { email: body.email } }).then((user) => {
            if (user) {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                    error: "L'utilisateur existe déjà",
                }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
        });
        return this.repository.save(user);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(user_entity_1.User),
    __metadata("design:type", typeorm_2.Repository)
], UsersService.prototype, "repository", void 0);
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UsersService);
//# sourceMappingURL=users.service.js.map