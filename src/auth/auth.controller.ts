import { Controller, Request, Post, UseGuards, Get  } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login (@Request()req){
      
      return this.authService.login(req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
    console.log("aqui controlador de ruta profile");
    console.log(req.user);
    return req.user;
  }
}