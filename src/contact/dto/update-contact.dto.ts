import { IsString, IsIn, IsOptional, IsEmail } from "class-validator";

export class UpdateContactDto {
    @IsString()
    @IsOptional()
    firstName?: string;

    @IsString()
    @IsOptional()
    lastName?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsIn(["General Enquiry", "Suport Request"])
    @IsOptional()
    queryType?: string;

    @IsString()
    @IsOptional()
    message?: string;
}