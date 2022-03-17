export interface ProductInfo {
  createdAt: string;
  name: string;
  avatar: string;
  description: string;
  rating?: {
    rate: number;
    count: number;
  };
  price: number | string;
  category: string;
  id: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}
