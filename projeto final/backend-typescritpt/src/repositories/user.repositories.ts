import { connection } from "../database/";
import { UserRepositoryInterface } from "./repository";

export class UserRepository implements UserRepositoryInterface {
  async findById(id: number): Promise<any> {
    return await connection("users").where({ id }).first();
  }
  async findByEmail(email: string): Promise<any> {
    const user = await connection("users").where({ email }).first();
    return user;
  }
  async update({
    id,
    name,
    email,
    password,
  }: {
    id: number;
    name: string;
    email: string;
    password: string;
  }): Promise<number> {
    const user = await connection("users")
      .where({ id })
      .update({ name, email, password });
    return user;
  }
  async create({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    const userID = await connection("users").insert({
      name,
      email,
      password,
      isAdmin: false,
    });

    return userID;
  }
}
