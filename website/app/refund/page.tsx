import RefundClient from './RefundClient';
import { Metadata } from 'next';
import { getSiteUrl } from '@/src/lib/getSiteUrl';

export const metadata: Metadata = {
  title: 'Refund Policy | RAZEVÉL',
  description: 'Learn about our refund policies for bespoke commissions and ready-to-commission luxury garments.',
  openGraph: {
    title: 'Refund Policy | RAZEVÉL',
    description: 'Learn about our refund policies for bespoke commissions and ready-to-commission luxury garments.',
    url: `${getSiteUrl()}/refund`,
    siteName: 'RAZEVÉL',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RefundPage() {
  return <RefundClient />;
}
