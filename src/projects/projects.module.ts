import { Module } from '@nestjs/common';
import { ProjectsController } from './controllers/projects.controller';
import { ProjectsService } from './services/projects.service';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';
import { MultimediaController } from './controllers/multimedia.controller';
import { MultimediaService } from './services/multimedia.service';

@Module({
  controllers: [ProjectsController, CategoriesController, MultimediaController],
  providers: [ProjectsService, CategoriesService, MultimediaService],
})
export class ProjectsModule {}
