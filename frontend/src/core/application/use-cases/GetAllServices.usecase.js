/**
 * Use Case : récupérer la liste complète des services.
 *
 * Le use case ne connaît QUE le port (interface), jamais l'implémentation
 * concrète (Mock ou Api). C'est l'injection de dépendance (via le constructeur)
 * qui lui fournit le bon repository au moment de l'exécution.
 */
export class GetAllServicesUseCase {
  /**
   * @param {import('../../domain/ports/ServiceRepository.port').ServiceRepositoryPort} serviceRepository
   */
  constructor(serviceRepository) {
    this.serviceRepository = serviceRepository;
  }

  /**
   * @returns {Promise<Service[]>}
   */
  async execute() {
    return this.serviceRepository.getAll();
  }
}