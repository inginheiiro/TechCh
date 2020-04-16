create TEMP table "taxis_yellow"
(
    "vendorid"              integer,
    "pickup_datetime"       timestamptz,
    "dropoff_datetime"      timestamptz,
    "passenger_count"       varchar(20) null,
    "trip_distance"         varchar(20) null,
    "RatecodeID"            varchar(20) null,
    "store_and_fwd_flag"    varchar(20) null,
    "PULocationID"          integer,
    "DOLocationID"          integer,
    "payment_type"          varchar(20) null,
    "fare_amount"           varchar(20) null,
    "extra"                 varchar(20) null,
    "mta_tax"               varchar(20) null,
    "tip_amount"            varchar(20) null,
    "improvement_surcharge" varchar(20) null,
    "total_amount"          varchar(20) null,
    "dummy"                 varchar(20) null
);


COPY "taxis_yellow" FROM '/data/yellow.csv' DELIMITER ',' CSV HEADER;
INSERT INTO "taxis" ("pickup_datetime", "dropoff_datetime","PULocationID","DOLocationID")
SELECT "pickup_datetime", "dropoff_datetime","PULocationID","DOLocationID"
from "taxis_yellow"



