import client from './client'
import { CartItem, CartSummary } from '../types'

export const cartAPI = {
  // Get current user's cart
  getCart: async (): Promise<CartSummary> => {
    const { data } = await client.get('/cart')
    return data.data || data
  },

  // Add item to cart
  addItem: async (materialId: string, quantity: number): Promise<CartItem> => {
    const { data } = await client.post('/cart/items', {
      material_id: materialId,
      quantity,
    })
    return data.data || data
  },

  // Update item quantity
  updateItem: async (itemId: string, quantity: number): Promise<CartItem> => {
    const { data } = await client.put(`/cart/items/${itemId}`, { quantity })
    return data.data || data
  },

  // Remove item from cart
  removeItem: async (itemId: string): Promise<void> => {
    await client.delete(`/cart/items/${itemId}`)
  },

  // Clear cart
  clearCart: async (): Promise<void> => {
    await client.delete('/cart')
  },
}