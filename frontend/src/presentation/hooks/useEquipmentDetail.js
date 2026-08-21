import { useQuery } from "@tanstack/react-query";
import { container } from "../../di/container";

export function useEquipmentDetail(id) {
  return useQuery({
    queryKey: ["equipment", id],
    queryFn: () => container.useCases.equipments.getEquipmentById.execute(id),
    enabled: !!id,
  });
}