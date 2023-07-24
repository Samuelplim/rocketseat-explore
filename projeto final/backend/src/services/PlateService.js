const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class PlateService {
  constructor(plateRepository) {
    this.plateRepository = plateRepository;
  }

  async create({ companies_id, name, description, price }) {
    const plateId = await this.plateRepository.create({
      companies_id,
      name,
      description,
      price,
    });
    return plateId;
  }

  async patch({ id, image }) {
    const diskStorage = new DiskStorage();
    const plate = await this.plateRepository.findById({ id });

    if (!plate) {
      throw new AppError("Prato não encontrado!");
    }

    if (plate.image) {
      await diskStorage.deleteFile();
    }
    const filename = await diskStorage.saveFile(image);
    plate.image = filename;
    return await this.plateRepository.patch({ id, image: plate.image });
  }
}

module.exports = PlateService;
