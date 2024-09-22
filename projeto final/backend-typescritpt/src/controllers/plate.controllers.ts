import { Request, Response } from "express";
import { PlateRepository } from "../repositories/plates.repositories";
import { PlateService } from "../services/plate.service";
import { AppError } from "../utils/AppError";

export class PlateController {
  async index(request: Request, response: Response) {
    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const plates = await plateService.index();

    return response.status(200).json(plates);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;
    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const plate = await plateService.findById(parseInt(id));
    return response.status(200).json(plate);
  }

  async create(request: Request, response: Response) {
    const { name, price, description, category, ingredients } = request.body;
    const plate = { name, price, description, category, ingredients };

    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const plateId = await plateService.create(plate);
    return response.status(201).json({ id: plateId });
  }

  async update(request: Request, response: Response) {
    const { name, price, description, category, ingredients, id } =
      request.body;
    const plate = {
      id,
      name,
      price,
      description,
      category,
      ingredients,
    };

    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const plateId = await plateService.update(plate);
    return response.status(201).json({ id: plateId });
  }

  async patch(request: Request, response: Response) {
    const { id } = request.params;
    if (!request.file) {
      throw new AppError("Selecione uma imagem!");
    }
    const avatarFilename = request.file.filename;

    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    await plateService.patch(parseInt(id), avatarFilename);

    return response.status(200).json({ message: "Prato atualizado" });
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const res = await plateService.delete(parseInt(id));

    return response.status(204).json();
  }
}
