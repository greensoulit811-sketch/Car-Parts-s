-- Create dealers table to store dealer registration details
CREATE TABLE IF NOT EXISTS public.dealers (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  sponsored_details TEXT,
  license_number TEXT,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Ensure columns exist in case the table was already created before without them
ALTER TABLE public.dealers ADD COLUMN IF NOT EXISTS full_name TEXT;
ALTER TABLE public.dealers ADD COLUMN IF NOT EXISTS email TEXT;
ALTER TABLE public.dealers ADD COLUMN IF NOT EXISTS phone TEXT;
ALTER TABLE public.dealers ADD COLUMN IF NOT EXISTS sponsored_details TEXT;
ALTER TABLE public.dealers ADD COLUMN IF NOT EXISTS license_number TEXT;
ALTER TABLE public.dealers ADD COLUMN IF NOT EXISTS is_approved BOOLEAN DEFAULT false;

-- Enable RLS
ALTER TABLE public.dealers ENABLE ROW LEVEL SECURITY;

-- Create policies
DROP POLICY IF EXISTS "Dealers can view their own profile" ON public.dealers;
CREATE POLICY "Dealers can view their own profile" 
  ON public.dealers FOR SELECT 
  USING (auth.uid() = id);

-- Assuming anyone with 'admin' role in user_roles can view/update/delete
DROP POLICY IF EXISTS "Admins can view all dealers" ON public.dealers;
CREATE POLICY "Admins can view all dealers" 
  ON public.dealers FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
    OR 
    (auth.jwt() ->> 'role' = 'admin')
  );

DROP POLICY IF EXISTS "Admins can update all dealers" ON public.dealers;
CREATE POLICY "Admins can update all dealers" 
  ON public.dealers FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

DROP POLICY IF EXISTS "Admins can delete all dealers" ON public.dealers;
CREATE POLICY "Admins can delete all dealers" 
  ON public.dealers FOR DELETE 
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Trigger to create dealer on auth.users insert IF role is dealer
CREATE OR REPLACE FUNCTION public.handle_new_dealer()
RETURNS trigger AS $$
BEGIN
  IF new.raw_user_meta_data->>'role' = 'dealer' THEN
    INSERT INTO public.dealers (id, full_name, email, phone, sponsored_details, license_number, is_approved)
    VALUES (
      new.id,
      new.raw_user_meta_data->>'full_name',
      new.email,
      new.raw_user_meta_data->>'phone',
      new.raw_user_meta_data->>'sponsored_details',
      new.raw_user_meta_data->>'license_number',
      false
    )
    ON CONFLICT (id) DO UPDATE SET
      full_name = EXCLUDED.full_name,
      email = EXCLUDED.email,
      phone = EXCLUDED.phone,
      sponsored_details = EXCLUDED.sponsored_details,
      license_number = EXCLUDED.license_number;
  END IF;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop trigger if exists to prevent errors on multiple runs
DROP TRIGGER IF EXISTS on_auth_user_created_dealer ON auth.users;

-- Create trigger
CREATE TRIGGER on_auth_user_created_dealer
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_dealer();

-- Backfill existing dealers from auth.users (requires postgres role, which migrations have)
INSERT INTO public.dealers (id, full_name, email, phone, is_approved)
SELECT 
  id, 
  raw_user_meta_data->>'full_name', 
  email, 
  raw_user_meta_data->>'phone',
  false
FROM auth.users
WHERE raw_user_meta_data->>'role' = 'dealer'
ON CONFLICT (id) DO NOTHING;
