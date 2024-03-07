/* eslint-disable no-unused-vars */
import { DataSource, EntitySchema, Repository as ORMRepository } from 'typeorm';

export class Repository<TEntity> {
  private repository: ORMRepository<EntitySchema<TEntity>>;

  getAllItems: () => Promise<EntitySchema<TEntity>[]>;

  getItemById: (id: string) => Promise<EntitySchema<TEntity> | null>;

  getItemByWhere: (where: object) => Promise<EntitySchema<TEntity> | null>;

  createItem: (item: EntitySchema<TEntity>) => Promise<EntitySchema<TEntity>>;

  updateItemById: (
    id: string,
    item: EntitySchema<TEntity>,
  ) => Promise<EntitySchema<TEntity> | undefined>;

  deleteItemById: (id: string) => Promise<void>;

  constructor(entity: EntitySchema, dataSource: DataSource) {
    this.repository = dataSource.getRepository(entity);

    this.getAllItems = async () => await this.repository.find();

    this.getItemById = async (id) => await this.repository.findOne({ where: { id } } as object);

    this.getItemByWhere = async (where) => await this.repository.findOne({ where });

    this.createItem = async (item) => await this.repository.save(item);

    this.updateItemById = async (id, item) => {
      const existingItem = await this.repository.findOne({ where: { id } } as object);
      if (!existingItem) return undefined;
      Object.assign(existingItem, item);
      return await this.repository.save(existingItem);
    };

    this.deleteItemById = async (id) => {
      await this.repository.delete(id);
    };
  }
}
