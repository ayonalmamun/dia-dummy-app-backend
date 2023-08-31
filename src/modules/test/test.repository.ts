import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { TestEntity } from './entities/test.entity';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Injectable()
export class TestRepository extends Repository<TestEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(TestEntity, dataSource.createEntityManager());
  }

  async createEntity(
    createTestDto: CreateTestDto,
  ): Promise<TestEntity | Error> {
    try {
      const entity = this.create(createTestDto);
      await this.save(entity);
      return entity;
    } catch (e) {
      return e;
    }
  }

  async readManyEntities(): Promise<TestEntity[] | Error> {
    try {
      return this.find();
    } catch (e) {
      return e;
    }
  }

  async findById(id: number): Promise<TestEntity | Error> {
    try {
      return await this.findOne({
        where: { id: id },
      });
    } catch (e) {
      return null;
    }
  }

  async updateEntity(id: number, updateTestDto: UpdateTestDto): Promise<any> {
    try {
      const updateResult = await this.update(id, updateTestDto);
      if (updateResult.affected > 0) {
        return await this.findOne({
          where: { id: id },
        });
      }
      return null;
    } catch (e) {
      return e;
    }
  }

  async deleteEntity(id: number): Promise<boolean | Error> {
    try {
      const deleteResponse = await this.delete(id);
      if (deleteResponse.affected > 0) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
}
