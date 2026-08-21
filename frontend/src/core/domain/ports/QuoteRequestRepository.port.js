export class QuoteRequestRepositoryPort {
  /**
   * @param {QuoteRequest} quoteRequest
   * @returns {Promise<{ success: boolean, id?: string }>}
   */
  async submit(quoteRequest) {
    throw new Error("QuoteRequestRepositoryPort.submit() must be implemented");
  }
}