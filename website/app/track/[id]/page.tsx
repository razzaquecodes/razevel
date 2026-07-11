import type { Metadata } from 'next';
import TrackingClient from './TrackingClient';

export const metadata: Metadata = {
  title: 'Craft Journey — RAZEVÉL',
  description: 'Track the creation of your bespoke commission.',
};

export default function TrackPage({ params }: { params: { id: string } }) {
  return <TrackingClient id={params.id} />;
}
