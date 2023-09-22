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

  async update(plate) {
    const plateId = await this.plateRepository.update({ ...plate });
    return plateId;
  }

  async patch(id, image) {
    const diskStorage = new DiskStorage();
    const plate = await this.plateRepository.findById(id);
    if (!plate) {
      throw new AppError("Prato não encontrado!");
    }
    if (plate.image) {
      await diskStorage.deleteFile(plate.image);
    }
    try {
      await diskStorage.saveFile(image);
    } catch (error) {
      console.log(error);
    }
    const resBolean = await this.plateRepository.patch(id, image);

    return resBolean;
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
