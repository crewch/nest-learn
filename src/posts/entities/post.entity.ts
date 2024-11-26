import { ApiProperty } from '@nestjs/swagger';
import { Post } from '@prisma/client';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class PostEntity implements Post {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  id: string;

  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false })
  createdAt: Date;

  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false })
  updatedAt: Date;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  @ApiProperty()
  title: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ default: false, required: false })
  published: boolean = false;

  @IsString()
  @ApiProperty({ uniqueItems: true })
  authorId: string;
}
