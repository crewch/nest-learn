import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, type: UserEntity })
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: [UserEntity] })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: UserEntity })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: HttpStatus.OK, type: UserEntity })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, type: UserEntity })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
