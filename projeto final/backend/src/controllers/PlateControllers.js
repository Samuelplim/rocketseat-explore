const PlateRepository = require("../repositories/PlateRepository");
const PlateService = require("../services/PlateService");

class PlateController {
  async create(request, response) {
    const { name, price, description } = request.body;
    const { companies_id } = request.params;

    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    const companyID = await plateService.create({
      companies_id,
      name,
      price,
      description,
    });

    return response.status(201).json(companyID);
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
