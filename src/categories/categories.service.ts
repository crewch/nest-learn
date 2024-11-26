import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(dto: CreateCategoryDto) {
    return this.prismaService.category.create({ data: dto });
  }

  findAll() {
    return this.prismaService.category.findMany();
  }

  findOne(id: string) {
    return this.prismaService.category.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateCategoryDto) {
    return this.prismaService.category.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prismaService.category.delete({ where: { id } });
  }
}
