import { useQuery } from "@tanstack/react-query";
import { container } from "../../di/container";

export function useTeamMembers() {
  return useQuery({
    queryKey: ["teamMembers"],
    queryFn: () => container.useCases.teamMembers.getAllTeamMembers.execute(),
  });
}