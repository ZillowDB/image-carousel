DROP DATABASE IF EXISTS img_carousel;
CREATE DATABASE img_carousel;
\c img_carousel

CREATE TEMPORARY TABLE t (
  id SERIAL PRIMARY KEY,
  uu_id UUID,
  image_url TEXT,
  house_id INT,
  house_name TEXT
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  image_url TEXT,
  house_id INT,
  house_name TEXT
);

COPY t (image_url, house_id, house_name, uu_id)
  FROM :fname
  DELIMITER ','
  CSV HEADER;

INSERT INTO images (image_url, house_id, house_name)
  SELECT image_url, house_id, house_name
  FROM t;

DROP TABLE  IF EXISTS t;

CREATE INDEX house_sorted ON images USING btree(house_id);
CREATE INDEX address_sorted ON images USING btree(house_name);
