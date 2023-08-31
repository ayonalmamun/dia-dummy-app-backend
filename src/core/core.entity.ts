import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export abstract class CoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: null, nullable: true })
  createdAt: Date

  @Column({ type: 'timestamp', default: null, nullable: true  })
  updatedAt: Date

  @Column({ nullable: true })
  deletedAt: Date

  // @CreateDateColumn({
  //   name: 'createdAt',
  //   type: 'timestamp',
  //   default: 'CURRENT_TIMESTAMP',
  // })
  // createdAt: Date;

  // @UpdateDateColumn({
  //   name: 'updatedAt',
  //   type: 'timestamp',
  //   default: () => 'CURRENT_TIMESTAMP',
  // })
  // updatedAt: Date;

  // @DeleteDateColumn({ nullable: true })
  // deletedAt: Date;
}
