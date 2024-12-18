import { Body, Controller, Post } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Controller('book-stay')
export class BookStayController {
  private bookingFilePath = path.join('/merisir/src/app/data', 'bookings.json');
  private bookingDirectoryPath = path.dirname(this.bookingFilePath);

    @Post()
    bookStay(@Body() body: { dateFrom: Date; dateTo: Date; namesOfPeople: string[]}) {
      if (!fs.existsSync(this.bookingDirectoryPath)) {
        fs.mkdirSync(this.bookingDirectoryPath, { recursive: true });
      }
      let bookingData = { currentId: 1, list: [] };

      if (fs.existsSync(this.bookingFilePath)) {
        bookingData = JSON.parse(fs.readFileSync(this.bookingFilePath, 'utf-8'));
      }
      const newBooking = {
        id: bookingData.currentId,
        ...body,
      };
      bookingData.list.push(newBooking);
      bookingData.currentId++;
      fs.writeFileSync(this.bookingFilePath, JSON.stringify(bookingData, null, 2));
      return { status: 'Successful', booking: newBooking };
    }
}
