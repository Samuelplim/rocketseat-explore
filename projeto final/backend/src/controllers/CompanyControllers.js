const CompanyRepository = require("../repositories/CompanyRepository");
const CompanyService = require("../services/CompanyService");

class CompanyController {
  async create(request, response) {
    const { name } = request.body;
    const { user_id } = request.params;

    const companyRepository = new CompanyRepository();
    const companyService = new CompanyService(companyRepository);

    const companyID = await companyService.create({
      name,
      user_id,
    });

    return response.status(201).json(companyID);
  }
}

module.exports = CompanyController;
