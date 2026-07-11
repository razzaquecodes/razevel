import type { Metadata } from 'next';
import ProfileClient from './ProfileClient';

export const metadata: Metadata = {
  title: 'My Profile — RAZEVÉL',
  description: 'Manage your commissions, measurements, and preferences.',
};

export default function ProfilePage() {
  return <ProfileClient />;
}
