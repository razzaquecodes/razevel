import CareClient from './CareClient';
import { Metadata } from 'next';
import { getSiteUrl } from '@/src/lib/getSiteUrl';

export const metadata: Metadata = {
  title: 'Garment & Fabric Care | RAZEVÉL',
  description: 'An essential guide to preserving the integrity of RAZEVÉL luxury ethnic wear, fine silks, and Zardozi embroidery.',
  openGraph: {
    title: 'Garment & Fabric Care | RAZEVÉL',
    description: 'An essential guide to preserving the integrity of RAZEVÉL luxury ethnic wear, fine silks, and Zardozi embroidery.',
    url: `${getSiteUrl()}/care`,
    siteName: 'RAZEVÉL',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CarePage() {
  return <CareClient />;
}
