import MeasurementGuideClient from './MeasurementGuideClient';
import { Metadata } from 'next';
import { getSiteUrl } from '@/src/lib/getSiteUrl';

export const metadata: Metadata = {
  title: 'Bespoke Measurement Guide | RAZEVÉL',
  description: 'Understand the RAZEVÉL 22-point measurement process for remote bespoke clients.',
  openGraph: {
    title: 'Bespoke Measurement Guide | RAZEVÉL',
    description: 'Understand the RAZEVÉL 22-point measurement process for remote bespoke clients.',
    url: `${getSiteUrl()}/measurements/guide`,
    siteName: 'RAZEVÉL',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MeasurementGuidePage() {
  return <MeasurementGuideClient />;
}
