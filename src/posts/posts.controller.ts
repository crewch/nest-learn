import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { PostEntity } from './entities/post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiCreatedResponse({ type: PostEntity })
  create(@Body() dto: CreatePostDto) {
    return this.postsService.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: PostEntity, isArray: true })
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PostEntity })
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PostEntity })
  update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    return this.postsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PostEntity })
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
