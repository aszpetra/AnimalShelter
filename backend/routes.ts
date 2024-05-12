import { Router } from 'express';
import { logIn, logOut, signUp} from './controllers/user.controller.js'; // Import controller functions
import {
    createAnimal,
    getAnimalById,
    getAnimals,
    updateAnimal,
    deleteAnimal,
    createAdopted,
    getAllAdopted } from './controllers/animal.controller.js';
import { createCharity, getCharities } from './controllers/charity.controller.js'

const router = Router();

router.get('/login', logIn);
router.get('/logout', logOut);
router.post('/signup', signUp);

router.post('/animals', createAnimal);
router.get('/animals', getAnimals);
router.get('/animals/:id', getAnimalById);
router.put('/animals/:id', updateAnimal);
router.delete('/animals/:id', deleteAnimal);

router.post('/adopted', createAdopted);
router.get('/adopted', getAllAdopted);

router.get('/charities', getCharities);
router.post('/charities', createCharity);

export default router;