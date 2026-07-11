import type { Metadata } from 'next';
import CheckoutClient from './CheckoutClient';

export const metadata: Metadata = {
  title: 'Checkout — RAZEVÉL',
  description: 'Secure checkout for your RAZEVÉL commission.',
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
