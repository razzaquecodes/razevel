import type { Metadata } from 'next';
import ForgotPasswordClient from './ForgotPasswordClient';

export const metadata: Metadata = {
  title: 'Recover Account — RAZEVÉL',
  description: 'Reset your password to regain access to your RAZEVÉL account.',
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordClient />;
}
