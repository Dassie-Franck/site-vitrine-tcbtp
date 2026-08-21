import { ServiceCategoryRepositoryPort } from "../../../core/domain/ports/ServiceCategoryRepository.port";
import { ServiceCategory } from "../../../core/domain/entities/ServiceCategory.entity";
import { serviceCategoriesData } from "../data/serviceCategories.data";

export class MockServiceCategoryRepository extends ServiceCategoryRepositoryPort {
  async getAll() {
    return serviceCategoriesData.map((data) => ServiceCategory.create(data));
  }
}