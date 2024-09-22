import { DiskStorage } from "../providers/diskStorage";
import { PlateRepositoryInterface } from "../repositories/repository";
import { AppError } from "../utils/AppError";

export class PlateService {
  plateRepository: PlateRepositoryInterface;
  constructor(plateRepository: PlateRepositoryInterface) {
    this.plateRepository = plateRepository;
  }

  async index() {
    const plates = await this.plateRepository.index();

    if (!plates.length) {
      throw new AppError("Não Possui pratos cadastrados!");
    }

    return plates;
  }

  async findById(id: number) {
    const plate = await this.plateRepository.findById(id);
    if (!plate) {
      throw new AppError("Prato não encontrado!");
    }
    return plate;
  }

  async create({
    name,
    price,
    description,
    ingredients,
  }: {
    name: string;
    price: number;
    description: string;
    ingredients: string;
  }) {
    const plateId = await this.plateRepository.create({
      name,
      price,
      description,
      ingredients,
    });
    return plateId;
  }

  async update({
    id,
    name,
    price,
    description,
    ingredients,
  }: {
    id: number;
    name: string;
    price: number;
    description: string;
    ingredients: string;
  }) {
    const plateId = await this.plateRepository.update({
      id,
      name,
      price,
      description,
      ingredients,
    });
    return plateId;
  }

  async patch(id: number, image: string) {
    const diskStorage = new DiskStorage();
    const plate = await this.plateRepository.findById(id);
    if (!plate) {
      throw new AppError("Prato não encontrado!");
    }
    if (plate.image) {
      await diskStorage.deleteFile(plate.image);
    }
    try {
      await diskStorage.saveFile(image);
    } catch (error) {
      console.log(error);
    }
    const resBolean = await this.plateRepository.patch(id, image);

    return resBolean;
  }

  async delete(id: number) {
    const plate = await this.plateRepository.findById(id);
    if (!plate) {
      throw new AppError("Prato não encontrado!");
    }
    const response = await this.plateRepository.delete(id);
    return response;
  }
}
