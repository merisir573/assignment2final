import { Controller, Post, Get, Query, Body } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('api')
export class GatewayController {
  constructor(private readonly httpService: HttpService) {}

  @Post('insert-listing')
  async insertListing(@Body() body: { noOfPeople: number; country: string; city: string; price: number }) {
    try {
      const response = await firstValueFrom(
        this.httpService.post('http://insert-listing:3001/insert-listing', body)
      );
      return response.data;  // Return the response from Service A (Successful or Error)
    } catch (error) {
      console.error('Error forwarding the request to Service A:', error);
      return { status: 'Error', message: 'Failed to insert the listing' };
    }
  }

  @Post('book-stay')
  async bookStay(@Body() body: { dateFrom: Date; dateTo: Date; namesOfPeople: string[]}) {
    try {
      const response = await firstValueFrom(
        this.httpService.post('http://book-stay:3003/book-stay', body)
      );
      return response.data;  // Return the response from Service A (Successful or Error)
    } catch (error) {
      console.error('Error forwarding the request to Service B:', error);
      return { status: 'Error', message: 'Failed to insert the listing' };
    }
  }

  @Get('query-listings')
  async queryListings(@Query() queryParams: { noOfPeople: number, country: string, city: string }) {
    try {
      // Forward the GET request with query parameters to the query-listings service
      const response = await firstValueFrom(
        this.httpService.get('http://query-listings:3002/query-listings', { params: queryParams })
      );
      return response.data;  // Return the response from Service C (Query Listings)
    } catch (error) {
      console.error('Error forwarding the request to Service C:', error);
      return { status: 'Error', message: 'Failed to query listings' };
    }
  }
}
