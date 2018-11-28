DROP DATABASE IF EXISTS img_carousel;
CREATE DATABASE img_carousel;
\c img_carousel

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  image_url TEXT,
  description TEXT,
  house_id INT,
  house_name TEXT
);

\copy images (image_url, house_id, house_name, description) from '/Users/lfelberg/Desktop/lisa-proxy/image-carousel/database/seeding/test.csv' with DELIMITER '|' CSV HEADER

CREATE INDEX house_sorted ON images USING btree(house_id);
CREATE INDEX address_sorted ON images USING btree(house_name);
