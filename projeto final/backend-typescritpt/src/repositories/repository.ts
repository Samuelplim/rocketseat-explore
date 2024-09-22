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
