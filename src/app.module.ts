import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonsModule } from 'libs/common/src';

@Module({
  imports: [CommonsModule],
  exports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
