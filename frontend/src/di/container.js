// Repositories Mock
import { MockServiceRepository } from "../infrastructure/mock/repositories/MockServiceRepository";
import { MockProjectRepository } from "../infrastructure/mock/repositories/MockProjectRepository";
import { MockServiceCategoryRepository } from "../infrastructure/mock/repositories/MockServiceCategoryRepository";
import { MockTeamMemberRepository } from "../infrastructure/mock/repositories/MockTeamMemberRepository";
import { MockTestimonialRepository } from "../infrastructure/mock/repositories/MockTestimonialRepository";
import { MockBlogPostRepository } from "../infrastructure/mock/repositories/MockBlogPostRepository";
import { MockQuoteRequestRepository } from "../infrastructure/mock/repositories/MockQuoteRequestRepository";
import { MockEquipmentRepository } from "../infrastructure/mock/repositories/MockEquipmentRepository";

// Use Cases
import { GetAllServicesUseCase } from "../core/application/use-cases/GetAllServices.usecase";
import { GetServiceByIdUseCase } from "../core/application/use-cases/GetServiceById.usecase";
import { GetAllProjectsUseCase } from "../core/application/use-cases/GetAllProjects.usecase";
import { GetProjectByIdUseCase } from "../core/application/use-cases/GetProjectById.usecase";
import { GetAllServiceCategoriesUseCase } from "../core/application/use-cases/GetAllServiceCategories.usecase";
import { GetAllTeamMembersUseCase } from "../core/application/use-cases/GetAllTeamMembers.usecase";
import { GetAllTestimonialsUseCase } from "../core/application/use-cases/GetAllTestimonials.usecase";
import { GetAllBlogPostsUseCase } from "../core/application/use-cases/GetAllBlogPosts.usecase";
import { GetBlogPostByIdUseCase } from "../core/application/use-cases/GetBlogPostById.usecase";
import { SubmitQuoteRequestUseCase } from "../core/application/use-cases/SubmitQuoteRequest.usecase";
import { GetAllEquipmentsUseCase } from "../core/application/use-cases/GetAllEquipments.usecase";
import { GetEquipmentByIdUseCase } from "../core/application/use-cases/GetEquipmentById.usecase";

// Instanciations directes avec les Mock Repositories
const serviceRepository = new MockServiceRepository();
const projectRepository = new MockProjectRepository();
const serviceCategoryRepository = new MockServiceCategoryRepository();
const teamMemberRepository = new MockTeamMemberRepository();
const testimonialRepository = new MockTestimonialRepository();
const blogPostRepository = new MockBlogPostRepository();
const quoteRequestRepository = new MockQuoteRequestRepository();
const equipmentRepository = new MockEquipmentRepository();

export const container = {
  useCases: {
    services: {
      getAllServices: new GetAllServicesUseCase(serviceRepository),
      getServiceById: new GetServiceByIdUseCase(serviceRepository),
    },
    projects: {
      getAllProjects: new GetAllProjectsUseCase(projectRepository),
      getProjectById: new GetProjectByIdUseCase(projectRepository),
    },
    serviceCategories: {
      getAllServiceCategories: new GetAllServiceCategoriesUseCase(serviceCategoryRepository),
    },
    teamMembers: {
      getAllTeamMembers: new GetAllTeamMembersUseCase(teamMemberRepository),
    },
    testimonials: {
      getAllTestimonials: new GetAllTestimonialsUseCase(testimonialRepository),
    },
    blogPosts: {
      getAllBlogPosts: new GetAllBlogPostsUseCase(blogPostRepository),
      getBlogPostById: new GetBlogPostByIdUseCase(blogPostRepository),
    },
    quoteRequest: {
      submitQuoteRequest: new SubmitQuoteRequestUseCase(quoteRequestRepository),
    },
    equipments: {
      getAllEquipments: new GetAllEquipmentsUseCase(equipmentRepository),
      getEquipmentById: new GetEquipmentByIdUseCase(equipmentRepository),
    },
  },
};