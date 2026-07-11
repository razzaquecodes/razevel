import TrackOrderClient from './TrackOrderClient';
import { Metadata } from 'next';
import { getSiteUrl } from '@/src/lib/getSiteUrl';

export const metadata: Metadata = {
  title: 'Track Your Commission | RAZEVÉL',
  description: 'Track the progress of your bespoke commission or luxury ready-to-wear order.',
  openGraph: {
    title: 'Track Your Commission | RAZEVÉL',
    description: 'Track the progress of your bespoke commission or luxury ready-to-wear order.',
    url: `${getSiteUrl()}/track-order`,
    siteName: 'RAZEVÉL',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TrackOrderPage() {
  return <TrackOrderClient />;
}
