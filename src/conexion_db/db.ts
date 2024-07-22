import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '10.67.119.186',
  port: 3306,
  username: 'root',
  password: 'Cb7A506a',
  database: 'higia',
  entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
  synchronize: false,
};
