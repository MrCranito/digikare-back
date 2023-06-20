import { IsArray, IsBoolean, IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  public id: string;

  @IsObject()
  @IsNotEmpty()
   public user: { id: string }

  @IsArray()
  @IsNotEmpty()
  public consents: [{id: string, enabled: boolean}];

}