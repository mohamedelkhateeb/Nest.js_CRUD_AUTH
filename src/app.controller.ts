import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Post('/sayHello')
  // sayHello(@Query() query): string {
  //   return this.appService.sayHello() + query?.name;
  // }

  // @Post('/sayHello/:name')
  // sayHello(@Param() param): string {
  //   console.log(param);
  //   return this.appService.sayHello() + param?.name;
  // }

  // @Post('/sayHello')
  // sayHello(@Body("name") name:string): string {
  //   return this.appService.sayHello(name);
  // }
  @Post('/sayHello')
  sayHello(@Req() req, @Res() res): string {
    res.send(this.appService.sayHello(req.body.name));
    return;
  }
}
