import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsertListingModule } from './insert-listing/insert-listing.module';
import { InsertListingController } from './insert-listing/insert-listing.controller';
import { InsertListingService } from './insert-listing/insert-listing.service';

@Module({
  imports: [InsertListingModule],
  controllers: [AppController, InsertListingController],
  providers: [AppService, InsertListingService],
})
export class AppModule {}
