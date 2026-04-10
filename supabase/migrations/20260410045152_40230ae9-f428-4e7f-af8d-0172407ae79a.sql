
GRANT SELECT, INSERT ON public.order_history TO authenticated;
GRANT SELECT, INSERT ON public.order_history TO anon;

-- Notify PostgREST to reload schema cache
NOTIFY pgrst, 'reload schema';
