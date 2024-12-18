import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueryListingsModule } from './query-listings/query-listings.module';
import { QueryListingsController } from './query-listings/query-listings.controller';
import { QueryListingsService } from './query-listings/query-listings.service';

@Module({
  imports: [QueryListingsModule],
  controllers: [AppController, QueryListingsController],
  providers: [AppService, QueryListingsService],
})
export class AppModule {}
