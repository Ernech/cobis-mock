import { Module } from '@nestjs/common';
import { CreditsModule } from './credits/credits.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [CreditsModule, StatusModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
