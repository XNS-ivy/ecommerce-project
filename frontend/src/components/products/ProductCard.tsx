import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, ShoppingCart } from 'lucide-react';
import { Material } from '../../types';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

interface ProductCardProps {
  material: Material;
}

export const ProductCard: React. FC<ProductCardProps> = ({ material }) => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { isAuthenticated } = useAuth();
  const [isAdding, setIsAdding] = React.useState(false);

  const handleQuickAdd = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (! isAuthenticated) {
      alert('Silakan login terlebih dahulu');
      return;
    }

    setIsAdding(true);
    try {
      await addItem(material.id, 1);
      alert(`${material.material_name} ditambahkan ke keranjang!`);
    } catch (error) {
      alert('Gagal menambahkan ke keranjang');
    } finally {
      setIsAdding(false);
    }
  };

  const getHazardBgColor = (hazardClass: string) => {
    const colors:  { [key: string]: string } = {
      'Explosive': 'bg-red-100 text-red-600',
      'Flammable Liquid': 'bg-orange-100 text-orange-600',
      'Corrosive': 'bg-yellow-100 text-yellow-700',
      'Poison': 'bg-purple-100 text-purple-600',
      'Radioactive': 'bg-green-100 text-green-600',
      'Oxidizer': 'bg-blue-100 text-blue-600',
    };
    return colors[hazardClass] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div
      onClick={() => navigate(`/products/${material.id}`)}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden h-full flex flex-col"
    >
      {/* Product Image */}
      <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
        <Package className="w-20 h-20 text-white opacity-30" />
        <div className="absolute top-2 right-2">
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${getHazardBgColor(material.hazzard_class)}`}>
            {material.hazzard_class}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-gray-800 mb-1 line-clamp-2 text-sm">
          {material.material_name}
        </h3>
        
        <p className="text-xs text-gray-600 mb-2">
          Kode:  {material.material_code}
        </p>

        <div className="mb-3">
          <span className={`inline-block text-xs font-semibold px-2 py-1 rounded ${getHazardBgColor(material.hazzard_class)}`}>
            Level: {material.hazzard_level}
          </span>
        </div>

        <p className="text-lg font-bold text-blue-600 mb-2">
          Rp {material.price. toLocaleString('id-ID')}
        </p>

        <div className="mb-3">
          <p className={`text-xs font-semibold ${material.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {material.stock > 0 ? `${material.stock} tersedia` : 'Habis'}
          </p>
        </div>

        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => navigate(`/products/${material.id}`)}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
          >
            Detail
          </button>
          <button
            onClick={handleQuickAdd}
            disabled={isAdding || material.stock === 0}
            className="px-3 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition disabled:opacity-50"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};