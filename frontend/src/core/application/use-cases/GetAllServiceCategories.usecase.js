export class GetAllServiceCategoriesUseCase {
  constructor(serviceCategoryRepository) {
    this.serviceCategoryRepository = serviceCategoryRepository;
  }

  async execute() {
    return this.serviceCategoryRepository.getAll();
  }
}