import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Serve static files from the public directory
  app.use(express.static(join(__dirname, '..', 'public')));
  
  // Handle React routing
  app.use('*', (req, res, next) => {
    
    if (!req.baseUrl.startsWith('/api')) {
      res.sendFile(join(__dirname, '..', 'public', 'index.html'));
    } else {
      next();
    }
  });
  
  app.listen(3001)
}
bootstrap();
