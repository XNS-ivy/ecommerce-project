// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// Hazmat Classes
export const HAZARD_CLASSES = [
  'Explosive',
  'Flammable Liquid',
  'Corrosive',
  'Poison',
  'Radioactive',
  'Oxidizer',
];

// Delivery Types
export const DELIVERY_TYPES = {
  BUY: { label: 'Pembelian (BUY)', value: 'BUY' },
  SUPPLY: { label: 'Pengiriman Stok (SUPPLY)', value: 'SUPPLY' },
};

// Order Status
export const ORDER_STATUS = {
  PENDING:  { label: 'Menunggu Konfirmasi', color: 'yellow' },
  CONFIRMED: { label: 'Dikonfirmasi', color: 'blue' },
  SHIPPED: { label: 'Dikirim', color: 'purple' },
  DELIVERED: { label: 'Terkirim', color: 'green' },
  CANCELLED: { label: 'Dibatalkan', color: 'red' },
};

// Pagination
export const DEFAULT_PAGE_SIZE = 12;

// Token Key
export const TOKEN_KEY = 'auth_token';
export const USER_KEY = 'user_data';