import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AdminModule,
    DatabaseModule,
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        entities: [],
        synchronize: true,
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}