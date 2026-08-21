import { QuoteRequestRepositoryPort } from "../../../core/domain/ports/QuoteRequestRepository.port";

export class MockQuoteRequestRepository extends QuoteRequestRepositoryPort {
  async submit(quoteRequest) {
    // Simulation d'un appel réseau
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("[MockQuoteRequestRepository] Devis reçu :", quoteRequest);

    return { success: true, id: `mock-${Date.now()}` };
  }
}