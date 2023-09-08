const PlateRepository = require("../repositories/PlateRepository");
const PlateService = require("../services/PlateService");

class PlateController {
  async index(request, response) {
    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const plates = await plateService.index();

    return response.status(200).json(plates);
  }

  async findById(request, response) {
    const { id } = request.params;
    console.log(id);
    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const plate = await plateService.findById(1);
  }

  async create(request, response) {
    const { name, price, description, category, ingredients } = request.body;
    const plate = { name, price, description, category, ingredients };

    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const plateId = await plateService.create(plate);
    return response.status(201).json({ id: plateId });
  }

  async patch(request, response) {
    const { id } = request.params;
    const avatarFilename = request.file.filename;

    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);
    const plate = await plateService.patch({ id, avatarFilename });

    return response.status(201).json(plate);
  }
}

module.exports = PlateController;
