
create table zones
(
    "LocationID"   integer,
    "Borough"      varchar(100),
    "Zone"         varchar(100),
    "service_zone" varchar(100)
);

CREATE INDEX zones_index ON "zones" ("LocationID","Zone");
ALTER TABLE public.zones ADD CONSTRAINT zones_pk PRIMARY KEY ("LocationID");

create table taxis (
    "pickup_datetime" timestamptz,
    "dropoff_datetime" timestamptz,
    "PULocationID" integer,
    "DOLocationID" integer
    );

CREATE INDEX taxis_index ON "taxis" ("PULocationID","DOLocationID");
ALTER TABLE public.taxis ADD CONSTRAINT taxisPU_fk FOREIGN KEY ("PULocationID") REFERENCES public.zones("LocationID");
ALTER TABLE public.taxis ADD CONSTRAINT taxisDO_fk FOREIGN KEY ("DOLocationID") REFERENCES public.zones("LocationID");


COPY "zones" FROM '/data/zones.csv' DELIMITER ',' CSV HEADER;

