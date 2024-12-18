import { Test, TestingModule } from '@nestjs/testing';
import { BookStayService } from './book-stay.service';

describe('BookStayService', () => {
  let service: BookStayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookStayService],
    }).compile();

    service = module.get<BookStayService>(BookStayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
