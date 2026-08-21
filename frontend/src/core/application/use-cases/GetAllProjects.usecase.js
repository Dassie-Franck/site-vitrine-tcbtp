export class GetAllProjectsUseCase {
  constructor(projectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute() {
    return this.projectRepository.getAll();
  }
}