const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

export class ApiServiceRepository {
  async getAll() {
    const response = await fetch(`${API_BASE_URL}/services`);
    if (!response.ok) throw new Error('Erreur lors du chargement des services');
    return await response.json();
  }

  async getById(id) {
    const services = await this.getAll();
    return services.find((service) => service.id === Number(id));
  }
}