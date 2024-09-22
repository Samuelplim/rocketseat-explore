export interface UserRepositoryInterface {
  findById(id: number): Promise<any>;
  findByEmail(email: string): Promise<any>;
  create(data: any): Promise<number[]>;
  update(data: any): Promise<number>;
}

export interface TagRepositoryInterface {
  findByID(id: number): Promise<any>;
  create(data: any): Promise<any>;
}

export interface MerchantRepositoryInterface {
  findById(id: number): Promise<any>;
  create(data: any): Promise<any>;
}

export interface PlateRepositoryInterface {
  index(): Promise<any>;
  findById(id: number): Promise<any>;
  create(data: any): Promise<any>;
  update(data: any): Promise<any>;
  patch(id: number, image: string): Promise<any>;
  delete(id: number): Promise<any>;
}
