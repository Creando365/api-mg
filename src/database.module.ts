import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongoClient } from 'mongodb';

import configuration from './config/configuration';

@Global()
@Module({
  providers: [
    {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof configuration>) => {
        const { user, password, dbName, port, host, connection } =
          configService.mongo;
        const uri = `${connection}://${user}:${password}@${host}:${port}/?authMechanism=DEFAULT&authSource=admin`;
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db(dbName);
        return database;
      },
      inject: [configuration.KEY],
    },
  ],
  exports: ['MONGO'],
})
export class DatabaseModule {}
