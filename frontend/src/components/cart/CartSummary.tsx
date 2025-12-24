import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartSummary as CartSummaryType } from '../../types';

interface CartSummaryProps {
  summary: CartSummaryType | null;
  itemCount: number;
  isLoading?:  boolean;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  summary,
  itemCount,
  isLoading = false,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Ringkasan Pesanan</h2>

      {isLoading ? (
        <div className="space-y-3 mb-6">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>
      ) : (
        <>
          <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
            <div className="flex justify-between text-sm">
              <p className="text-gray-600">Jumlah Item</p>
              <p className="font-semibold text-gray-800">{itemCount}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-600">Total Qty</p>
              <p className="font-semibold text-gray-800">
                {summary?.itemCount || 0}
              </p>
            </div>
          </div>

          <div className="space-y-2 mb-6 pb-6 border-b border-gray-200">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-semibold">
                Rp {(summary?.total || 0).toLocaleString('id-ID')}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Ongkir</p>
              <p className="font-semibold">Rp 0</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Pajak</p>
              <p className="font-semibold">Rp 0</p>
            </div>
          </div>

          <div className="flex justify-between text-lg font-bold text-blue-600 mb-6">
            <p>Total</p>
            <p>Rp {(summary?.total || 0).toLocaleString('id-ID')}</p>
          </div>
        </>
      )}

      <button
        onClick={() => navigate('/checkout')}
        disabled={itemCount === 0 || isLoading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50"
      >
        Lanjut ke Checkout
      </button>

      <button
        onClick={() => navigate('/products')}
        className="w-full mt-3 border border-gray-300 text-gray-700 py-2 rounded-lg hover: bg-gray-50 transition"
      >
        Lanjutkan Belanja
      </button>
    </div>
  );
};