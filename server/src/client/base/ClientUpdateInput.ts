/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { EventUpdateManyWithoutClientsInput } from "./EventUpdateManyWithoutClientsInput";
import { Type } from "class-transformer";
@InputType()
class ClientUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  abbreviation?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  domain?: string;

  @ApiProperty({
    required: false,
    type: () => EventUpdateManyWithoutClientsInput,
  })
  @ValidateNested()
  @Type(() => EventUpdateManyWithoutClientsInput)
  @IsOptional()
  @Field(() => EventUpdateManyWithoutClientsInput, {
    nullable: true,
  })
  events?: EventUpdateManyWithoutClientsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;
}
export { ClientUpdateInput };
