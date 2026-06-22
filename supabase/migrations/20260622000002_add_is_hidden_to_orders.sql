-- Add is_hidden column to orders table for soft-delete functionality
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS is_hidden BOOLEAN DEFAULT false;
