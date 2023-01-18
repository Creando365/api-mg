import { Test, TestingModule } from '@nestjs/testing';
import { MultimediaService } from './multimedia.service';

describe('MultimediaService', () => {
  let service: MultimediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MultimediaService],
    }).compile();

    service = module.get<MultimediaService>(MultimediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
