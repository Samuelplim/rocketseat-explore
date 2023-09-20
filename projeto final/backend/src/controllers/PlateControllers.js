const PlateRepository = require("../repositories/PlateRepository");
const PlateService = require("../services/PlateService");
const AppError = require("../utils/AppError");

class PlateController {
  async index(request, response) {
    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const plates = await plateService.index();

    return response.status(200).json(plates);
  }

  async findById(request, response) {
    const { id } = request.params;
    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const plate = await plateService.findById(id);
    return response.status(200).json(plate);
  }

  async create(request, response) {
    const { name, price, description, category, ingredients } = request.body;
    const plate = { name, price, description, category, ingredients };

    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const plateId = await plateService.create(plate);
    return response.status(201).json({ id: plateId });
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, price, description, category, ingredients } = request.body;
    const plate = { id, name, price, description, category, ingredients };

    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const plateId = await plateService.update(plate);
    return response.status(201).json({ id: plateId });
  }

  async patch(request, response) {
    const { id } = request.params;
    if (!request.file) {
      throw new AppError("Selecione uma imagem!");
    }
    const avatarFilename = request.file.filename;

    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    await plateService.patch(id, avatarFilename);

    return response.status(200).json({ message: "Prato atualizado" });
  }

  async delete(request, response) {
    const { id } = request.params;
    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const res = await plateService.delete(id);

    return response.status(204).json();
  }
}

module.exports = PlateController;
