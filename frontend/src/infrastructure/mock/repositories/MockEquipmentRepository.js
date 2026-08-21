export class MockEquipmentRepository {
  constructor() {
    this.equipments = [
      {
        id: 1,
        title: "Pelle Hydraulique 20T",
        slug: "pelle-hydraulique-20t",
        description: "Engin idéal pour vos travaux de terrassement lourds.",
        operationType: "LOCATION",
        price: 150000,
        priceUnit: "FCFA/jour",
        isAvailable: true,
        image: "/assets/equipments/pelle.jpg",
      },
      {
        id: 2,
        title: "Bulldozer D6",
        slug: "bulldozer-d6",
        description: "Puissant et robuste pour le nivellement de terrain.",
        operationType: "VENTE",
        price: 45000000,
        priceUnit: "FCFA",
        isAvailable: true,
        image: "/assets/equipments/bulldozer.jpg",
      },
    ];
  }

  async getAll() {
    return this.equipments;
  }

  async getById(id) {
    return this.equipments.find((item) => item.id === Number(id)) || null;
  }
}