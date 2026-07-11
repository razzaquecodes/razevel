'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/context/AuthContext';
import { useCart } from '@/src/context/CartContext';
import { MOCK_PRODUCTS } from '@/src/lib/mockData';
import ProductCard from '@/src/components/ui/ProductCard';
import { Button } from '@/src/components/ui/Button';
import { useToast } from '@/src/components/ui/Toast';
import { useMeasurements, useAddresses, useOrders } from '@/src/hooks/useSupabase';
import { createClient } from '@/src/lib/supabase/client';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ProfileClient() {
  const router = useRouter();
  const { user, isInitialized, logout, refreshUser } = useAuth();
  const { state: cartState, dispatch: cartDispatch } = useCart();
  const { showToast } = useToast();
  const { measurements, isLoading: loadingMeasurements } = useMeasurements();
  const { addresses, isLoading: loadingAddresses } = useAddresses();
  const { orders, isLoading: loadingOrders } = useOrders();
  
  const [orderSubTab, setOrderSubTab] = useState<'current' | 'past' | 'cancelled'>('current');

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
  });
  const [saving, setSaving] = useState(false);

  const startEditing = () => {
    setEditForm({
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      phone: user?.phone || '',
      gender: user?.gender || '',
      dateOfBirth: user?.dateOfBirth || '',
    });
    setIsEditing(true);
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const supabase = createClient();
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user!.id,
          email: user!.email,
          first_name: editForm.firstName,
          last_name: editForm.lastName,
          phone: editForm.phone,
          gender: editForm.gender || null,
          date_of_birth: editForm.dateOfBirth || null,
          profile_photo: user?.profilePhoto || null,
        });

      if (error) throw error;

      await refreshUser();
      showToast('Profile updated successfully.', 'success');
      setIsEditing(false);
    } catch (err: unknown) {
      console.error('Failed to update profile:', err);
      showToast(err instanceof Error ? err.message : 'Failed to update profile.', 'error');
    } finally {
      setSaving(false);
    }
  };
  
  const tabs = [
    { id: 'profile', label: 'My Account' },
    { id: 'orders', label: 'Commissions' },
    { id: 'measurements', label: 'Body Profiles' },
    { id: 'appointments', label: 'Appointments' },
    { id: 'wishlist', label: `Wishlist (${cartState.wishlist.length})` },
    { id: 'addresses', label: 'Addresses' },
    { id: 'payments', label: 'Payment Methods' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'security', label: 'Security' },
    { id: 'settings', label: 'Settings' },
  ] as const;

  type TabId = typeof tabs[number]['id'];
  const [activeTab, setActiveTab] = useState<TabId>('profile');

  useEffect(() => {
    // Client-side initialization logic if needed, but routing is handled by middleware
  }, [isInitialized]);

  if (!isInitialized || !user) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--soft-ivory)' }}>
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} style={{ width: 40, height: 40, border: '2px solid var(--color-gold-muted)', borderTopColor: 'var(--color-gold)', borderRadius: '50%' }} />
      </main>
    );
  }

  const wishlistedProducts = cartState.wishlist.map(id => MOCK_PRODUCTS.find(p => p.id === id)).filter(Boolean) as typeof MOCK_PRODUCTS;

  return (
    <main style={{ background: 'var(--soft-ivory)', minHeight: '100vh', paddingTop: '120px', position: 'relative' }}>
      
      {/* 1. Full Screen Background Image Overlay */}
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
        <Image
          src="/images/hero-tailor.png"
          alt="Atelier sketch background"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'right center', opacity: 0.12 }}
        />
      </div>

      {/* Paper texture overlay */}
      <div className="grain" style={{ opacity: 0.04, pointerEvents: 'none', zIndex: 5 }} />

      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '2rem var(--gutter) 6rem', position: 'relative', zIndex: 10 }}>
        
        {/* Luxury Header / Membership Card */}
        <section style={{ marginBottom: '4rem' }}>
          <div 
            style={{ 
              position: 'relative', 
              background: 'var(--color-black)', 
              color: 'var(--color-white)', 
              padding: '3.5rem 3rem', 
              overflow: 'hidden', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-end', 
              minHeight: '240px', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              border: '1px solid var(--color-gold-muted)'
            }}
          >
            {/* Subtle background abstract line */}
            <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '40%', opacity: 0.08, background: 'radial-gradient(circle at top right, var(--color-gold), transparent 75%)' }} />
            
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {user.profilePhoto && (
                <div style={{ position: 'relative', width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-gold)', background: 'rgba(255,255,255,0.05)' }}>
                  <Image src={user.profilePhoto} alt={user.firstName} fill style={{ objectFit: 'cover' }} />
                </div>
              )}
              <div>
                <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--color-gold)', marginBottom: '1.25rem', fontWeight: 600 }}>
                  {user.membershipLevel} MEMBER
                </span>
                <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', margin: '0 0 0.5rem', fontWeight: 400, color: 'var(--color-white)' }}>
                  Welcome, {user.firstName}
                </h1>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                  {user.email}
                </p>
              </div>
            </div>
            
            <div style={{ position: 'relative', zIndex: 10, textAlign: 'right' }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginBottom: '0.25rem' }}>
                Atelier Client Since
              </span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--color-gold)' }}>
                {new Date(user.memberSince).getFullYear()}
              </span>
            </div>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 'clamp(3rem, 6vw, 6rem)' }} className="profile-grid">
          
          {/* Sidebar Navigation */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabId)}
                style={{
                  textAlign: 'left', background: 'none', border: 'none', padding: '0.85rem 0',
                  fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  color: activeTab === tab.id ? 'var(--color-black)' : 'var(--color-grey)',
                  fontWeight: activeTab === tab.id ? 600 : 300,
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="profile-tab-indicator" style={{ position: 'absolute', left: '-1rem', top: '50%', transform: 'translateY(-50%)', width: '2px', height: '14px', background: 'var(--color-gold)' }} />
                )}
              </button>
            ))}
            
            <div style={{ margin: '2rem 0 1.5rem', height: '1px', background: 'rgba(8,8,8,0.08)' }} />
            
            <button 
              onClick={() => logout()}
              style={{ textAlign: 'left', background: 'none', border: 'none', padding: '0.75rem 0', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', color: '#B22222', fontWeight: 500 }}
            >
              Sign Out
            </button>
          </aside>

          {/* Content Area */}
          <div style={{ minHeight: '600px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: E }}
              >
                
                {/* 1. Account Profile Tab */}
                {activeTab === 'profile' && (
                  <div className="tab-card">
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 400, marginBottom: '2.5rem', borderBottom: '1px solid rgba(8,8,8,0.08)', paddingBottom: '1rem' }}>
                      {isEditing ? 'Edit Account Details' : 'Personal Information'}
                    </h2>
                    {isEditing ? (
                      <form onSubmit={handleSaveProfile} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '500px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                          <div>
                            <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 500 }}>First Name</label>
                            <input 
                              type="text" 
                              required
                              value={editForm.firstName}
                              onChange={(e) => setEditForm({ ...editForm, firstName: e.target.value })}
                              style={{ width: '100%', padding: '0.85rem', border: '1px solid rgba(8,8,8,0.12)', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', outline: 'none' }}
                            />
                          </div>
                          <div>
                            <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 500 }}>Last Name</label>
                            <input 
                              type="text" 
                              required
                              value={editForm.lastName}
                              onChange={(e) => setEditForm({ ...editForm, lastName: e.target.value })}
                              style={{ width: '100%', padding: '0.85rem', border: '1px solid rgba(8,8,8,0.12)', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', outline: 'none' }}
                            />
                          </div>
                        </div>
                        <div>
                          <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 500 }}>Phone Number</label>
                          <input 
                            type="tel" 
                            value={editForm.phone}
                            onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                            placeholder="Enter mobile number"
                            style={{ width: '100%', padding: '0.85rem', border: '1px solid rgba(8,8,8,0.12)', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', outline: 'none' }}
                          />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                          <div>
                            <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 500 }}>Gender</label>
                            <select 
                              value={editForm.gender}
                              onChange={(e) => setEditForm({ ...editForm, gender: e.target.value })}
                              style={{ width: '100%', padding: '0.85rem', border: '1px solid rgba(8,8,8,0.12)', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', outline: 'none', color: 'var(--color-black)' }}
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div>
                            <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 500 }}>Date of Birth</label>
                            <input 
                              type="date" 
                              value={editForm.dateOfBirth}
                              onChange={(e) => setEditForm({ ...editForm, dateOfBirth: e.target.value })}
                              style={{ width: '100%', padding: '0.8rem', border: '1px solid rgba(8,8,8,0.12)', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', outline: 'none', color: 'var(--color-black)' }}
                            />
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                          <Button type="submit" disabled={saving}>
                            {saving ? 'Saving...' : 'Save Changes'}
                          </Button>
                          <Button variant="outline" type="button" onClick={() => setIsEditing(false)} disabled={saving}>
                            Cancel
                          </Button>
                        </div>
                      </form>
                    ) : (
                      <>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                          <div className="info-block">
                            <span className="t-label">First Name</span>
                            <p>{user.firstName}</p>
                          </div>
                          <div className="info-block">
                            <span className="t-label">Last Name</span>
                            <p>{user.lastName}</p>
                          </div>
                          <div className="info-block">
                            <span className="t-label">Email Address</span>
                            <p>{user.email}</p>
                          </div>
                          <div className="info-block">
                            <span className="t-label">Phone Number</span>
                            <p>{user.phone || 'Not provided'}</p>
                          </div>
                          <div className="info-block">
                            <span className="t-label">Gender</span>
                            <p>{user.gender || 'Not specified'}</p>
                          </div>
                          <div className="info-block">
                            <span className="t-label">Date of Birth</span>
                            <p>{user.dateOfBirth || 'Not specified'}</p>
                          </div>
                        </div>
                        <Button variant="outline" style={{ marginTop: '3rem' }} onClick={startEditing}>
                          Edit Account Details
                        </Button>
                      </>
                    )}
                  </div>
                )}

                {/* 2. Addresses Tab */}
                {activeTab === 'addresses' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid rgba(8,8,8,0.08)', paddingBottom: '1rem' }}>
                      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 400, margin: 0 }}>Saved Addresses</h2>
                      <Button variant="outline">Add New Address</Button>
                    </div>
                    
                    {loadingAddresses ? (
                      <p className="t-body">Loading addresses...</p>
                    ) : addresses.length === 0 ? (
                      <p className="t-body">No addresses saved yet.</p>
                    ) : (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                        {addresses.map((addr) => (
                          <div key={addr.id} style={{ border: `1px solid ${addr.is_default ? 'var(--color-black)' : 'rgba(8,8,8,0.08)'}`, padding: '2.5rem', position: 'relative', background: '#FCFAF6' }}>
                            {addr.is_default && (
                              <span style={{ position: 'absolute', top: '-10px', left: '1.5rem', background: 'var(--soft-ivory)', padding: '0 0.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold)', fontWeight: 600 }}>
                                Default Address
                              </span>
                            )}
                            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--color-black)', margin: 0 }}>
                              <strong>{addr.full_name}</strong><br />
                              {addr.address_line1}<br />
                              {addr.address_line2 && <>{addr.address_line2}<br /></>}
                              {addr.city}, {addr.state} {addr.postal_code}<br />
                              {addr.country}<br />
                              {addr.phone}
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                              <button style={{ background: 'none', border: 'none', textDecoration: 'underline', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', color: 'var(--color-grey)' }}>Edit</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 3. Notifications Tab */}
                {activeTab === 'notifications' && (
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 400, marginBottom: '2.5rem', borderBottom: '1px solid rgba(8,8,8,0.08)', paddingBottom: '1rem' }}>Notifications Feed</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div style={{ padding: '2rem', borderLeft: '3px solid var(--color-gold)', background: '#FCFAF6' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', alignItems: 'center' }}>
                          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold)', fontWeight: 600 }}>Order Update</span>
                          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'var(--color-grey)' }}>2 hours ago</span>
                        </div>
                        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400, margin: '0 0 0.5rem' }}>Your bespoke Sherwani has entered production.</h4>
                        <p className="t-body" style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-grey)' }}>Master tailor Abdul has begun cutting the raw silk for your custom commission.</p>
                      </div>

                      <div style={{ padding: '2rem', borderLeft: '3px solid rgba(8,8,8,0.1)', background: '#FCFAF6' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', alignItems: 'center' }}>
                          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-grey)', fontWeight: 500 }}>Privé Exclusive</span>
                          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'var(--color-grey)' }}>Oct 12, 2025</span>
                        </div>
                        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400, margin: '0 0 0.5rem' }}>Early access to the Winter Bridal Collection.</h4>
                        <p className="t-body" style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-grey)' }}>As a Privé member, you have 48-hour early access to commission pieces from the fabled winter collection.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Settings Tab */}
                {activeTab === 'settings' && (
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 400, marginBottom: '2.5rem', borderBottom: '1px solid rgba(8,8,8,0.08)', paddingBottom: '1rem' }}>Account Settings</h2>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                      <section>
                        <h4 className="t-label" style={{ marginBottom: '1.5rem', letterSpacing: '0.15em' }}>Localization</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                          <div>
                            <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Language</label>
                            <select style={{ width: '100%', padding: '0.85rem', border: '1px solid rgba(8,8,8,0.12)', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', outline: 'none' }}>
                              <option>English (UK)</option>
                              <option>Arabic</option>
                              <option>French</option>
                            </select>
                          </div>
                          <div>
                            <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Currency</label>
                            <select style={{ width: '100%', padding: '0.85rem', border: '1px solid rgba(8,8,8,0.12)', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', outline: 'none' }}>
                              <option>INR (₹)</option>
                              <option>AED (د.إ)</option>
                              <option>USD ($)</option>
                            </select>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h4 className="t-label" style={{ marginBottom: '1.75rem', letterSpacing: '0.15em' }}>Email Preferences</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                          {['Order Updates & Tracking', 'Exclusive Privé Invitations', 'New Collection Drops', 'Styling Advice & Newsletters'].map(opt => (
                            <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', userSelect: 'none' }}>
                              <input type="checkbox" defaultChecked style={{ accentColor: 'var(--color-gold)', width: 16, height: 16 }} />
                              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-black)' }}>{opt}</span>
                            </label>
                          ))}
                        </div>
                      </section>

                      <section style={{ borderTop: '1px solid rgba(8,8,8,0.08)', paddingTop: '2.5rem' }}>
                        <h4 className="t-label" style={{ marginBottom: '1rem', color: '#B22222', letterSpacing: '0.15em' }}>Danger Zone</h4>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-grey)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                          Permanently deleting your account removes all body profiles, customized measurement records, commission history, and Privé status. This cannot be undone.
                        </p>
                        <Button variant="outline" style={{ borderColor: '#B22222', color: '#B22222' }}>Delete Account</Button>
                      </section>
                    </div>
                  </div>
                )}

                {/* 5. Security Tab */}
                {activeTab === 'security' && (
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 400, marginBottom: '2.5rem', borderBottom: '1px solid rgba(8,8,8,0.08)', paddingBottom: '1rem' }}>Security & Privacy</h2>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: 420 }}>
                      <Button variant="outline" fullWidth style={{ justifyContent: 'flex-start', padding: '1rem 1.5rem' }}>Change Password</Button>
                      <Button variant="outline" fullWidth style={{ justifyContent: 'flex-start', padding: '1rem 1.5rem' }}>Setup Two-Factor Authentication</Button>
                      <Button variant="outline" fullWidth style={{ justifyContent: 'flex-start', padding: '1rem 1.5rem' }}>View Active Devices</Button>
                      <Button variant="outline" fullWidth style={{ justifyContent: 'flex-start', padding: '1rem 1.5rem' }}>Download My Data</Button>
                    </div>
                  </div>
                )}

                {/* 6. Orders/Commissions Tab */}
                {activeTab === 'orders' && (
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 400, marginBottom: '1.5rem' }}>Bespoke Commissions</h2>
                    
                    {/* Sub-tabs */}
                    <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid rgba(8,8,8,0.08)', marginBottom: '2.5rem' }}>
                      {['current', 'past', 'cancelled'].map(tab => (
                        <button key={tab} onClick={() => setOrderSubTab(tab as 'current' | 'past' | 'cancelled')} style={{
                          background: 'none', border: 'none', padding: '0 0 1rem', textTransform: 'capitalize', cursor: 'pointer',
                          fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: orderSubTab === tab ? 'var(--color-black)' : 'var(--color-grey)',
                          fontWeight: orderSubTab === tab ? 600 : 300,
                          borderBottom: orderSubTab === tab ? '2px solid var(--color-gold)' : '2px solid transparent',
                          transition: 'all 0.3s'
                        }}>{tab} Orders</button>
                      ))}
                    </div>

                    {loadingOrders ? (
                      <p className="t-body">Loading bespoke commissions...</p>
                    ) : orders.length === 0 ? (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '4rem 0' }}>
                        <Image src="/illustrations/pattern.png" alt="Empty" width={120} height={120} style={{ objectFit: 'contain', opacity: 0.3 }} />
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: '2rem 0 1rem', fontWeight: 400 }}>No Orders Found</h3>
                        <p className="t-body">Your commissioned pieces will appear here.</p>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {orders.map(order => (
                          <div key={order.id} style={{ border: '1px solid rgba(8,8,8,0.08)', padding: '2.5rem', display: 'flex', gap: '2rem', alignItems: 'center', background: '#FCFAF6' }}>
                            <div style={{ flex: 1 }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--color-grey)' }}>Order #{order.order_number}</span>
                                <span style={{ background: 'var(--color-black)', color: 'var(--color-gold)', padding: '0.25rem 0.6rem', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500 }}>{order.status}</span>
                              </div>
                              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: '0 0 1.5rem', fontWeight: 400 }}>Bespoke Commission</h3>
                              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <Button variant="outline" onClick={() => router.push(`/track/${order.id}`)}>Track Craft Journey</Button>
                                <span className="t-label" style={{ fontSize: '0.75rem' }}>Total: ₹{order.total_amount?.toLocaleString('en-IN')}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 7. Body Profiles Tab */}
                {activeTab === 'measurements' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid rgba(8,8,8,0.08)', paddingBottom: '1rem' }}>
                      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 400, margin: 0 }}>Saved Body Profiles</h2>
                      <Button variant="outline" onClick={() => router.push('/measurements')}>Create New Profile</Button>
                    </div>
                    
                    {loadingMeasurements ? (
                      <p className="t-body">Loading profiles...</p>
                    ) : measurements.length === 0 ? (
                      <div style={{ border: '1px solid rgba(8,8,8,0.08)', padding: '3rem', textAlign: 'center', background: '#FCFAF6' }}>
                        <p className="t-body" style={{ margin: 0 }}>No body profiles found. Let's create your first fit matrix.</p>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {measurements.map(m => (
                          <div key={m.id} style={{ border: '1px solid rgba(8,8,8,0.08)', padding: '2.5rem', background: '#FCFAF6' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                              <div>
                                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', margin: 0, fontWeight: 400 }}>{m.profile_name}</h3>
                                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--color-grey)', display: 'block', marginTop: '0.25rem' }}>
                                  {m.updated_at ? `Updated: ${m.updated_at.split('T')[0]}` : 'Newly created'}
                                </span>
                              </div>
                              <button style={{ background: 'none', border: 'none', textDecoration: 'underline', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', cursor: 'pointer', color: 'var(--color-grey)' }}>Edit Sizing</button>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', background: 'var(--soft-ivory)', padding: '2rem', border: '1px solid rgba(8,8,8,0.04)' }}>
                              {[
                                { label: 'Chest', val: m.chest },
                                { label: 'Waist', val: m.waist },
                                { label: 'Shoulders', val: m.shoulder },
                                { label: 'Height', val: m.height }
                              ].filter(v => v.val).map(item => (
                                <div key={item.label}>
                                  <span className="t-label" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.6rem', letterSpacing: '0.1em' }}>{item.label}</span>
                                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-black)' }}>{item.val}"</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 8. Appointments Tab */}
                {activeTab === 'appointments' && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '4rem 0' }}>
                    <Image src="/illustrations/consultation.png" alt="Consultation" width={200} height={200} style={{ objectFit: 'contain' }} />
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: '2rem 0 1rem', fontWeight: 400 }}>No Upcoming Appointments</h3>
                    <p className="t-body" style={{ maxWidth: 400, margin: '0 auto 2.5rem', fontSize: '0.9rem', color: 'var(--color-grey)', lineHeight: 1.6 }}>Book a private styling consultation with our master tailors at our flagship Patna atelier, or schedule a virtual fitting.</p>
                    <Button onClick={() => router.push('/bespoke')}>Book Atelier Consultation</Button>
                  </div>
                )}

                {/* 9. Curated Wishlist Tab */}
                {activeTab === 'wishlist' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid rgba(8,8,8,0.08)', paddingBottom: '1rem' }}>
                      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 400, margin: 0 }}>Curated Wishlist</h2>
                      {wishlistedProducts.length > 0 && (
                        <button style={{ background: 'none', border: 'none', textDecoration: 'underline', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--color-grey)', cursor: 'pointer' }}>
                          Share Collection
                        </button>
                      )}
                    </div>

                    {wishlistedProducts.length === 0 ? (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '4rem 0' }}>
                        <Image src="/illustrations/pattern.png" alt="Empty Wishlist" width={200} height={200} style={{ objectFit: 'contain', opacity: 0.5 }} />
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: '2rem 0 1rem', fontWeight: 400 }}>Your Collection is Empty</h3>
                        <p className="t-body" style={{ maxWidth: 400, margin: '0 auto 2.5rem', fontSize: '0.9rem', color: 'var(--color-grey)', lineHeight: 1.6 }}>Explore our latest seasonal collections and save your favorite pieces to commission later.</p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                          <Button variant="outline" onClick={() => router.push('/collections/men')}>Explore Men's</Button>
                          <Button variant="outline" onClick={() => router.push('/collections/women')}>Explore Women's</Button>
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2.5rem' }}>
                        {wishlistedProducts.map((prod, i) => (
                          <div key={prod.id} style={{ position: 'relative' }}>
                            <ProductCard product={prod} index={i} />
                            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
                              <Button style={{ flex: 1, padding: '0.75rem 0', fontSize: '0.7rem' }} onClick={() => cartDispatch({ type: 'MOVE_TO_CART', id: prod.id, item: { ...prod, quantity: 1 } })}>
                                Move To Cart
                              </Button>
                              <Button variant="outline" style={{ flex: 1, padding: '0.75rem 0', fontSize: '0.7rem' }} onClick={() => cartDispatch({ type: 'TOGGLE_WISHLIST', id: prod.id })}>
                                Remove
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <style>{`
        .info-block {
          border-bottom: 1px solid rgba(8, 8, 8, 0.08);
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
        }
        .info-block p { 
          font-family: var(--font-sans); 
          font-size: 1rem; 
          color: var(--color-black); 
          margin: 0.5rem 0 0; 
          font-weight: 500;
        }
        
        @media (max-width: 900px) {
          .profile-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .profile-grid aside { flex-direction: row; overflow-x: auto; padding-bottom: 1rem; border-bottom: 1px solid rgba(8,8,8,0.08); }
          .profile-grid aside button { white-space: nowrap; padding: 0.5rem 1rem !important; margin: 0 !important; border-bottom: 2px solid transparent !important; }
        }
      `}</style>
    </main>
  );
}
