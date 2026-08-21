/**
 * Entité métier représentant un Service proposé par l'entreprise.
 * Aucune dépendance externe (React, MUI, etc.) — pur JS.
 */
export class Service {
  constructor({ id, title, description, icon, category, shortDescription }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.shortDescription = shortDescription;
    this.icon = icon;           // nom de l'icône (ex: 'Foundation', 'ElectricBolt')
    this.category = category;   // ex: 'gros-oeuvre', 'second-oeuvre'
  }

  /**
   * Factory method : construit une instance Service à partir d'un objet brut
   * (utile pour transformer les données mock ou la réponse API en entité).
   */
  static create(data) {
    return new Service({
      id: data.id,
      title: data.title,
      description: data.description,
      shortDescription: data.shortDescription,
      icon: data.icon,
      category: data.category,
    });
  }
}