create TEMP table "taxis_green"
(
    "vendorid"              integer,
    "pickup_datetime"       timestamptz,
    "dropoff_datetime"      timestamptz,
    "store_and_fwd_flag"    varchar(20) null,
    "RatecodeID"            varchar(20) null,
    "PULocationID"          integer,
    "DOLocationID"          integer,
    "passenger_count"       varchar(20) null,
    "trip_distance"         varchar(20) null,
    "fare_amount"           varchar(20) null,
    "extra"                 varchar(20) null,
    "mta_tax"               varchar(20) null,
    "tip_amount"            varchar(20) null,
    "tolls_amount"          varchar(20) null,
    "ehail_fee"             varchar(20) null,
    "improvement_surcharge" varchar(20) null,
    "total_amount"          varchar(20) null,
    "payment_type"          varchar(20) null,
    "trip_type"             varchar(20) null
);

COPY "taxis_green" FROM '/data/green.csv' DELIMITER ',' CSV HEADER;
INSERT INTO "taxis" ("pickup_datetime", "dropoff_datetime","PULocationID","DOLocationID")
SELECT "pickup_datetime", "dropoff_datetime","PULocationID","DOLocationID"
from "taxis_green"

