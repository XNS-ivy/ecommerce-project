import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
  isUpdating: boolean;
  onUpdateQuantity: (newQuantity: number) => void;
  onRemove: () => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  isUpdating,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition last:border-b-0">
      <div className="flex gap-4">
        {/* Product Info */}
        <div className="flex-1">
          <h3 className="font-bold text-gray-800 mb-1">
            {item.material. material_name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            Kode:  {item.material.material_code}
          </p>
          <div className="flex gap-2 mb-2">
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
              {item. material.hazzard_class}
            </span>
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
              Level: {item.material.hazzard_level}
            </span>
          </div>
          <p className="text-lg font-bold text-blue-600">
            Rp {item.material.price.toLocaleString('id-ID')} / unit
          </p>
        </div>

        {/* Quantity & Actions */}
        <div className="flex flex-col items-end gap-3">
          {/* Quantity Selector */}
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => onUpdateQuantity(item. quantity - 1)}
              disabled={isUpdating}
              className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
            >
              <Minus className="w-4 h-4" />
            </button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => onUpdateQuantity(parseInt(e.target. value) || 1)}
              className="w-12 text-center border-l border-r border-gray-300 py-1 text-sm"
              min="1"
              disabled={isUpdating}
            />
            <button
              onClick={() => onUpdateQuantity(item.quantity + 1)}
              disabled={isUpdating}
              className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Subtotal */}
          <div className="text-right">
            <p className="text-xs text-gray-600 mb-1">Subtotal</p>
            <p className="text-lg font-bold text-gray-800">
              Rp {item. subtotal.toLocaleString('id-ID')}
            </p>
          </div>

          {/* Delete Button */}
          <button
            onClick={onRemove}
            disabled={isUpdating}
            className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition disabled:opacity-50"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};