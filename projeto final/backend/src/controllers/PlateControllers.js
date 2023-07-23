const PlateRepository = require("../repositories/PlateRepository");
const PlateService = require("../services/PlateService");

class PlateController {
  async create(request, response) {
    const { name, image, price, description } = request.body;
    const { companies_id } = request.params;

    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    console.log("log", companies_id, name, image, price, description);

    const companyID = await plateService.create({
      companies_id,
      name,
      image,
      price,
      description,
    });

    return response.status(201).json(companyID);
  }
}

module.exports = PlateController;
