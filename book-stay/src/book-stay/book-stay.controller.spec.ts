import { Test, TestingModule } from '@nestjs/testing';
import { BookStayController } from './book-stay.controller';

describe('BookStayController', () => {
  let controller: BookStayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookStayController],
    }).compile();

    controller = module.get<BookStayController>(BookStayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
