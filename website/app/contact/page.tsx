import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Concierge & Atelier — RAZEVÉL',
  description: 'Connect with RAZEVÉL for bespoke commissions, atelier appointments, and client services.',
};

export default function ContactPage() {
  return <ContactClient />;
}
