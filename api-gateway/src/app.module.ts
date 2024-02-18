import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NotesController } from './notes/notes.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, NotesController],
  providers: [AppService],
})
export class AppModule { }
