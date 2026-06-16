-- Add is_offer to products
ALTER TABLE public.products
ADD COLUMN is_offer boolean DEFAULT false;
