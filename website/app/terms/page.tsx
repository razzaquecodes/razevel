import type { Metadata } from 'next';
import TermsClient from './TermsClient';
export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing the use of RAZEVÉL services and the purchase of garments.',
};
export default function TermsPage() { return <TermsClient />; }
