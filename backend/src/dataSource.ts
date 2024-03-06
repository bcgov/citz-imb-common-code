import { DataSourceOptions, DataSource } from 'typeorm';

const { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME, DEBUG, NODE_ENV } =
  process.env;

const fileExtensions = NODE_ENV === 'production' ? 'js' : 'ts';

const ormconfig: DataSourceOptions = {
  type: 'postgres',
  host: DATABASE_HOST ?? 'coco-database',
  port: 5432,
  username: DATABASE_USER ?? 'postgres',
  password: DATABASE_PASSWORD ?? 'postgres',
  database: DATABASE_NAME ?? 'sandbox',
  synchronize: false,
  migrationsRun: true,
  logging: DEBUG === 'true' ?? false,
  entities: [`src/**/*entity.${fileExtensions}`],
  migrations: [`src/migrations/*.${fileExtensions}`],
};

// Create a new DataSource instance with the ormconfig.
const dataSource = new DataSource(ormconfig);

export default dataSource;
