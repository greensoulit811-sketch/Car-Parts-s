-- Add the plain_password column to dealers table
ALTER TABLE public.dealers ADD COLUMN IF NOT EXISTS plain_password TEXT;

-- Update the trigger function to include plain_password
CREATE OR REPLACE FUNCTION public.handle_new_dealer()
RETURNS trigger AS $$
BEGIN
  IF new.raw_user_meta_data->>'role' = 'dealer' THEN
    INSERT INTO public.dealers (id, full_name, email, phone, sponsored_details, license_number, area, is_approved, plain_password)
    VALUES (
      new.id,
      new.raw_user_meta_data->>'full_name',
      new.email,
      new.raw_user_meta_data->>'phone',
      new.raw_user_meta_data->>'sponsored_details',
      new.raw_user_meta_data->>'license_number',
      new.raw_user_meta_data->>'area',
      false,
      new.raw_user_meta_data->>'plain_password'
    )
    ON CONFLICT (id) DO UPDATE SET
      full_name = EXCLUDED.full_name,
      email = EXCLUDED.email,
      phone = EXCLUDED.phone,
      sponsored_details = EXCLUDED.sponsored_details,
      license_number = EXCLUDED.license_number,
      area = EXCLUDED.area,
      plain_password = EXCLUDED.plain_password;
  END IF;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
