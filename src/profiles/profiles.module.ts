import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  controllers: [ProfilesController],
  providers: [ProfilesService],
  imports: [PrismaModule],
})
export class ProfilesModule {}
