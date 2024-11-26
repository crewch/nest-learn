import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(dto: CreatePostDto) {
    return this.prismaService.post.create({
      data: dto,
    });
  }

  findAll() {
    return this.prismaService.post.findMany();
  }

  findOne(id: string) {
    return this.prismaService.post.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdatePostDto) {
    return this.prismaService.post.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prismaService.post.delete({ where: { id } });
  }
}
