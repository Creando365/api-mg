import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { ContractsModule } from './contracts/contracts.module';
import configuration from './config/configuration';
import { environment } from './env/enviroments';
import { ProjectsModule } from './projects/projects.module';
import { DatabaseModule } from './database.module';
import configurationSchema from './config/configuration.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environment[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [configuration],
      validationSchema: configurationSchema,
    }),
    UsersModule,
    ContractsModule,
    ProjectsModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
