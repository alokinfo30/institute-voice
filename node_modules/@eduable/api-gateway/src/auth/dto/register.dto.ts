import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, IsEnum, IsOptional } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ example: 'student@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ enum: ['student', 'teacher', 'admin'], example: 'student' })
  @IsEnum(['student', 'teacher', 'admin'])
  role: string;

  @ApiProperty({ example: 'institute-123' })
  @IsString()
  instituteId: string;

  @ApiProperty({ required: false, example: 'avatar-url' })
  @IsOptional()
  @IsString()
  avatar?: string;
}