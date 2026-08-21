import { useQuery } from "@tanstack/react-query";
import { container } from "../../di/container";

export function useTestimonials() {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: () => container.useCases.testimonials.getAllTestimonials.execute(),
  });
}