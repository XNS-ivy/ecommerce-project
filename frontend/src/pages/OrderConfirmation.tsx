import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CheckCircle, Package, Calendar, MapPin } from 'lucide-react'
import { Order } from '../types'
import { ordersAPI } from '../api/orders.api'
import { LoadingSpinner } from '../components/common/LoadingSpinner'

export const OrderConfirmation: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>()
  const navigate = useNavigate()
  const [order, setOrder] = useState<Order | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) return
      try {
        const orderData = await ordersAPI.getOrderById(orderId)
        setOrder(orderData)
      } catch (err) {
        setError('Pesanan tidak ditemukan')
      } finally {
        setIsLoading(false)
      }
    }

    fetchOrder()
  }, [orderId])

  if (isLoading) return <LoadingSpinner />

  if (error || !order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white rounded-lg shadow-md p-8 max-w-md w-full">
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    const colors: { [key: string]:  string } = {
      PENDING: 'bg-yellow-100 text-yellow-700',
      CONFIRMED: 'bg-blue-100 text-blue-700',
      SHIPPED: 'bg-purple-100 text-purple-700',
      DELIVERED: 'bg-green-100 text-green-700',
      CANCELLED: 'bg-red-100 text-red-700',
    }
    return colors[status] || 'bg-gray-100 text-gray-700'
  }

  const getStatusLabel = (status: string) => {
    const labels: { [key: string]: string } = {
      PENDING: 'Menunggu Konfirmasi',
      CONFIRMED:  'Dikonfirmasi',
      SHIPPED: 'Dikirim',
      DELIVERED: 'Terkirim',
      CANCELLED:  'Dibatalkan',
    }
    return labels[status] || status
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-20 h-20 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Pesanan Berhasil! </h1>
          <p className="text-gray-600 text-lg">
            Terima kasih telah berbelanja.  Pesanan Anda telah diterima.
          </p>
        </div>

        {/* Order Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          {/* Order Number & Status */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Nomor Pesanan</p>
                <p className="text-2xl font-bold text-gray-800">{order. id}</p>
              </div>
              <span className={`px-4 py-2 rounded-lg font-semibold text-sm ${getStatusColor(order.status)}`}>
                {getStatusLabel(order.status)}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              <Calendar className="w-4 h-4 inline mr-2" />
              {new Date(order.createdAt).toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute:  '2-digit',
              })}
            </p>
          </div>

          {/* Delivery Info */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Alamat Pengiriman
            </h3>
            <p className="text-gray-700 leading-relaxed">{order.delivery_address}</p>
            <p className="text-sm text-gray-600 mt-2">
              Tipe:  {order.delivery_type === 'BUY' ? 'Pembelian (BUY)' : 'Pengiriman Stok (SUPPLY)'}
            </p>
            {order.notes && (
              <p className="text-sm text-gray-600 mt-2">
                <strong>Catatan:</strong> {order.notes}
              </p>
            )}
          </div>

          {/* Order Items */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <Package className="w-5 h-5 mr-2" />
              Detail Pesanan
            </h3>
            <div className="space-y-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{item.material. material_name}</p>
                    <p className="text-sm text-gray-600">Kode: {item.material.material_code}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">Qty: {item.quantity}</p>
                    <p className="font-semibold text-gray-800">
                      Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <p className="text-gray-600">Subtotal</p>
              <p className="text-gray-800">Rp {order.total.toLocaleString('id-ID')}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-600">Ongkir</p>
              <p className="text-gray-800">Rp 0</p>
            </div>
            <div className="flex justify-between text-lg font-bold text-blue-600 pt-4 border-t border-gray-200">
              <p>Total Pembayaran</p>
              <p>Rp {order. total.toLocaleString('id-ID')}</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-blue-900 mb-4">Langkah Selanjutnya</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
            <li>Kami akan mengkonfirmasi pesanan Anda dalam waktu 24 jam</li>
            <li>Produk akan disiapkan dan dikemas dengan aman</li>
            <li>Anda akan menerima notifikasi ketika pesanan dikirim</li>
            <li>Lacak pengiriman Anda melalui aplikasi mobile atau website</li>
          </ol>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => navigate(`/orders/${order.id}`)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Lihat Detail Pesanan
          </button>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold"
          >
            Lanjut Belanja
          </button>
        </div>
      </div>
    </div>
  )
}