import { Controller, Body, Param, Post, Get, Put, Delete } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";

@Controller("contact")
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Post("createContact")
    async create(@Body() createContactDto: CreateContactDto) {
        return this.contactService.createContact(createContactDto);
    }

    @Get("getContacts")
    async get() {
        return this.contactService.getContacts();
    }

    @Get("getContact/:id")
    async getOne(@Param('id') id: string) {
        return this.contactService.getContact(id);
    }

    @Put("updateContact/:id")
    async update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
        return this.contactService.updateContact(id, updateContactDto);
    }

    @Delete(":id")
    async delete(@Param('id') id: string) {
        return this.contactService.deleteContact(id);
    }
}