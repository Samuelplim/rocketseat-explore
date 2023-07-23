const TagRepository = require("../repositories/TagRepository");
const TagService = require("../services/TagService");

class TagController {
  async create(request, response) {
    const { name } = request.body;
    const { plate_id } = request.params;

    const tagRepository = new TagRepository();
    const tagService = new TagService(tagRepository);

    console.log("log", name, plate_id);

    const tagID = await tagService.create({
      name,
      plate_id,
    });

    return response.status(201).json(tagID);
  }
}

module.exports = TagController;
