import { Test, TestingModule } from '@nestjs/testing';
import { QueryListingsService } from './query-listings.service';

describe('QueryListingsService', () => {
  let service: QueryListingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueryListingsService],
    }).compile();

    service = module.get<QueryListingsService>(QueryListingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
