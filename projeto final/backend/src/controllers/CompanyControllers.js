const CompanyRepository = require("../repositories/CompanyRepository");
const CompanyService = require("../services/CompanyService");

class CompanyController {
  async create(request, response) {
    const { name } = request.body;
    const { id } = request.params;

    const companyRepository = new CompanyRepository();
    const companyService = new CompanyService(companyRepository);
    try {
      const companyID = await companyService.create({
        name,
        id,
      });

      return response.status(201).json(companyID);
    } catch (error) {
      return response.status(error.statusCode).json(error.message);
    }
  }
}

module.exports = CompanyController;
