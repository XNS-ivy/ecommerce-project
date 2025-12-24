export interface Material {
  id: string;
  material_code: string;
  material_name: string;
  price: number;
  hazzard_class: string;
  hazzard_level: string;
  desc: string;
  stock: number;
  image?: string;
  createdAt?:  string;
  updatedAt?:  string;
}

export interface MaterialFilter {
  hazard_class?:  string;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: 'price' | 'name' | 'latest';
  sortOrder?: 'asc' | 'desc';
}