import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATA_BSE_HOST,
    port: parseInt(process.env.DATA_BASE_PORT, 10) || 5432,
    name: process.env.DATA_BASE_NAME,
  },
  apiKey: process.env.API_KEY,
}));
