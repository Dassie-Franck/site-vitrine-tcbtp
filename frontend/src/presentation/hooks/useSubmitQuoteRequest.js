import { useMutation } from "@tanstack/react-query";
import { container } from "../../di/container";

export function useSubmitQuoteRequest() {
  return useMutation({
    mutationFn: (formData) =>
      container.useCases.quoteRequest.submitQuoteRequest.execute(formData),
  });
}