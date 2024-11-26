import { ApiProperty } from '@nestjs/swagger';
import { Profile } from '@prisma/client';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class ProfileEntity implements Profile {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  id: string;

  @IsString()
  @MaxLength(100)
  @ApiProperty()
  bio: string;

  @IsString()
  @ApiProperty({ uniqueItems: true })
  userId: string;
}
