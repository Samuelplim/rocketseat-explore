const PlateRepository = require("../repositories/PlateRepository");
const PlateService = require("../services/PlateService");

class PlateController {
  async create(request, response) {
    const { name, image, price, description } = request.body;
    const { companies_id } = request.params;

    const plateRepository = new PlateRepository();
    const plateService = new PlateService(plateRepository);

    try {
      const companyID = await plateService.create({
        companies_id,
        name,
        image,
        price,
        description,
      });

      return response.status(201).json(companyID);
    } catch (error) {
      return response.status(error.statusCode).json(error.message);
    }
  }
}

module.exports = PlateController;
