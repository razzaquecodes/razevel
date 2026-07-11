import { Metadata } from 'next';
import BespokeClient from './BespokeClient';

export const metadata: Metadata = {
  title: 'The Digital Atelier — Bespoke Commission Experience',
  description: 'Enter the private atelier of RAZEVÉL. Commission custom handcrafted masterworks crafted exclusively once, only for you.',
};

export default function BespokePage() {
  return <BespokeClient />;
}
