import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About — The Story of RAZEVÉL',
  description: 'RAZEVÉL was born from my father\'s hands. The story of how a master tailor\'s craft became India\'s most trusted handcrafted luxury ethnic wear house.',
};

export default function AboutPage() {
  return <AboutClient />;
}
