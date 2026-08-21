import { useQuery } from "@tanstack/react-query";
import { container } from "../../di/container";

export function useBlogPosts() {
  return useQuery({
    queryKey: ["blogPosts"],
    queryFn: () => container.useCases.blogPosts.getAllBlogPosts.execute(),
  });
}

export function useBlogPostById(id) {
  return useQuery({
    queryKey: ["blogPosts", id],
    queryFn: () => container.useCases.blogPosts.getBlogPostById.execute(id),
    enabled: !!id,
  });
}