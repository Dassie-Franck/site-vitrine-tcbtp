export class GetProjectByIdUseCase {
  constructor(projectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute(id) {
    if (!id) {
      throw new Error("GetProjectByIdUseCase: 'id' is required");
    }
    return this.projectRepository.getById(id);
  }
}