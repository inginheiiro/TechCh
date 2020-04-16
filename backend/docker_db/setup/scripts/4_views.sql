CREATE MATERIALIZED VIEW pu_totals AS
SELECT distinct "Zone", count(*) over (partition by t1."PULocationID") as pu_total
from public.zones inner join public.taxis as t1 on public.zones."LocationID" = t1."PULocationID";


CREATE MATERIALIZED VIEW drop_offs AS
select distinct "Zone",count(*) over (partition by t1."DOLocationID" ) as do_total
from public.zones inner join public.taxis as t1 on public.zones."LocationID" = t1."DOLocationID";


CREATE MATERIALIZED VIEW Top5dropoffs AS
select do2."Zone",do2.do_total,pu1.pu_total from drop_offs do2 inner join pu_totals pu1 on do2."Zone" =pu1."Zone" order by do2.do_total desc limit 5;

CREATE MATERIALIZED VIEW Top5pickups AS
select do2."Zone",do2.do_total,pu1.pu_total from pu_totals pu1 inner join drop_offs do2 on do2."Zone" =pu1."Zone" order by pu1.pu_total desc limit 5;

