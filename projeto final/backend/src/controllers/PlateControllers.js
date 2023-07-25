const PlateRepository = require("../repositories/PlateRepository");
const PlateService = require("../services/PlateService");

class PlateController {
  async index(request, response) {
    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const plates = await plateService.index();

    return response.status(200).json(plates);
  }

  async create(request, response) {
    const { name, price, description, companies_id } = request.body;

    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const plateId = await plateService.create({
      companies_id,
      name,
      price,
      description,
    });
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
