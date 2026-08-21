import { useQuery } from "@tanstack/react-query";
import { container } from "../../di/container";

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: () => container.useCases.projects.getAllProjects.execute(),
  });
}

export function useProjectById(id) {
  return useQuery({
    queryKey: ["projects", id],
    queryFn: () => container.useCases.projects.getProjectById.execute(id),
    enabled: !!id,
  });
}