import { useQuery } from "@tanstack/react-query";
import { container } from "../../di/container";

export function useProjectDetail(id) {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => container.useCases.projects.getProjectById.execute(id),
    enabled: !!id,
  });
}