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

export async function updatePlate(plate) {
  return await api.put(url, plate);
}

export async function patchPlate(plate) {
  console.log(plate.file);
  await api.patch(
    `${url}/image/${plate.id}`,
    { image: plate.file },
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  // return response;
}

export async function findByIdPlate(id) {
  const response = await api.get(`${url}/${id}`);
  return response;
}
export async function deleteByIdPlate(id) {
  const response = await api.delete(`${url}/${id}`);
  return response;
}
