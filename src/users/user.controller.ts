/* eslint-disable prettier/prettier */
import { Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { Body, Param, UsePipes } from "@nestjs/common/decorators";
import { plainToClass } from "class-transformer";
import { UserDto } from "./user.dto";
@Controller("users")
export class UserController {
  @UsePipes(new ValidationPipe())
  @Post()
  createUser (@Body() user: UserDto): UserDto {
    const realUser = plainToClass(UserDto, user,{ excludeExtraneousValues: true });
    console.log("realUser: ", realUser);
    return {
      username: "test",
      password: "newnumber",
    };
  }
  @Get(":id")
  getUserById (@Param("id") id: number) {
    return id;
  }
}
