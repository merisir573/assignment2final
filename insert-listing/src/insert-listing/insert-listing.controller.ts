import { Body, Controller, Post } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Controller('insert-listing')
export class InsertListingController {
  private listFilePath = path.join('/merisir/src/app/data', 'list.json'); // Ensure full path is used inside Docker container
  private listDirectoryPath = path.dirname(this.listFilePath);

  @Post()
  insertListing(@Body() body: { noOfPeople: number; country: string; city: string; price: number }) {
    // Ensure the directory exists
    if (!fs.existsSync(this.listDirectoryPath)) {
      fs.mkdirSync(this.listDirectoryPath, { recursive: true }); // Create directory if it doesn't exist
    }

    // Initialize listData to hold both currentId and the list
    let listData = { currentId: 1, list: [] };

    // Check if the file exists and read the existing data if it does
    if (fs.existsSync(this.listFilePath)) {
      listData = JSON.parse(fs.readFileSync(this.listFilePath, 'utf-8'));
    }

    // Create new listing with the currentId and increment the currentId for the next insertion
    const newListing = {
      id: listData.currentId,
      ...body,
    };
    listData.list.push(newListing);
    listData.currentId++; // Increment currentId for the next insertion

    // Write the updated listData (list + currentId) back to the file
    fs.writeFileSync(this.listFilePath, JSON.stringify(listData, null, 2));

    // Return the newly created listing
    return { status: 'Successful', listing: newListing };
  }
}
