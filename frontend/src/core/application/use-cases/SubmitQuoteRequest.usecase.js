import { QuoteRequest } from "../../domain/entities/QuoteRequest.entity";

export class SubmitQuoteRequestUseCase {
  constructor(quoteRequestRepository) {
    this.quoteRequestRepository = quoteRequestRepository;
  }

  async execute(formData) {
    const quoteRequest = QuoteRequest.create(formData);

    if (!quoteRequest.isValid()) {
      throw new Error("Veuillez remplir tous les champs obligatoires.");
    }

    return this.quoteRequestRepository.submit(quoteRequest);
  }
}