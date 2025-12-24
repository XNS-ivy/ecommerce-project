import client from './client'
import { Order, CreateOrderPayload } from '../types'

export const ordersAPI = {
  // Create new order
  createOrder: async (payload: CreateOrderPayload): Promise<Order> => {
    const { data } = await client.post('/orders', payload)
    return data.data || data
  },

  // Get user's orders
  getUserOrders:  async (page?:  number): Promise<Order[]> => {
    const { data } = await client.get('/orders', { params: { page } })
    return data.data || data
  },

  // Get order detail
  getOrderById: async (orderId: string): Promise<Order> => {
    const { data } = await client.get(`/orders/${orderId}`)
    return data.data || data
  },

  // Update order status (admin)
  updateOrderStatus: async (orderId: string, status: string): Promise<Order> => {
    const { data } = await client.put(`/orders/${orderId}/status`, { status })
    return data.data || data
  },
}