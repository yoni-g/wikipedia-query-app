import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WikipediaService {

  private baseUrl = 'https://{0}.wikipedia.org/w/api.php';

    /*
    https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&explaintext=true&titles=Stack%20Overflow&exsectionformat=plain&exintro
    */

  async getIntroduction(articleName: string, language: string = 'en'): Promise<{ scrapeDate: number; articleName: string; introduction: string }> {
    
    const url = this.baseUrl.replace("{0}", language)
    
    try {
      const response = await axios.get(url, {
        params: {
          action: 'query',
          format: 'json',
          prop: 'extracts',
          exintro: true,
          explaintext: true,
          titles: articleName,
          exsectionformat: 'plain'
        },
        headers: {
          'Accept-Language': language,
        },
      });
    //   console.log("response", response);
      
      const pages = response.data.query.pages;
      const pageId = Object.keys(pages)[0];
      
      if (pageId === '-1') {
        throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
      }

      const page = pages[pageId];
      const introduction = page.extract;

      if (introduction == "") {
        throw new HttpException('Empty article', HttpStatus.NOT_FOUND);
      }

      return {
        scrapeDate: Date.now(),
        articleName,
        introduction,
      };
    } catch (error) {
        console.log(error);
        
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to fetch article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}