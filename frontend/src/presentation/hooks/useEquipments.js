import { useQuery } from "@tanstack/react-query";
import { container } from "../../di/container";

export function useEquipments() {
  return useQuery({
    queryKey: ["equipments"],
    queryFn: () => container.useCases.equipments.getAllEquipments.execute(),
  });
}