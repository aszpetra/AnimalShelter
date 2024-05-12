import axios from "axios";

export class DbApiService {

  async createUser(email: string, password: string, name: string, isAdmin: boolean = false) {
    const newUser = {
      email: email,
      password: password,
      name: name,
      isAdmin: isAdmin
    };
    return await axios.post('http://localhost:10021/api/v1/User', newUser);
  }

  async getUserByEmail(email: string) {
    return (await axios.get(`http://localhost:10021/api/v1/User?query={"email":"${email}"}`)).data;
  }

  async getUserById(id: string) {
    return (await axios.get(`http://localhost:10021/api/v1/User?query={"_id":"${id}"}`)).data;
  }

  async getAnimals() {
    return (await axios.get('http://localhost:10021/api/v1/Animal')).data;
  }

  async createAnimal(newAnimal: Object) {
    return (await axios.post('http://localhost:10021/api/v1/Animal', newAnimal)).data;
  }

  async getAnimalById(id: string) {
    return (await axios.get(`http://localhost:10021/api/v1/Animal/query={"_id": "${id}"}`)).data;
  }

  async updateAnimal(id: string, updatedAnimal: Object) {
    return (await axios.put(`http://localhost:10021/api/v1/Animal/query={"_id": "${id}"}`, updatedAnimal)).data;
  }

  async deleteAnimal(id: string) {
    return await axios.delete(`http://localhost:10021/api/v1/Animal?query={"_id": "${id}"}`);
  }

  async createAdopted(userId: string, animalId: string) {
    const animal = await this.getAnimalById(animalId);
    await this.deleteAnimal(animalId);
    return (await axios.post('http://localhost:10021/api/v1/Adopted', {name: animal.name, species: animal.species, breed: animal.breed, date: new Date(), adopter: userId})).data;
  }

  async getAllAdopted() {
    return (await axios.get('http://localhost:10021/api/v1/Adopted')).data;
  }

  async createCharity(newCharity: Object) {
    return (await axios.post('http://localhost:10021/api/v1/Charity', newCharity)).data;
  }

  async getCharities() {
    return (await axios.get('http://localhost:10021/api/v1/Charity')).data
  }
}