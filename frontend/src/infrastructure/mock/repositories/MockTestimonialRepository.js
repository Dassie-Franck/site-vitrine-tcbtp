import { TestimonialRepositoryPort } from "../../../core/domain/ports/TestimonialRepository.port";
import { Testimonial } from "../../../core/domain/entities/Testimonial.entity";
import { testimonialsData } from "../data/testimonials.data";

export class MockTestimonialRepository extends TestimonialRepositoryPort {
  async getAll() {
    return testimonialsData.map((data) => Testimonial.create(data));
  }
}