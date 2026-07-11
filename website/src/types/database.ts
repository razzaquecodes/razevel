export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          first_name: string | null
          last_name: string | null
          phone: string | null
          date_of_birth: string | null
          gender: string | null
          profile_photo: string | null
          membership_level: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          email: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          date_of_birth?: string | null
          gender?: string | null
          profile_photo?: string | null
          membership_level?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          date_of_birth?: string | null
          gender?: string | null
          profile_photo?: string | null
          membership_level?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      body_measurements: {
        Row: {
          id: string
          user_id: string
          profile_name: string
          for_self: boolean | null
          height: number | null
          weight: number | null
          neck: number | null
          shoulder: number | null
          chest: number | null
          waist: number | null
          hip: number | null
          arm_length: number | null
          sleeve_length: number | null
          wrist: number | null
          bicep: number | null
          inseam: number | null
          outseam: number | null
          thigh: number | null
          calf: number | null
          ankle: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          profile_name: string
          for_self?: boolean | null
          height?: number | null
          weight?: number | null
          neck?: number | null
          shoulder?: number | null
          chest?: number | null
          waist?: number | null
          hip?: number | null
          arm_length?: number | null
          sleeve_length?: number | null
          wrist?: number | null
          bicep?: number | null
          inseam?: number | null
          outseam?: number | null
          thigh?: number | null
          calf?: number | null
          ankle?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          profile_name?: string
          for_self?: boolean | null
          height?: number | null
          weight?: number | null
          neck?: number | null
          shoulder?: number | null
          chest?: number | null
          waist?: number | null
          hip?: number | null
          arm_length?: number | null
          sleeve_length?: number | null
          wrist?: number | null
          bicep?: number | null
          inseam?: number | null
          outseam?: number | null
          thigh?: number | null
          calf?: number | null
          ankle?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      delivery_addresses: {
        Row: {
          id: string
          user_id: string
          full_name: string
          phone: string
          country: string
          state: string
          city: string
          postal_code: string
          address_line1: string
          address_line2: string | null
          landmark: string | null
          is_default: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          full_name: string
          phone: string
          country: string
          state: string
          city: string
          postal_code: string
          address_line1: string
          address_line2?: string | null
          landmark?: string | null
          is_default?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          full_name?: string
          phone?: string
          country?: string
          state?: string
          city?: string
          postal_code?: string
          address_line1?: string
          address_line2?: string | null
          landmark?: string | null
          is_default?: boolean | null
          created_at?: string | null
        }
      }
      products: {
        Row: {
          id: string
          title: string
          category: string
          gender: string
          price: number
          fabric: string | null
          embroidery: string | null
          description: string | null
          stock: number | null
          delivery_days: number | null
          images: string[] | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          title: string
          category: string
          gender: string
          price: number
          fabric?: string | null
          embroidery?: string | null
          description?: string | null
          stock?: number | null
          delivery_days?: number | null
          images?: string[] | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          category?: string
          gender?: string
          price?: number
          fabric?: string | null
          embroidery?: string | null
          description?: string | null
          stock?: number | null
          delivery_days?: number | null
          images?: string[] | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      wishlist: {
        Row: {
          id: string
          user_id: string
          product_id: string
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          created_at?: string | null
        }
      }
      cart: {
        Row: {
          id: string
          user_id: string
          product_id: string
          measurement_profile_id: string | null
          quantity: number | null
          selected_size: string | null
          custom_notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          measurement_profile_id?: string | null
          quantity?: number | null
          selected_size?: string | null
          custom_notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          measurement_profile_id?: string | null
          quantity?: number | null
          selected_size?: string | null
          custom_notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          order_number: string
          status: string | null
          delivery_date: string | null
          total_amount: number
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          order_number: string
          status?: string | null
          delivery_date?: string | null
          total_amount: number
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          order_number?: string
          status?: string | null
          delivery_date?: string | null
          total_amount?: number
          created_at?: string | null
          updated_at?: string | null
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string | null
          measurement_profile_id: string | null
          quantity: number | null
          price_at_purchase: number
          created_at: string | null
        }
        Insert: {
          id?: string
          order_id: string
          product_id?: string | null
          measurement_profile_id?: string | null
          quantity?: number | null
          price_at_purchase: number
          created_at?: string | null
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string | null
          measurement_profile_id?: string | null
          quantity?: number | null
          price_at_purchase?: number
          created_at?: string | null
        }
      }
      order_progress: {
        Row: {
          id: string
          order_id: string
          stage: string
          description: string | null
          percentage: number | null
          image: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          order_id: string
          stage: string
          description?: string | null
          percentage?: number | null
          image?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          order_id?: string
          stage?: string
          description?: string | null
          percentage?: number | null
          image?: string | null
          created_at?: string | null
        }
      }
      appointments: {
        Row: {
          id: string
          user_id: string
          appointment_date: string
          appointment_time: string
          location: string
          status: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          appointment_date: string
          appointment_time: string
          location: string
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          appointment_date?: string
          appointment_time?: string
          location?: string
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          title: string
          message: string
          is_read: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          message: string
          is_read?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          message?: string
          is_read?: boolean | null
          created_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
