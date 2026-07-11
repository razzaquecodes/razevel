import type { Metadata } from 'next';
import JournalClient from './JournalClient';
export const metadata: Metadata = {
  title: 'The Journal',
  description: 'Stories of craft, culture and creation from the RAZEVÉL atelier. Editorial essays on Indian luxury fashion.',
};
export default function JournalPage() { return <JournalClient />; }
