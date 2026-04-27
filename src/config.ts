import dotenv from 'dotenv';
import { envSchema } from './config.schema';

export { envSchema };

dotenv.config();

export const envConfig = envSchema.parse(process.env);

export const appConfig = {
   allowedOrigins: [
      'http://localhost:5173',
      'http://localhost:3000',
      envConfig.FRONTEND_URL,
   ].filter(Boolean),
};
