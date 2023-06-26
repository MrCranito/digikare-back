"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeORMPgTestingModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const TypeORMPgTestingModule = (entities) => {
    console.log(process.env);
    return typeorm_1.TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DATABASE_HOST || 'localhost',
        port: 3306,
        username: process.env.DATABASE_USERNAME || 'nest',
        password: process.env.DATABASE_PASSWORD || 'nest',
        database: process.env.DATABASE_DATABASE || 'test',
        entities: [...entities],
        synchronize: true,
    });
};
exports.TypeORMPgTestingModule = TypeORMPgTestingModule;
//# sourceMappingURL=typeorm.testing.module.js.map