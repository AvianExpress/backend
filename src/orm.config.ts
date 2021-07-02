import {TypeOrmModuleOptions} from '@nestjs/typeorm'
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'Stoppanic123',
  port: 5433,
  host: 'localhost',
  database: 'postgres',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};