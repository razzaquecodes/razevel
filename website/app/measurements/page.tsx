import type { Metadata } from 'next';
import MeasurementsClient from './MeasurementsClient';

export const metadata: Metadata = {
  title: 'Bespoke Measurements — RAZEVÉL',
  description: 'Guided bespoke measurement experience for your luxury commission.',
};

export default function MeasurementsPage() {
  return <MeasurementsClient />;
}
