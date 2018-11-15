# Router Endpoints for Zillow image carousel

The following API endpoints have been defined for
client side and server side usage:

| Endpoint      | Method        | Description  |
| ------------- |:-------------:| -----:|
| `/images` | POST | Add a new image to the database |
| `/images/:image` | GET | Retrieve an image by id |
| `/images/:image` | PATCH | Update an image by id |
| `/images/:image` | DELETE | Delete an image by id |
| `/images/homes/:home` | GET | Retrieve all images by home |
| `/images/homes/:home` | POST | Add all images to home |
| `/images/homes/:home` | PATCH | Edit image group by home |
| `/images/homes/:home` | DELETE | Delete image group by home |
