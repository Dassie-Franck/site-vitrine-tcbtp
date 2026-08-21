export class GetAllTestimonialsUseCase {
  constructor(testimonialRepository) {
    this.testimonialRepository = testimonialRepository;
  }

  async execute() {
    return this.testimonialRepository.getAll();
  }
}