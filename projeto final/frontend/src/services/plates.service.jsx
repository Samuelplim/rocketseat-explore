import { api } from "../apis/api";

const url = "/plates";
export async function createPlates(
  name,
  price,
  description,
  category,
  ingredients
) {
  const response = await api.post(
    url,
    name,
    price,
    description,
    category,
    ingredients
  );
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.message);
  }
}

export async function indexPlates() {
  const response = await api.get(url);
  return response;
}

export async function pacthPlates(plate) {
  const response = await api.pacth(url, plate);
  return response;
}

export async function findByIdPlate(id) {
  const response = await api.get(`${url}/${id}`);
  return response;
}
export async function deleteByIdPlate(id) {
  const response = await api.delete(`${url}/${id}`);
  return response;
}
