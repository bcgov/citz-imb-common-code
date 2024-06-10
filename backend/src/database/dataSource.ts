import { DataSourceOptions, DataSource } from 'typeorm';

const {
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_DB,
  VERBOSE_DEBUG,
  NODE_ENV,
} = process.env;

const fileExtensions = NODE_ENV === 'production' ? 'js' : 'ts';

export const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: POSTGRES_HOST ?? 'db',
  port: POSTGRES_PORT ? Number(POSTGRES_PORT) : 5432,
  username: POSTGRES_USER ?? 'db-admin',
  password: POSTGRES_PASSWORD ?? 'password',
  database: POSTGRES_DB ?? 'coco-db',
  synchronize: false,
  migrationsRun: true,
  logging: VERBOSE_DEBUG === 'true' ?? false,
  entities: [`src/**/*entity.${fileExtensions}`],
  migrations: [`src/database/migrations/*.${fileExtensions}`],
};

// Create a new DataSource instance with the ormconfig.
export const dataSource = new DataSource(dataSourceConfig);
