const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';
const STORAGE_BASE_URL = API_BASE_URL.replace(/\/api\/?$/, '');

// Bien vérifier qu'il y a "export class"
export class ApiTeamMemberRepository {
  async getAll() {
    const response = await fetch(`${API_BASE_URL}/team-members`);
    if (!response.ok) throw new Error('Erreur lors du chargement des membres');

    const data = await response.json();
    return data.map((item) => {
      const rawPath = item.photo_path || item.image || item.photo;

      let resolvedPhoto = item.photo_url || item.image_url || null;

      if (resolvedPhoto) {
        resolvedPhoto = resolvedPhoto.replace('/storage/public/', '/storage/');
      } else if (rawPath) {
        if (rawPath.startsWith('http')) {
          resolvedPhoto = rawPath.replace('/storage/public/', '/storage/');
        } else {
          const cleanedPath = rawPath.replace(/^public\//, '').replace(/^\//, '');
          resolvedPhoto = `${STORAGE_BASE_URL}/storage/${cleanedPath}`;
        }
      }

      return {
        id: item.id,
        name: item.name,
        role: item.role,
        bio: item.bio,
        image: resolvedPhoto,
        photoUrl: resolvedPhoto,
      };
    });
  }
}