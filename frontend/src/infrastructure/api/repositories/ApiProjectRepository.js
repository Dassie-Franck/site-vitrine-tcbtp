const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';
const STORAGE_BASE_URL = API_BASE_URL.replace(/\/api\/?$/, '');

export class ApiProjectRepository {
  /**
   * Récupère la liste de tous les projets
   */
  async getAll() {
    const response = await fetch(`${API_BASE_URL}/projects`);

    if (!response.ok) {
      throw new Error(`Erreur lors du chargement des projets (Code: ${response.status})`);
    }

    const result = await response.json();
    const data = result.data || result;

    return data.map((item) => this.mapToDomain(item));
  }

  /**
   * Récupère un projet unique par son ID
   */
  async getById(id) {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`);

    if (!response.ok) {
      throw new Error(`Projet non trouvé (Code: ${response.status})`);
    }

    const result = await response.json();
    const item = result.data || result;

    return this.mapToDomain(item);
  }

  /**
   * Mappe les données brutes de l'API vers l'objet Métier/Domaine
   */
  mapToDomain(item) {
    let images = [];

    if (item.images && item.images.length > 0) {
      images = item.images.map((img) => {
        const path = img.path || img.image_path;
        return path.startsWith('http')
          ? path
          : `${STORAGE_BASE_URL}/storage/${path.replace(/^public\//, '').replace(/^\//, '')}`;
      });
    }

    return {
      id: item.id,
      title: item.title || item.name,
      slug: item.slug,
      category: item.category?.name || item.category || 'Non spécifié',
      client: item.client || 'Client confidentiel',
      location: item.location || 'Non précisé',
      completionDate: item.completion_date || item.created_at,
      description: item.description,
      challenge: item.challenge,
      solution: item.solution,
      results: item.results,
      mainImage: images[0] || '/assets/placeholder.jpg',
      gallery: images,
    };
  }
}