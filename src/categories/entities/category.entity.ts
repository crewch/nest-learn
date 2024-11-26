import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CategoryEntity implements Category {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  id: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(15)
  @ApiProperty()
  name: string;
}
