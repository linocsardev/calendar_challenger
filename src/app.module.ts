import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'roundhouse.proxy.rlwy.net',
      port: 56889,
      username: 'root',
      password: 'kniJYXHNCWbzyMmdfUrCcKHMONgNJTFC',
      database: 'railway',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
