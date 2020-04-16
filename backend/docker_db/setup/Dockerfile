FROM postgres:alpine
ADD scripts/1_init.sql /docker-entrypoint-initdb.d
ADD scripts/2_green.sql /docker-entrypoint-initdb.d
ADD scripts/3_yellow.sql /docker-entrypoint-initdb.d
ADD scripts/4_views.sql /docker-entrypoint-initdb.d
ADD scripts/5_sp.sql /docker-entrypoint-initdb.d
RUN chmod a+r /docker-entrypoint-initdb.d/*
EXPOSE 5432
