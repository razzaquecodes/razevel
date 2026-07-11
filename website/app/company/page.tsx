import type { Metadata } from 'next';
import CompanyClient from './CompanyClient';
export const metadata: Metadata = {
  title: 'Company Heritage',
  description: 'The story of RAZEVÉL — born from a master tailor\'s hands in Patna, raised to become India\'s premier luxury ethnic wear house.',
};
export default function CompanyPage() { return <CompanyClient />; }
