import client from './client'
import { Material, APIResponse } from '../types'

export const materialsAPI = {
  // Get all materials with optional filters
  getAll: async (filters?: {
    hazard_class?: string
    search?: string
    page?: number
    limit?: number
  }): Promise<Material[]> => {
    const { data } = await client.get('/materials', { params: filters })
    return data. data || data
  },

  // Get single material by ID
  getById: async (id: string): Promise<Material> => {
    const { data } = await client. get(`/materials/${id}`)
    return data.data || data
  },

  // Get materials by hazard class
  getByHazardClass: async (hazardClass: string): Promise<Material[]> => {
    const { data } = await client.get('/materials', { 
      params: { hazard_class: hazardClass } 
    })
    return data.data || data
  },

  // Search materials
  search: async (query: string): Promise<Material[]> => {
    const { data } = await client.get('/materials/search', { 
      params: { q: query } 
    })
    return data.data || data
  },
}