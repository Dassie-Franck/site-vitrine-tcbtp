export class Project {
  constructor({ id, title, description, category, client, images, completedAt }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;       // ex: 'gros-oeuvre', 'renovation', 'industriel'
    this.client = client;
    this.images = images || [];     // tableau d'URLs
    this.completedAt = completedAt; // date de livraison
  }

  static create(data) {
    return new Project({
      id: data.id,
      title: data.title,
      description: data.description,
      category: data.category,
      client: data.client,
      images: data.images,
      completedAt: data.completedAt,
    });
  }

  get coverImage() {
    return this.images[0] || null;
  }
}