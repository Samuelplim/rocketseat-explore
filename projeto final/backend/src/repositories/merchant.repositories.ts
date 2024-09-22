import { connection } from "../database";
import { MerchantRepositoryInterface } from "./repository";

export class MerchantRepository implements MerchantRepositoryInterface {
  async findById(id: number) {
    return await connection("merchant").where({ id }).first();
  }

  async create({ name, user_id }: { name: string; user_id: number }) {
    const merchantId = await connection("merchant").insert({ name, user_id });

    return { id: merchantId };
  }
}
