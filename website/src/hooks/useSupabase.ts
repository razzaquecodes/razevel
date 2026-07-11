import { useEffect, useState } from 'react';
import { createClient } from '@/src/lib/supabase/client';
import { useAuth } from '@/src/context/AuthContext';
import { Database } from '@/src/types/database';

export function useMeasurements() {
  const { user } = useAuth();
  const supabase = createClient();
  const [measurements, setMeasurements] = useState<Database['public']['Tables']['body_measurements']['Row'][]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeasurements = async () => {
    if (!user) {
      setMeasurements([]);
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    const { data, error } = await supabase
      .from('body_measurements')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setMeasurements(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMeasurements();
  }, [user?.id]);

  const addMeasurement = async (measurement: Omit<Database['public']['Tables']['body_measurements']['Insert'], 'user_id'>) => {
    if (!user) return;
    const { error } = await supabase
      .from('body_measurements')
      .insert([{ ...measurement, user_id: user.id }]);
    if (!error) await fetchMeasurements();
    return { error };
  };

  const deleteMeasurement = async (id: string) => {
    if (!user) return;
    const { error } = await supabase.from('body_measurements').delete().eq('id', id).eq('user_id', user.id);
    if (!error) await fetchMeasurements();
    return { error };
  };

  return { measurements, isLoading, fetchMeasurements, addMeasurement, deleteMeasurement };
}

export function useAddresses() {
  const { user } = useAuth();
  const supabase = createClient();
  const [addresses, setAddresses] = useState<Database['public']['Tables']['delivery_addresses']['Row'][]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAddresses = async () => {
    if (!user) {
      setAddresses([]);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const { data, error } = await supabase
      .from('delivery_addresses')
      .select('*')
      .eq('user_id', user.id)
      .order('is_default', { ascending: false });

    if (!error && data) setAddresses(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAddresses();
  }, [user?.id]);

  const addAddress = async (address: Omit<Database['public']['Tables']['delivery_addresses']['Insert'], 'user_id'>) => {
    if (!user) return;
    const { error } = await supabase.from('delivery_addresses').insert([{ ...address, user_id: user.id }]);
    if (!error) await fetchAddresses();
    return { error };
  };

  return { addresses, isLoading, fetchAddresses, addAddress };
}

export function useOrders() {
  const { user } = useAuth();
  const supabase = createClient();
  const [orders, setOrders] = useState<Database['public']['Tables']['orders']['Row'][]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchOrders = async () => {
    if (!user) {
      setOrders([]);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (!error && data) setOrders(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, [user?.id]);

  return { orders, isLoading, fetchOrders };
}
