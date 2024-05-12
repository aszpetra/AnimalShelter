import { Request, Response, NextFunction } from 'express';
import  { DbApiService } from "../services/db-api-service";

const dbApi = new DbApiService();

export async function signUp(req: Request, res: Response, next: NextFunction) {
    const userData = req.body;
    await dbApi.createUser(userData.email, userData.password, userData.name);

    res.status(201).send('OK');
}

export async function logIn(req: Request, res: Response, next: NextFunction) {
    const userData = req.body;
    const user = await dbApi.getUserByEmail(userData.email);
    if(user && user[0].password === userData.password) {
    } else {
        res.status(401).send("Incorrect email or password");
    }
}

export async function logOut(req: Request, res: Response, next: NextFunction) {
    res.status(204).send('OK');
}

