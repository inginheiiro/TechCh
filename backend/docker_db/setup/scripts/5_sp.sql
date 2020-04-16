CREATE OR REPLACE FUNCTION trips(Z varchar(100), D timestamptz)
returns TABLE (
    Zone      varchar(100),
    pu_total  int8,
    do_total  int8
)
AS $$
BEGIN

    RETURN QUERY

        with PU as (
            select "Zone", count(*) as pu_total
            from public.zones
                     inner join public.taxis as t1 on
                    public.zones."LocationID" = t1."PULocationID"
            where public.zones."Zone" = Z and t1.pickup_datetime = D group by public.zones."Zone"
        ),

             DOX as (
                 select "Zone", count(*) as do_total
                 from public.zones
                          inner join public.taxis as t1 on public.zones."LocationID" = t1."DOLocationID"
                 where public.zones."Zone" = Z and t1.dropoff_datetime = D group by public.zones."Zone"
             )
        select PU."Zone", PU.pu_total, DOX.do_total
        from PU, DOX;

END;
$$ LANGUAGE plpgsql;

