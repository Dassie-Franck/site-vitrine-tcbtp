const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';
const STORAGE_BASE_URL = API_BASE_URL.replace(/\/api\/?$/, '');

export class ApiEquipmentRepository {
  async getAll() {
    const response = await fetch(`${API_BASE_URL}/equipments`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const result = await response.json();
    const data = result.data || result;

    return data.map((item) => this.mapToDomain(item));
  }

  async getById(id) {
    const response = await fetch(`${API_BASE_URL}/equipments/${id}`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const result = await response.json();
    const data = result.data || result;

    return this.mapToDomain(data);
  }

 mapToDomain(item) {
  let resolvedImage = '/assets/placeholder.jpg';

  if (item.images && item.images.length > 0) {
    const path = item.images[0].path || item.images[0].image_path;
    if (path) {
      resolvedImage = path.startsWith('http')
        ? path
        : `${STORAGE_BASE_URL}/storage/${path.replace(/^public\//, '').replace(/^\//, '')}`;
    }
  }

  // Normalisation du type d'opération pour correspondre aux boutons de filtre
  const rawOperation = (item.operation_type || '').toLowerCase();
  let normalizedOperation = 'LOCATION';

  if (rawOperation === 'vente') {
    normalizedOperation = 'VENTE';
  } else if (rawOperation === 'location') {
    normalizedOperation = 'LOCATION';
  } else if (
    rawOperation.includes('vente_location') ||
    rawOperation.includes('location_vente') ||
    rawOperation.includes('location/vente')
  ) {
    normalizedOperation = 'LOCATION/VENTE'; // Ou 'LOCATION_VENTE' selon la valeur dans ton composant de filtre
  }

  return {
    id: item.id,
    title: item.name,
    slug: item.slug,
    description: item.description,
    specifications: item.specifications,
    operationType: normalizedOperation,
    price: item.price,
    priceUnit: item.price_unit,
    isAvailable: item.is_available,
    image: resolvedImage,
  };
}
}