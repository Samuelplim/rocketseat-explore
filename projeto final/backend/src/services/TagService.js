const AppError = require("../utils/AppError");

class TagService {
  constructor(tagRepository) {
    this.tagRepository = tagRepository;
  }

  async create({ name, plate_id }) {
    const tagId = await this.tagRepository.create({
      name,
      plate_id,
    });
    return tagId;
  }
}

module.exports = TagService;
