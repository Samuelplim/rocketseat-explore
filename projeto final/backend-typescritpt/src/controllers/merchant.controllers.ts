import { Request, Response } from "express";
import { MerchantRepository } from "../repositories/merchant.repositories";
import { MerchantService } from "../services/merchant.service";

export class MerchantController {
  async create(req: Request, res: Response) {
    const { name } = req.body;
    const { user_id } = req.params;

    const merchantRepository = new MerchantRepository();
    const merchantService = new MerchantService(merchantRepository);

    const merchantID = await merchantService.create({
      name,
      user_id: parseInt(user_id),
    });

    return res.status(201).json(merchantID);
  }
}
