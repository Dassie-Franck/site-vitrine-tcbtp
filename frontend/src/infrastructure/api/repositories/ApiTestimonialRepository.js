const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

export class ApiTestimonialRepository {
  async getAll() {
    const response = await fetch(`${API_BASE_URL}/testimonials`);
    if (!response.ok) throw new Error('Erreur lors du chargement des témoignages');

    const data = await response.json();
    return data.map((item) => ({
      id: item.id,
      name: item.author_name || item.client_name || 'Client',
      role: item.author_role || item.company || 'Client',
      content: item.content,
      rating: item.rating,
      // Récupération de l'URL complète issue de l'accessor Eloquent
      avatar: item.avatar_url || item.avatar,
      projectType: item.project_type,
    }));
  }
}