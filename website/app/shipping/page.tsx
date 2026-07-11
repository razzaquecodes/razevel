import type { Metadata } from 'next';
import ShippingClient from './ShippingClient';
export const metadata: Metadata = {
  title: 'Worldwide Shipping',
  description: 'RAZEVÉL ships to every corner of India and internationally. Luxury packaging, full insurance, real-time tracking.',
};
export default function ShippingPage() { return <ShippingClient />; }
