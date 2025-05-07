import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ArticleController } from './controllers/article.controller';
import { UserController } from './controllers/user.controller';
import { WikipediaService } from './services/wikipedia.service';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [ArticleController, UserController],
  providers: [WikipediaService, UserService],
})
export class AppModule {}