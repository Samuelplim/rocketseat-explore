import { Request, Response } from "express";
import { TagRepository } from "../repositories/tag.repositories";
import { TagService } from "../services/tag.services";

export class TagController {
  async create(request: Request, response: Response) {
    const { name } = request.body;
    const { plate_id } = request.params;

    const tagRepository = new TagRepository();
    const tagService = new TagService(tagRepository);

    const tagID = await tagService.create({
      name,
      plate_id: parseInt(plate_id),
    });

    return response.status(201).json(tagID);
  }
}
