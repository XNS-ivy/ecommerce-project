// Generic API Response Wrapper
export interface APIResponse<T = any> {
  success: boolean;
  message:  string;
  data?: T;
  error?: string;
}

// Pagination
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}