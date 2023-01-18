import { Test, TestingModule } from '@nestjs/testing';
import { MultimediaController } from './multimedia.controller';

describe('MultimediaController', () => {
  let controller: MultimediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MultimediaController],
    }).compile();

    controller = module.get<MultimediaController>(MultimediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
