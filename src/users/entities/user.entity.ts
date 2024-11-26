import { ApiProperty } from '@nestjs/swagger';
import { $Enums, User } from '@prisma/client';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
  MaxLength,
} from 'class-validator';

export class UserEntity implements User {
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

  @IsEmail()
  @ApiProperty({ uniqueItems: true })
  email: string;

  @IsString()
  @ApiProperty()
  @IsStrongPassword()
  @MaxLength(100)
  password: string;

  @IsEnum($Enums.Role)
  @IsOptional()
  @ApiProperty({ required: false, default: $Enums.Role.USER })
  role: $Enums.Role = 'USER';

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ default: false, required: false })
  banned: boolean = false;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  @ApiProperty({ required: false, nullable: true })
  banReason: string | null;
}
