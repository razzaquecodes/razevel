import type { Metadata } from 'next';
import ReturnsClient from './ReturnsClient';
export const metadata: Metadata = {
  title: 'Returns & Exchanges',
  description: 'RAZEVÉL returns and exchange policy. Every bespoke garment is guaranteed to fit — alterations included.',
};
export default function ReturnsPage() { return <ReturnsClient />; }
