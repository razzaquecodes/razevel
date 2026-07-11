'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { createClient } from '@/src/lib/supabase/client';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
  profilePhoto?: string;
  memberSince: string;
  membershipLevel: 'Guest' | 'RAZEVÉL Privé';
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isInitialized: boolean;
}

interface AuthContextType extends AuthState {
  login: (email: string, pass: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  register: (data: Partial<User>, pass: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isInitialized: false,
  });

  const supabase = createClient();

  const parseUser = (supabaseUser: SupabaseUser, profileData: Record<string, string> | null = null): User => {
    const meta = supabaseUser.user_metadata || {};
    const safeProfile = profileData || {};
    
    // Handle Google's full_name
    let fName = safeProfile.first_name || meta.firstName || '';
    let lName = safeProfile.last_name || meta.lastName || '';
    
    if (!fName && !lName && meta.full_name) {
      const parts = meta.full_name.split(' ');
      fName = parts[0];
      lName = parts.slice(1).join(' ');
    }

    return {
      id: supabaseUser.id,
      email: supabaseUser.email || '',
      firstName: fName || 'Guest',
      lastName: lName || 'User',
      phone: safeProfile.phone || meta.phone || undefined,
      dateOfBirth: safeProfile.date_of_birth || meta.dateOfBirth || undefined,
      gender: safeProfile.gender || meta.gender || undefined,
      profilePhoto: safeProfile.profile_photo || meta.profilePhoto || undefined,
      memberSince: safeProfile.created_at ? safeProfile.created_at.split('T')[0] : (meta.memberSince || new Date().toISOString().split('T')[0]),
      membershipLevel: safeProfile.membership_level || meta.membershipLevel || 'RAZEVÉL Privé',
    };
  };

  const syncProfile = async (supabaseUser: SupabaseUser) => {
    console.log('[AuthContext] Syncing profile for user:', supabaseUser.id);
    try {
      const { data, error } = await supabase.from('profiles').select('*').eq('id', supabaseUser.id).single();
      let profile = data;
      
      if (error) {
        console.warn('[AuthContext] Error fetching profile:', error.message);
      }
      
      if (error && error.code === 'PGRST116') {
        console.warn('[AuthContext] Profile not found. Awaiting DB trigger.');
      } else if (!error) {
         console.log('[AuthContext] Profile fetched successfully.');
      }
      return profile;
    } catch (err) {
      console.error('[AuthContext] Exception in syncProfile:', err);
      return null;
    }
  };

  useEffect(() => {
    const initSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) throw error;
        
        if (session?.user) {
          const profileData = await syncProfile(session.user);
          setState(s => ({ ...s, user: parseUser(session.user, profileData) }));
        } else {
          setState(s => ({ ...s, user: null }));
        }
      } catch (e) {
        console.error('Failed to get Supabase session:', e);
      } finally {
        setState(s => ({ ...s, isLoading: false, isInitialized: true }));
      }
    };

    initSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const profileData = await syncProfile(session.user);
        setState(s => ({ ...s, user: parseUser(session.user, profileData), isLoading: false }));
      } else {
        setState(s => ({ ...s, user: null, isLoading: false }));
      }
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabase.auth]);

  const login = useCallback(async (email: string, pass: string) => {
    setState(s => ({ ...s, isLoading: true }));
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: pass,
    });
    
    if (error) {
      setState(s => ({ ...s, isLoading: false }));
      throw error;
    }
  }, [supabase.auth]);

  const loginWithGoogle = useCallback(async () => {
    console.log('[AuthContext] Triggering Google OAuth...');
    setState(s => ({ ...s, isLoading: true }));
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      }
    });

    console.log('[AuthContext] Google OAuth response data:', data);

    if (error) {
      console.error('[AuthContext] Google OAuth Error:', error.message);
      setState(s => ({ ...s, isLoading: false }));
      throw error;
    }
  }, [supabase.auth]);

  const register = useCallback(async (data: Partial<User>, pass: string) => {
    setState(s => ({ ...s, isLoading: true }));
    
    const { error } = await supabase.auth.signUp({
      email: data.email!,
      password: pass,
      options: {
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          memberSince: new Date().toISOString().split('T')[0],
          membershipLevel: 'RAZEVÉL Privé',
        }
      }
    });

    if (error) {
      setState(s => ({ ...s, isLoading: false }));
      throw error;
    }
  }, [supabase.auth]);

  const resetPassword = useCallback(async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) throw error;
  }, [supabase.auth]);

  const logout = useCallback(async () => {
    setState(s => ({ ...s, isLoading: true }));
    const { error } = await supabase.auth.signOut();
    if (error) {
      setState(s => ({ ...s, isLoading: false }));
      throw error;
    }
    setState(s => ({ ...s, user: null, isLoading: false }));
  }, [supabase.auth]);

  const refreshUser = useCallback(async () => {
    const { data: { user: supabaseUser } } = await supabase.auth.getUser();
    if (supabaseUser) {
      const profileData = await syncProfile(supabaseUser);
      setState(s => ({ ...s, user: parseUser(supabaseUser, profileData) }));
    }
  }, [supabase]);

  const contextValue = React.useMemo(() => ({
    ...state,
    login,
    loginWithGoogle,
    register,
    logout,
    resetPassword,
    refreshUser
  }), [state, login, loginWithGoogle, register, logout, resetPassword, refreshUser]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
