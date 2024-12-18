import { Module } from '@nestjs/common';
import { InsertListingService } from './insert-listing.service';
import { InsertListingController } from './insert-listing.controller';

@Module({
  providers: [InsertListingService],
  controllers: [InsertListingController]
})
export class InsertListingModule {}
