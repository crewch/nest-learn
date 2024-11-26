import { OmitType } from '@nestjs/swagger';
import { ProfileEntity } from '../entities/profile.entity';

export class CreateProfileDto extends OmitType(ProfileEntity, ['id']) {}
