import { ProjectRepositoryPort } from "../../../core/domain/ports/ProjectRepository.port";
import { Project } from "../../../core/domain/entities/Project.entity";
import { projectsData } from "../data/projects.data";

export class MockProjectRepository extends ProjectRepositoryPort {
  async getAll() {
    return projectsData.map((data) => Project.create(data));
  }

  async getById(id) {
    const found = projectsData.find((data) => data.id === id);
    return found ? Project.create(found) : null;
  }
}