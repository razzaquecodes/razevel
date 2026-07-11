import CookiesClient from './CookiesClient';
import { Metadata } from 'next';
import { getSiteUrl } from '@/src/lib/getSiteUrl';

export const metadata: Metadata = {
  title: 'Cookie Policy | RAZEVÉL',
  description: 'Understand how RAZEVÉL uses cookies to enhance your luxury digital experience.',
  openGraph: {
    title: 'Cookie Policy | RAZEVÉL',
    description: 'Understand how RAZEVÉL uses cookies to enhance your luxury digital experience.',
    url: `${getSiteUrl()}/cookies`,
    siteName: 'RAZEVÉL',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CookiesPage() {
  return <CookiesClient />;
}
