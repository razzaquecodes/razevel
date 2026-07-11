import type { Metadata } from 'next';
import RegisterClient from './RegisterClient';

export const metadata: Metadata = {
  title: 'Begin Your Journey — RAZEVÉL',
  description: 'Create your RAZEVÉL account to commission bespoke orders, track your creations, and save body profiles.',
};

export default function RegisterPage() {
  return <RegisterClient />;
}
