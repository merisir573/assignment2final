import { Test, TestingModule } from '@nestjs/testing';
import { QueryListingsController } from './query-listings.controller';

describe('QueryListingsController', () => {
  let controller: QueryListingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueryListingsController],
    }).compile();

    controller = module.get<QueryListingsController>(QueryListingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
