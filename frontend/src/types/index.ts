// User & Auth

// Re-export semua types dari files terpisah
export * from './api';
export * from './user';
export * from './materials';
export * from './orders';

export interface User {
  id:  string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  createdAt: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password:  string;
  phone?: string;
}

export interface AuthResponse {
  token: string;
  user:  User;
  expiresIn: number;
}

// Materials
export interface Material {
  id: string;
  material_code: string;
  material_name: string;
  price: number;
  hazzard_class: string;
  hazzard_level: string;
  desc: string;
  stock:  number;
  image?: string;
  createdAt?:  string;
}

// Cart
export interface CartItem {
  id: string;
  material_id: string;
  quantity: number;
  material:  Material;
  subtotal: number;
}

export interface CartSummary {
  id: string;
  user_id: string;
  items: CartItem[];
  total:  number;
  itemCount: number;
  createdAt: string;
}

// Orders
export interface Order {
  id: string;
  user_id: string;
  status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  total: number;
  items: OrderItem[];
  delivery_type: 'SUPPLY' | 'BUY';
  delivery_address: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  material_id: string;
  quantity:  number;
  price: number;
  material: Material;
}

export interface CreateOrderPayload {
  delivery_type: 'SUPPLY' | 'BUY';
  delivery_address: string;
  notes?: string;
  items: {
    material_id: string;
    quantity: number;
  }[];
}

// API Response
export interface APIResponse<T> {
  success: boolean;
  message:  string;
  data?: T;
  error?: string;
}