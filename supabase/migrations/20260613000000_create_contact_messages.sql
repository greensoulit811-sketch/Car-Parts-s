CREATE TABLE IF NOT EXISTS public.contact_messages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'unread',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Messages are viewable by everyone" ON public.contact_messages FOR SELECT USING (true);
CREATE POLICY "Messages can be inserted by anyone" ON public.contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Messages can be updated by anyone" ON public.contact_messages FOR UPDATE USING (true);
CREATE POLICY "Messages can be deleted by anyone" ON public.contact_messages FOR DELETE USING (true);
