import { api } from "../apis/api";

export async function createCustomers(users) {
  const response = await api.post("/users", users);
  return response;
}

export async function findByEmailCustomers(users) {
  const response = await api.get("/users", users);
  return response;
}

export async function deleteCustomers(users) {
  const response = await api.delete("/users", users);
  return response;
}
