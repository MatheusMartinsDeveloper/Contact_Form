import { IsString, IsNotEmpty, IsEmail, IsIn } from "class-validator";

export class CreateContactDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(["General Enquiry", "Suport Request"])
    queryType: string;

    @IsString()
    @IsNotEmpty()
    message: string;
}