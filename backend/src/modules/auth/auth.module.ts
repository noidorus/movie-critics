import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserService } from 'src/services/user/user.service';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtRefreshStrategy, JwtStrategy, LocalStrategy } from './strategies';
import { TypedConfigService } from 'src/services/config/typed-config.service';

@Module({
  imports: [PassportModule.register({ session: true }), JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    PrismaService,
    JwtStrategy,
    JwtRefreshStrategy,
    LocalStrategy,
    TypedConfigService,
  ],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
