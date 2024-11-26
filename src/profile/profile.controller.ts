import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ProfileEntity } from './entities/profile.entity';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @ApiCreatedResponse({ type: ProfileEntity })
  create(@Body() dto: CreateProfileDto) {
    return this.profileService.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: ProfileEntity, isArray: true })
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ProfileEntity })
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ProfileEntity })
  update(@Param('id') id: string, @Body() dto: UpdateProfileDto) {
    return this.profileService.update(id, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ProfileEntity })
  remove(@Param('id') id: string) {
    return this.profileService.remove(id);
  }
}
