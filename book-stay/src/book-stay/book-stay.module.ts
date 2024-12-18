import { Module } from '@nestjs/common';
import { BookStayController } from './book-stay.controller';
import { BookStayService } from './book-stay.service';

@Module({
  controllers: [BookStayController],
  providers: [BookStayService]
})
export class BookStayModule {}
