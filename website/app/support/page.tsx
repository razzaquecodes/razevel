import type { Metadata } from 'next';
import SupportClient from './SupportClient';
export const metadata: Metadata = {
  title: 'Support & FAQ',
  description: 'Get answers to your questions about bespoke orders, measurements, shipping and care from the RAZEVÉL atelier.',
};
export default function SupportPage() { return <SupportClient />; }
