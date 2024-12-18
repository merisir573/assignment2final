import { Test, TestingModule } from '@nestjs/testing';
import { InsertListingService } from './insert-listing.service';

describe('InsertListingService', () => {
  let service: InsertListingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsertListingService],
    }).compile();

    service = module.get<InsertListingService>(InsertListingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
