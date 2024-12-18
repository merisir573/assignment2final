import { Body, Controller, Post } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Controller('insert-listing')
export class InsertListingController {
  private listFilePath = path.join('/merisir/src/app/data', 'list.json');
  private listDirectoryPath = path.dirname(this.listFilePath);

  @Post()
  insertListing(@Body() body: { noOfPeople: number; country: string; city: string; price: number }) {
    if (!fs.existsSync(this.listDirectoryPath)) {
      fs.mkdirSync(this.listDirectoryPath, { recursive: true });
    }
    let listData = { currentId: 1, list: [] };

    if (fs.existsSync(this.listFilePath)) {
      listData = JSON.parse(fs.readFileSync(this.listFilePath, 'utf-8'));
    }
    const newListing = {
      id: listData.currentId,
      ...body,
    };
    listData.list.push(newListing);
    listData.currentId++;

    fs.writeFileSync(this.listFilePath, JSON.stringify(listData, null, 2));

    return { status: 'Successful', listing: newListing };
  }
}
