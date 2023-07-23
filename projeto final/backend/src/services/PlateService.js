const AppError = require("../utils/AppError");

class PlateService {
  constructor(plateRepository) {
    this.plateRepository = plateRepository;
  }

  async create({ companies_id, name, image, description, price }) {
    const plateId = await this.plateRepository.create({
      companies_id,
      name,
      image,
      description,
      price,
    });
    return plateId;
  }
}

module.exports = PlateService;
