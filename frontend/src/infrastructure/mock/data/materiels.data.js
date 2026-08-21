// src/infrastructure/mock/data/materiels.data.js

export const materialCategories = [
  { id: "ALL", label: "Tous" },
  { id: "VENTE", label: "Vente" },
  { id: "LOCATION", label: "Location" },
  { id: "LOCATION/VENTE", label: "Location / Vente" },
];

export const projectsData = [
  { 
    id: 1, 
    title: "Pelle Hydraulique 20T", 
    category: "LOCATION", 
    operationType: "LOCATION", 
    image: "/assets/pelle.webp" 
  },
  
 
  { 
    id: 4, 
    title: "Niveleuse Cat 140K", 
    category: "LOCATION", 
    operationType: "LOCATION", 
    image: "/assets/Niveleuse.webp" 
  },
  { 
    id: 5, 
    title: "Compacteur BTP", 
    category: "VENTE", 
    operationType: "VENTE", 
    image: "/assets/compacteur.webp" 
  },
  { 
    id: 6, 
    title: "Grue Mobile 50T", 
    category: "LOCATION/VENTE", 
    operationType: "LOCATION/VENTE", 
    image: "/assets/gru.webp" 
  },
];