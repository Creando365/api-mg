import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mongo: {
    user: process.env.ROOT_USERNAME,
    password: process.env.ROOT_PASSWORD,
    dbName: process.env.MONGO_DB,
    port: parseInt(process.env.MONGO_PORT, 10) || 27017,
    host: process.env.MONGO_HOST,
    connection: process.env.MONGO_CONNECTION,
  },
}));
