import { Module } from '@nestjs/common';
import { CreditsModule } from './credits/credits.module';

@Module({
  imports: [CreditsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
