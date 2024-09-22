import { Router } from "express";
import { MerchantController } from "../controllers/merchant.controllers";

export const merchantRoutes = Router();

const merchantController = new MerchantController();

merchantRoutes.post("/:user_id", merchantController.create);
