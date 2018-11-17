# Router Endpoints for Zillow image carousel

The following API endpoints have been defined for
client side and server side usage:

| Endpoint      | Method        | Description  |
| ------------- |:-------------:| -----:|
| `/images` | POST | Add a new image to the database |
| `/images/:image` | GET | Retrieve an image by id |
| `/images/:image` | PUT | Update an image by id |
| `/images/:image` | DELETE | Delete an image by id |
| `houses/:house/images` | GET | Retrieve all images by houseId |
| `houses/:house/images` | POST | Add all images to houseId |
| `houses/:house/images` | PUT | Edit image group by houseId |
| `houses/:house/images` | DELETE | Delete image group by houseId |
