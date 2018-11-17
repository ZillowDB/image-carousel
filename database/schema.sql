DROP DATABASE IF EXISTS img_carousel;

CREATE DATABASE img_carousel;

-- POSTGRES
\c img_carousel

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  imageUrl TEXT,
  houseId INT,
  houseName TEXT
);

COPY images(imageUrl,houseId, houseName)
FROM :fname DELIMITER ',' CSV HEADER;
