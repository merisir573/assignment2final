import { Module } from '@nestjs/common';
import { QueryListingsService } from './query-listings.service';
import { QueryListingsController } from './query-listings.controller';

@Module({
  providers: [QueryListingsService],
  controllers: [QueryListingsController]
})
export class QueryListingsModule {}
