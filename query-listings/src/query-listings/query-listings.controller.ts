import { Controller, Get, Query } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Controller('query-listings')
export class QueryListingsController {

    private listFilePath = path.join('/merisir/src/app/data', 'list.json');

    @Get()
    async getListings(
      @Query('noOfPeople') noOfPeople: number,
      @Query('country') country: string,
      @Query('city') city: string,
    ) {
      let listData = { currentId: 1, list: [] };
    
      if (fs.existsSync(this.listFilePath)) {
        try {
          listData = JSON.parse(fs.readFileSync(this.listFilePath, 'utf-8'));
          console.log('Data from list.json:', listData); 
        } catch (error) {
          console.error("Error reading JSON file:", error);
          return { message: 'Error reading listings data.' };
        }
      }


      const filteredListings = listData.list.filter((listing) => {
        const isMatchingLocationAndPeople =
          (listing.country === country || !country) &&
          (listing.city === city || !city) &&
          (listing.noOfPeople <= noOfPeople || !noOfPeople);
      
        return isMatchingLocationAndPeople;
      });
  
    
      console.log('Filtered Listings:', filteredListings); 
    
      return { listings: filteredListings };
    }
    
}
