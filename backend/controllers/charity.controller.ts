import { Request, Response, NextFunction } from 'express';
import  { DbApiService } from "../services/db-api-service";

const dbApi = new DbApiService();

export async function createCharity(req: Request, res: Response, next: NextFunction) {
    const charityData = req.body;
    await dbApi.createCharity(charityData);

    res.status(201).send('OK');
}

export async function getCharities(req: Request, res: Response, next: NextFunction) {
    const charities = await dbApi.getCharities();
    res.send(charities);
}
