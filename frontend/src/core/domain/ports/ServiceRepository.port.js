/**
 * Port (interface) définissant le contrat que toute implémentation
 * de repository de Services doit respecter.
 *
 * En JS pur, on formalise l'interface avec une classe abstraite :
 * chaque méthode lève une erreur si elle n'est pas surchargée,
 * ce qui garantit qu'un adapter (Mock ou Api) implémente bien tout.
 */
export class ServiceRepositoryPort {
  /**
   * @returns {Promise<Service[]>}
   */
  async getAll() {
    throw new Error("ServiceRepositoryPort.getAll() must be implemented");
  }

  /**
   * @param {string|number} id
   * @returns {Promise<Service|null>}
   */
  async getById(id) {
    throw new Error("ServiceRepositoryPort.getById() must be implemented");
  }
}