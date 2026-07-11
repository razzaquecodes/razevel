export type JourneyStatus = 'completed' | 'active' | 'pending';

export interface CraftStage {
  id: string;
  title: string;
  subtitle: string;
  status: JourneyStatus;
  date: string; // E.g., 'June 28, 2026', 'In Progress', 'Upcoming'
  img?: string | null;
  artisanNotes?: string;
  story?: string;
}

export interface ArtisanProfile {
  name: string;
  experience: string;
  specialization: string;
  completedGarments: number;
  status: string;
  image?: string;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export type OrderStatus = 'active' | 'completed' | 'cancelled';

export interface Order {
  id: string; // e.g., 'RZV-8942'
  status: OrderStatus;
  createdAt: string;
  deliveryDate: string; // Expected or actual
  paymentStatus: 'Paid' | 'Pending' | 'Refunded';
  shippingMethod: string;
  totalAmount: number;
  
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    country: string;
  };
  
  measurementsUsed: string; // Profile name, e.g., 'Wedding Fit (Razzaque)'
  
  items: OrderItem[];
  
  artisan?: ArtisanProfile;
  journey: CraftStage[];
}
