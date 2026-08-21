export class BlogPostRepositoryPort {
  async getAll() {
    throw new Error("BlogPostRepositoryPort.getAll() must be implemented");
  }

  async getById(id) {
    throw new Error("BlogPostRepositoryPort.getById() must be implemented");
  }
}