-- Add is_hidden_by_dealer column to orders table for dealer soft-delete functionality
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS is_hidden_by_dealer BOOLEAN DEFAULT false;
