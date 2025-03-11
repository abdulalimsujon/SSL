import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  salt_round: process.env.SALT_ROUND,
  ssl:{
    store_id:process.env.STORE_ID,
    store_pass:process.env.STORE_PASS,
    success_url:process.env.SUCCESS_URL,
    cancel_url: process.env.CANCEL_URL,
    ssl_payment_api: process.env.SSL_PAYMENT_API,
    ssl_validation_api:process.env.SSL_VALIDATION_API 
  }
};
