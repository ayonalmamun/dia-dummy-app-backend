import { CoreEntity } from 'src/core/core.entity';
import { Column, Entity } from 'typeorm';

@Entity('test')
export class TestEntity extends CoreEntity {
  @Column()
  name: string;

  @Column()
  testName: string;

  @Column()
  result: string;
}
