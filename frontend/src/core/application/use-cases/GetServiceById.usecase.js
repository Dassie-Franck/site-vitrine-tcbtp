/**
 * Use Case : récupérer un service précis par son id.
 */
export class GetServiceByIdUseCase {
  /**
   * @param {import('../../domain/ports/ServiceRepository.port').ServiceRepositoryPort} serviceRepository
   */
  constructor(serviceRepository) {
    this.serviceRepository = serviceRepository;
  }

  /**
   * @param {string|number} id
   * @returns {Promise<Service|null>}
   */
  async execute(id) {
    if (!id) {
      throw new Error("GetServiceByIdUseCase: 'id' is required");
    }
    return this.serviceRepository.getById(id);
  }
}