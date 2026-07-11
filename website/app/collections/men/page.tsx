import type { Metadata } from 'next';
import MensCollectionClient from './MensCollectionClient';

export const metadata: Metadata = {
  title: "Men's Collection — Sherwanis, Suits, Bandhgala & More",
  description: 'Handcrafted men\'s ethnic and formal wear by RAZEVÉL. Sherwanis, wedding suits, bandhgalas, jodhpuris, kurta sets and bespoke Indian menswear.',
};

export default function MensCollectionPage() {
  return <MensCollectionClient />;
}
