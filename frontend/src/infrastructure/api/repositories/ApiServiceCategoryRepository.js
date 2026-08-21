const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';
const STORAGE_BASE_URL = API_BASE_URL.replace(/\/api\/?$/, '');

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=800&auto=format&fit=crop';

export class ApiServiceCategoryRepository {
  async getAll() {
    const response = await fetch(`${API_BASE_URL}/services`);
    if (!response.ok) throw new Error('Erreur lors du chargement des catégories');

    const result = await response.json();
    const items = result.data || result;

    //  INSPECTION DANS LA CONSOLE : Ouvre la console F12 pour voir ce qui arrive
    console.log('--- DONNÉES BRUTES SERVICES DEPUIS LARAVEL ---', items);

    return items.map((item) => {
      const rawPath = item.image || item.image_path || item.cover;
      let resolvedImage = item.image_url || null;

      if (resolvedImage) {
        resolvedImage = resolvedImage.replace('/storage/public/', '/storage/');
      } else if (rawPath) {
        if (rawPath.startsWith('http://') || rawPath.startsWith('https://')) {
          resolvedImage = rawPath.replace('/storage/public/', '/storage/');
        } else {
          const cleanedPath = rawPath.replace(/^public\//, '').replace(/^\//, '');
          resolvedImage = `${STORAGE_BASE_URL}/storage/${cleanedPath}`;
        }
      }

      const finalImage = resolvedImage || DEFAULT_IMAGE;

      return {
        id: item.id,
        title: item.title,
        slug: item.slug,
        description: item.description,
        image: finalImage,
        imageUrl: finalImage,
        image_url: finalImage,
      };
    });
  }
}