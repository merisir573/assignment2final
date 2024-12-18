import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { GatewayController } from './gateway.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, GatewayController],
  providers: [AppService],
})
export class AppModule {}
