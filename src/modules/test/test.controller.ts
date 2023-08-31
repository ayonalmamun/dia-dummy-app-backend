import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateTestDto } from './dto/update-test.dto';
import { CreateTestDto } from './dto/create-test.dto';
import { TestService } from './test.service';
// import { AppService } from './app.service';

@Controller({
    path: 'test',
    version: '1'
})

export class TestController {
    constructor(private readonly testService: TestService) {}
    @Post()
    create(@Body() createTestDto: CreateTestDto) {
        return this.testService.create(createTestDto);
    }

    @Get()
    findAll() {
        return this.testService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.testService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
        return this.testService.update(+id, updateTestDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.testService.remove(+id);
    }
}
