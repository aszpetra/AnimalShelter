import { Request, Response, NextFunction } from 'express';
import  { DbApiService } from "../services/db-api-service";

const dbApi = new DbApiService();

export async function createAnimal(req: Request, res: Response, next: NextFunction) {
    const animalData = req.body;
    await dbApi.createAnimal(animalData);

    res.status(201).send('OK');
}

export async function getAnimalById(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const animal = await dbApi.getAnimalById(id);
    res.send(animal);
}

export async function getAnimals(req: Request, res: Response, next: NextFunction) {
    const animals = await dbApi.getAnimals();
    res.send(animals);
}

export async function updateAnimal(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const updatedAnimal = req.body.updatedAnimal;
    const animal = await dbApi.updateAnimal(id, updatedAnimal);
    res.send(animal);
}

export async function deleteAnimal(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    await dbApi.deleteAnimal(id);
    res.status(204);
}

export async function createAdopted(req: Request, res: Response, next: NextFunction) {
    const userId = req.body.userId;
    const animalId = req.params.id;
    const adopted = dbApi.createAdopted(userId, animalId);
    res.send(adopted);
}

export async function getAllAdopted(req: Request, res: Response, next: NextFunction) {
    const allAdopted = await dbApi.getAllAdopted();
    res.send(allAdopted);
}

