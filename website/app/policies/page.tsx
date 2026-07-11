import PoliciesClient from './PoliciesClient';
import { Metadata } from 'next';
import { getSiteUrl } from '@/src/lib/getSiteUrl';

export const metadata: Metadata = {
  title: 'Store Policies | RAZEVÉL',
  description: 'A directory of all store policies governing bespoke commissions and ready-to-wear purchases at RAZEVÉL.',
  openGraph: {
    title: 'Store Policies | RAZEVÉL',
    description: 'A directory of all store policies governing bespoke commissions and ready-to-wear purchases at RAZEVÉL.',
    url: `${getSiteUrl()}/policies`,
    siteName: 'RAZEVÉL',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PoliciesPage() {
  return <PoliciesClient />;
}
