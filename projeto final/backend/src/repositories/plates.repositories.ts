import { connection } from "../database";
import { PlateRepositoryInterface } from "./repository";

export class PlateRepository implements PlateRepositoryInterface {
  async index() {
    const plates = await connection("plates").select("*");
    return plates;
  }

  async findById(id: number) {
    const plate = await connection("plates").where({ id }).first();
    return plate;
  }

  async create({
    name,
    price,
    description,
    category,
  }: {
    name: string;
    price: number;
    description: string;
    category: string;
  }) {
    const plateID = await connection("plates").insert({
      name,
      price,
      description,
      category,
    });

    return plateID;
  }

  async update({
    id,
    name,
    price,
    description,
    category,
  }: {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
  }) {
    const plate = await connection("plates").where({ id }).update({
      name,
      price,
      description,
      category,
      updated_at: connection.fn.now(),
    });
    return plate;
  }

  async patch(id: number, image: string) {
    return await connection("plates").where({ id }).update({ image: image });
  }

  async delete(id: number) {
    const response = await connection("plates").where({ id }).del();
    return response;
  }
}
