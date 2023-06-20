import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public id: string;

  @IsString()
  @IsNotEmpty()
  public email: string;

}