import { IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateTestDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  testName: string;

  @IsNotEmpty()
  result: string;

  @IsEmpty()
  createdAt: Date;
  
  @IsEmpty()
  updatedAt: Date;
}
