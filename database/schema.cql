DROP KEYSPACE IF EXISTS img_carousel;

CREATE KEYSPACE img_carousel
  WITH REPLICATION = {
    'class': 'SimpleStrategy',
    'replication_factor': 1
  };

USE img_carousel;

CREATE TABLE img_carousel.images (
  id UUID PRIMARY KEY,
  image_url TEXT,
  house_id INT,
  house_name TEXT
);

COPY img_carousel.images(image_url, house_id, house_name, id)
  FROM './seeding/test.csv'
  WITH DELIMITER = ','
  AND HEADER = TRUE;
