import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  create(dto: CreateProfileDto) {
    return this.prismaService.profile.create({
      data: dto,
    });
  }

  findAll() {
    return this.prismaService.profile.findMany();
  }

  findOne(id: string) {
    return this.prismaService.profile.findUnique({
      where: { id },
    });
  }

  update(id: string, dto: UpdateProfileDto) {
    return this.prismaService.profile.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prismaService.profile.delete({ where: { id } });
  }
}
