import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
}

export class CreateUser {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly lastname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @IsDate()
  @ApiProperty()
  readonly birth: Date;

  @IsString()
  @ApiProperty()
  readonly address: string;

  @IsString()
  @ApiProperty()
  readonly urlProfilePhoto: string;

  @IsDate()
  @ApiProperty()
  readonly lastSession: Date;

  @IsNumber()
  @ApiProperty()
  readonly score: number;

  @IsString()
  @ApiProperty()
  readonly status: Status;
}
