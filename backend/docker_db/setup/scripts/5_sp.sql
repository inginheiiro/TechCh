CREATE OR REPLACE FUNCTION public.trips(z character varying, d timestamp with time zone)
    RETURNS TABLE(zone character varying, pu_total bigint, do_total bigint)
    LANGUAGE plpgsql
AS $function$
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
$function$
;




CREATE OR REPLACE FUNCTION public.tripsservice(z character varying, d timestamp with time zone)
    RETURNS TABLE(pu_total bigint, do_total bigint)
    LANGUAGE plpgsql
AS $function$
BEGIN

    RETURN QUERY

        with PU as (
            select
                count (*)  as  pu_total
            from
                public.zones
                    inner join public.taxis as t1 on
                        public.zones."LocationID" = t1."PULocationID"
            where
                    t1.pickup_datetime = D and public.zones.service_zone  =Z),

             DOX as (
                 select
                     count (*)  as  do_total
                 from
                     public.zones
                         inner join public.taxis as t1 on
                             public.zones."LocationID" = t1."DOLocationID"
                 where
                         t1.pickup_datetime = D and public.zones.service_zone  =Z)
        select PU.pu_total, DOX.do_total
        from PU, DOX;

END;
$function$
;


