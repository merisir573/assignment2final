import { Test, TestingModule } from '@nestjs/testing';
import { InsertListingController } from './insert-listing.controller';

describe('InsertListingController', () => {
  let controller: InsertListingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsertListingController],
    }).compile();

    controller = module.get<InsertListingController>(InsertListingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
