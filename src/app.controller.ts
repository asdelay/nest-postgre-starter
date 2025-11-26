import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  async getHello() {
    return await this.appService.getHello();
  }

  @Post('users')
  async createUser(@Body() userDto: { email: string; name?: string }) {
    return await this.appService.createUser(userDto);
  }
}
