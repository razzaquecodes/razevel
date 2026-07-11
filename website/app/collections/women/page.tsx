import type { Metadata } from 'next';
import WomensCollectionClient from './WomensCollectionClient';

export const metadata: Metadata = {
  title: "Women's Collection — Bridal Lehengas, Sarees, Anarkali & More",
  description: 'Handcrafted women\'s ethnic luxury wear by RAZEVÉL. Bridal lehengas, designer sarees, anarkalis, sharara, indo-western and bespoke women\'s couture.',
};

export default function WomensCollectionPage() {
  return <WomensCollectionClient />;
}
