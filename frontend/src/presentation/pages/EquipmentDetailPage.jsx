import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEquipmentDetail } from '../hooks/useEquipmentDetail';

export function EquipmentDetailPage() {
  const { id } = useParams();
  const { data: equipment, isLoading, isError, error } = useEquipmentDetail(id);

  if (isLoading) return <div className="py-20 text-center">Chargement de l'équipement...</div>;
  if (isError || !equipment) return <div className="py-20 text-center text-red-500">Erreur : {error?.message || 'Matériel introuvable'}</div>;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/equipments" className="text-amber-600 hover:underline mb-6 inline-block font-medium">
          ← Retour au catalogue des matériels
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          {/* Visuel du matériel */}
          <div className="w-full h-[380px] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={equipment.image}
              alt={equipment.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Fiche d'information */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded">
                  {equipment.operationType}
                </span>
                <span className={`text-xs font-semibold px-3 py-1 rounded ${
                  equipment.isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {equipment.isAvailable ? 'Disponible' : 'Indisponible'}
                </span>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-4">{equipment.title}</h1>

              {equipment.price && (
                <div className="text-2xl font-extrabold text-amber-600 mb-6">
                  {Number(equipment.price).toLocaleString()} {equipment.priceUnit || 'FCFA'}
                </div>
              )}

              <p className="text-gray-600 leading-relaxed mb-6">{equipment.description}</p>

              {equipment.specifications && (
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 uppercase mb-2">Spécifications techniques</h3>
                  <p className="text-sm text-gray-700 bg-gray-50 p-4 rounded-md border border-gray-200 whitespace-pre-line">
                    {equipment.specifications}
                  </p>
                </div>
              )}
            </div>

            <Link
              to={`/quote?equipment=${equipment.id}`}
              className="w-full block text-center bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-md transition-colors"
            >
              Réserver / Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}