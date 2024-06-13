import { createEndpoints } from '@bcgov/citz-imb-endpoint-builder';
import { dataSource } from './database/dataSource';
import { Task } from './entities';

export const routes = createEndpoints<Task>({ entity: Task as unknown as Task, dataSource }).routes;
