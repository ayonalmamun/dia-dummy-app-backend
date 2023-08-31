import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TestRepository } from './test.repository';

@Module({
  imports: [],
  controllers: [TestController],
  providers: [TestService, TestRepository],
})
export class TestModule {}
