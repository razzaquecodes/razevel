import PromiseClient from './PromiseClient';
import { Metadata } from 'next';
import { getSiteUrl } from '@/src/lib/getSiteUrl';

export const metadata: Metadata = {
  title: 'Our Client Promise | RAZEVÉL',
  description: 'The RAZEVÉL Craftsmanship Guarantee and our enduring promise to every client.',
  openGraph: {
    title: 'Our Client Promise | RAZEVÉL',
    description: 'The RAZEVÉL Craftsmanship Guarantee and our enduring promise to every client.',
    url: `${getSiteUrl()}/promise`,
    siteName: 'RAZEVÉL',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PromisePage() {
  return <PromiseClient />;
}
