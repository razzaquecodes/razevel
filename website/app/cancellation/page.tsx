import CancellationClient from './CancellationClient';
import { Metadata } from 'next';
import { getSiteUrl } from '@/src/lib/getSiteUrl';

export const metadata: Metadata = {
  title: 'Cancellation Policy | RAZEVÉL',
  description: 'Understand the cancellation window and process for bespoke and ready-to-commission orders at RAZEVÉL.',
  openGraph: {
    title: 'Cancellation Policy | RAZEVÉL',
    description: 'Understand the cancellation window and process for bespoke and ready-to-commission orders at RAZEVÉL.',
    url: `${getSiteUrl()}/cancellation`,
    siteName: 'RAZEVÉL',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CancellationPage() {
  return <CancellationClient />;
}
