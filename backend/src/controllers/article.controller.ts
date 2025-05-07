import { Controller, Get, Param, Headers, UseGuards } from '@nestjs/common';
import { WikipediaService } from '../services/wikipedia.service';
import { UserService } from '../services/user.service';

@Controller('api/introduction')
export class ArticleController {
  constructor(
    private readonly wikipediaService: WikipediaService,
    private readonly userService: UserService,
  ) {}

  @Get(':articleName')
  async getIntroduction(
    @Param('articleName') articleName: string,
    @Headers('accept-language') acceptLanguage?: string,
    @Headers('x-authentication') token?: string,
  ) {

    let language = 'en';

    if (token) {
      const userLanguage = this.userService.getUserLanguage(token);
      if (userLanguage) {
        language = userLanguage;
      }
    } else if (acceptLanguage) {
      language = acceptLanguage.split(',')[0];
    }

    return this.wikipediaService.getIntroduction(articleName, language);
  }
}