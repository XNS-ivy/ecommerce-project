import React from 'react';
import { Material } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductGalleryProps {
  materials: Material[];
  isLoading?: boolean;
  error?: string | null;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  materials,
  isLoading = false,
  error = null,
}) => {
  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-200 h-80 rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  if (materials.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">Tidak ada produk yang tersedia</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {materials.map((material) => (
        <ProductCard key={material.id} material={material} />
      ))}
    </div>
  );
};