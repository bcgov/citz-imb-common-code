import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@bcgov/citz-imb-endpoint-builder';

@Entity()
export class Task extends BaseEntity {
  @Column({ type: 'text', nullable: false })
  title!: string;
}
