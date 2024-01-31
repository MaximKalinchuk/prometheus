import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrometheusModule, makeCounterProvider } from '@willsoto/nestjs-prometheus';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logging.interceptor';

@Module({
  imports: [PrometheusModule.register()],
  controllers: [AppController],
  providers: [AppService,
  {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor
  },
  makeCounterProvider({
    name: "metric_name",
    help: "metric_help",
  }),],
})
export class AppModule {}
