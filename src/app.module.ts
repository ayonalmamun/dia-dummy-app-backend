import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './modules/test/test.module';
import { TestEntity } from './modules/test/entities/test.entity';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   // password: '',
    //   database: 'dia_dummy_db',
    //   entities: [
    //     TestEntity
    //   ],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql12.freemysqlhosting.net',
      port: 3306,
      username: 'sql12643647',
      password: 'fBKiEJjc9C',
      database: 'sql12643647',
      entities: [
        TestEntity
      ],
      synchronize: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'sql.freedb.tech',
    //   port: 3306,
    //   username: 'freedb_ayonalmamun',
    //   password: 'Ey5wvmPbr&$@H#n',
    //   database: 'freedb_dia_dummy_app',
    //   entities: [
    //     TestEntity
    //   ],
    //   synchronize: true,
    // }),


    TestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
