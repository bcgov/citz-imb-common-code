/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { httpStatusCode } from '../../../utils';
import { errorWrapper } from '../../../utils/express-requests/errorWrapper';
import { Service } from '../service/service.class';

export class Controller<TEntity> {
  getAllItems: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  getItemById: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  getItemByWhere: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  createItem: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  createItems: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  updateItemById: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  deleteItemById: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  constructor(service: Service<TEntity>) {
    this.getAllItems = errorWrapper(async (req: Request, res: Response) => {
      const allItems = await service.getAllItems();

      if (Array.isArray(allItems.data) && allItems.data.length === 0)
        return res.status(httpStatusCode.NO_CONTENT).json(allItems);

      res.status(httpStatusCode.OK).json(allItems);
    });

    this.getItemById = errorWrapper(async (req: Request, res: Response) => {
      const item = await service.getItemById(req.params.id);

      if (!item) return res.status(httpStatusCode.BAD_REQUEST).json({ message: 'Item not found' });

      res.status(httpStatusCode.OK).json(item);
    });

    this.getItemByWhere = errorWrapper(async (req: Request, res: Response) => {
      const item = await service.getItemByWhere(req.body);

      if (!item) return res.status(httpStatusCode.BAD_REQUEST).json({ message: 'Item not found' });

      res.status(httpStatusCode.OK).json(item);
    });

    this.createItem = errorWrapper(async (req: Request, res: Response) => {
      const createdItem = await service.createItem(req.body);

      res.status(httpStatusCode.CREATED).json(createdItem);
    });

    this.createItems = errorWrapper(async (req: Request, res: Response) => {
      const createdItems = await service.createItems(req.body);

      res.status(httpStatusCode.CREATED).json(createdItems);
    });

    this.updateItemById = errorWrapper(async (req: Request, res: Response) => {
      const updatedItem = await service.updateItemById(req.params.id, req.body);

      if (!updatedItem)
        return res.status(httpStatusCode.BAD_REQUEST).json({ message: 'Item not found' });

      res.status(httpStatusCode.OK).json(updatedItem);
    });

    this.deleteItemById = errorWrapper(async (req: Request, res: Response) => {
      await service.deleteItemById(req.params.id);

      res.status(httpStatusCode.NO_CONTENT).json({ message: 'Item deleted successfully' });
    });
  }
}
