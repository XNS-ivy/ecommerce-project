import { Material } from './materials';

export interface CartItem {
  id: string;
  material_id: string;
  quantity:  number;
  material: Material;
  subtotal: number;
}

export interface CartSummary {
  id:  string;
  user_id: string;
  items: CartItem[];
  total:  number;
  itemCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  material_id: string;
  quantity: number;
  price: number;
  material: Material;
}

export interface Order {
  id: string;
  user_id: string;
  status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  total: number;
  items: OrderItem[];
  delivery_type:  'SUPPLY' | 'BUY';
  delivery_address: string;
  notes?:  string;
  createdAt:  string;
  updatedAt:  string;
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