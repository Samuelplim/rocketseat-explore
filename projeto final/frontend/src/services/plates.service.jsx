import { api } from "../apis/api";

export async function createPLates(plates) {
  const response = await api.post("/plates", plates);
  return response;
}
export async function indexPlates() {
  const response = await api.get("/plates");
  return response;
}

export async function pacthPlates(plates) {
  const response = await api.pacth("/plates", plates);
  return response;
}
