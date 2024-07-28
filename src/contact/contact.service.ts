import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Contact, Prisma } from "@prisma/client";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";

@Injectable()
export class ContactService {
    constructor(private prisma: PrismaService) {}

    async createContact(createContactDto: CreateContactDto): Promise<Contact> {
        const { firstName, lastName, email, queryType, message } = createContactDto;

        const createContactData: Prisma.ContactCreateInput = {
            firstName,
            lastName,
            email,
            queryType,
            message
        }

        return this.prisma.contact.create({
            data: createContactData
        });
    }

    async getContacts() {
        return this.prisma.contact.findMany();
    }

    async getContact(id: string) {
        return this.prisma.contact.findUnique({
            where: {
                id: Number(id)
            }
        });
    }

    async updateContact(id: string, updateContactDto: UpdateContactDto): Promise<Contact> {
        const { firstName, lastName, email, queryType, message } = updateContactDto;

        const updateContactDate: Prisma.ContactUpdateInput = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            queryType: queryType,
            message: message
        }

        return this.prisma.contact.update({
            where: {
                id: Number(id)
            },
            data: updateContactDate
        });
    }

    async deleteContact(id: string): Promise<Contact> {
        return this.prisma.contact.delete({
            where: {
                id: Number(id)
            }
        });
    }
}