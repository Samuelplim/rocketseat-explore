const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class PlateService {
  constructor(plateRepository) {
    this.plateRepository = plateRepository;
  }

  async index() {
    const plates = await this.plateRepository.index();

    if (!plates.length) {
      throw new AppError("Não Possui pratos cadastrados!");
    }

    return plates;
  }

  async findById(id) {
    const plate = await this.plateRepository.findById(id);
    if (!plate) {
      throw new AppError("Prato não encontrado!");
    }
    return plate;
  }

  async create(plate) {
    const { name, price, description, category, ingredients } = plate;
    const plateId = await this.plateRepository.create(
      name,
      price,
      description,
      category,
      ingredients
    );
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

  async delete(id) {
    const plate = await this.plateRepository.findById(id);
    if (!plate) {
      throw new AppError("Prato não encontrado!");
    }
    const response = await this.plateRepository.delete(id);
    return response;
  }
}

module.exports = PlateService;
