import type { Metadata } from 'next';
import LoginClient from './LoginClient';

export const metadata: Metadata = {
  title: 'Welcome Back — RAZEVÉL',
  description: 'Sign in to your RAZEVÉL account to view your bespoke commissions, saved measurements, and wishlist.',
};

export default function LoginPage() {
  return <LoginClient />;
}
