import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookStayModule } from './book-stay/book-stay.module';
import { BookStayController } from './book-stay/book-stay.controller';
import { BookStayService } from './book-stay/book-stay.service';

@Module({
  imports: [BookStayModule],
  controllers: [AppController, BookStayController],
  providers: [AppService, BookStayService],
})
export class AppModule {}
