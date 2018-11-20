DROP DATABASE IF EXISTS img_carousel;

CREATE DATABASE img_carousel;

-- POSTGRES
\c img_carousel

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  image_url TEXT,
  house_id INT,
  house_name TEXT
);

COPY images(image_url, house_id, house_name)
FROM :fname DELIMITER ',' CSV HEADER;

CREATE INDEX house_sorted ON images USING btree(house_id);
