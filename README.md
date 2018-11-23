# Project Name

> Image Carousel from Zillow

## Related Projects

  - https://github.com/ZillowDB/mortgage-calculator
  - https://github.com/ZillowDB/detailed-part
  - https://github.com/ZillowDB/nearby-homes

### Installing Dependencies

From within the root directory:

```sh
npm install
```
### Running in development

From within the root directory:

```sh
npm run build:dev
npm run start:dev
```

### Database seeding on local

```sh
mysql.server start
mysql -u DB_UNAME < database/schema.sql
npm run seed
```
