import { MerchantRepositoryInterface } from "../repositories/repository";

export class MerchantService {
  merchantRepository: MerchantRepositoryInterface;
  constructor(merchantRepository: MerchantRepositoryInterface) {
    this.merchantRepository = merchantRepository;
  }

  async findById(id: number) {
    const merchant = this.merchantRepository.findById(id);
    return merchant;
  }

  async create({ name, user_id }: { name: string; user_id: number }) {
    const merchantId = this.merchantRepository.create({ name, user_id });
    return merchantId;
  }
}
