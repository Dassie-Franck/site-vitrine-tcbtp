export class ProjectRepositoryPort {
  async getAll() {
    throw new Error("ProjectRepositoryPort.getAll() must be implemented");
  }

  async getById(id) {
    throw new Error("ProjectRepositoryPort.getById() must be implemented");
  }
}