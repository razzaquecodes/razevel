import type { Metadata } from 'next';
import ProductDetailClient from './ProductDetailClient';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  return {
    title: `Product ${params.id}`,
    description: 'Bespoke luxury piece from RAZEVÉL.',
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetailClient id={params.id} />;
}
