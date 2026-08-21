const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

export class ApiTeamMemberRepository {
  /**
   * Récupère la liste des membres de l'équipe depuis l'API Laravel
   * et formate les données pour respecter le modèle attendu par le Use Case.
   */
  async getAll() {
    const response = await fetch(`${API_BASE_URL}/home-content`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();

    // Mapping : Adapte les champs retournés par Laravel (photo_url)
    // vers les champs attendus par ton entité React (avatar)
    return data.team.map((member) => ({
      id: member.id,
      name: member.name,
      role: member.role,
      bio: member.bio,
      avatar: member.photo_url,
      order: member.order,
    }));
  }
}