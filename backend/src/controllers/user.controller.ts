import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UserService } from '../services/user.service';

interface CreateUserDto {
  userName: string;
  language: string;
}

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    const { userName, language } = createUserDto;

    if (!userName || !language) {
      throw new BadRequestException('userName and language are required');
    }

    if (!language.match(/^[a-z]{2}$/)) {
      throw new BadRequestException('Invalid language format.');
    }

    return this.userService.createUser(userName, language);
  }
} 