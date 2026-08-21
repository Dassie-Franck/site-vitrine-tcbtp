import { useQuery } from "@tanstack/react-query";
import { container } from "../../di/container";

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: () => container.useCases.services.getAllServices.execute(),
  });
}

export function useServiceById(id) {
  return useQuery({
    queryKey: ["services", id],
    queryFn: () => container.useCases.services.getServiceById.execute(id),
    enabled: !!id,
  });
}