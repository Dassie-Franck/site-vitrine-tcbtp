import { ServiceRepositoryPort } from "../../../core/domain/ports/ServiceRepository.port";
import { Service } from "../../../core/domain/entities/Service.entity";
import { servicesData } from "../data/services.data";

export class MockServiceRepository extends ServiceRepositoryPort {
  async getAll() {
    return servicesData.map((data) => Service.create(data));
  }

  async getById(id) {
    const found = servicesData.find((data) => data.id === id);
    return found ? Service.create(found) : null;
  }
}