import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { TestRepository } from './test.repository';

@Injectable()
export class TestService {
    constructor(
        @InjectRepository(TestRepository)
        private readonly testRepository: TestRepository,
    ) { }
    async create(createTestDto: CreateTestDto): Promise<any | Error> {
        createTestDto.createdAt = new Date();
        createTestDto.updatedAt = new Date();

        const data = await this.testRepository.createEntity(createTestDto);
        return {
            data: data,
            statusCode: HttpStatus.CREATED,
            success: true,
            message: `Successfully created Data.`,
        }
    }

    async findAll(): Promise<any | Error> {
        const data = await this.testRepository.readManyEntities();
        return {
            data: data,
            statusCode: HttpStatus.OK,
            success: true,
            message: `Successfully fetched all Data.`,
        }
    }

    async findOne(id: number): Promise<any | Error> {
        const data = await this.testRepository.findById(id);
        if (!data) {
            throw new NotFoundException(`Could not found data with id: ${id}`);
        }
        return {
            data: data,
            statusCode: HttpStatus.OK,
            success: true,
            message: `Successfully fetched Data.`,
        }
    }

    async update(id: number, updateTestDto: UpdateTestDto) {
        const foundData = await this.testRepository.findById(id);
        if (!foundData) {
            throw new NotFoundException(`Could not found data with id: ${id}`);
        }

        updateTestDto.updatedAt = new Date();

        const data = await this.testRepository.updateEntity(id, updateTestDto);

        return {
            data: data,
            statusCode: HttpStatus.OK,
            success: true,
            message: `Successfully updated Data.`,
        }
    }

    async remove(id: number) {
        const foundData = await this.testRepository.findById(id);
        if (!foundData) {
            throw new NotFoundException(`Could not found data with id: ${id}`);
        }

        const data = await this.testRepository.deleteEntity(id);
        if (!data) {
            throw new NotFoundException(`Could not found data with id: ${id}`);
        }

        return {
            data: data,
            statusCode: HttpStatus.OK,
            success: true,
            message: `Successfully removed Data.`,
        }
    }
}
