import { useQuery } from "@tanstack/react-query";
import { container } from "../../di/container";

export function useServiceCategories() {
  return useQuery({
    queryKey: ["serviceCategories"],
    queryFn: () => container.useCases.serviceCategories.getAllServiceCategories.execute(),
  });
}