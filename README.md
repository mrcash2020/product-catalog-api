# Product Catalog API

A simple RESTful API for managing a product catalog. This API enables you to create, read, update, and delete products and product categories.

## Features

- RESTful API design
- Products and Categories resources
- MongoDB database integration
- Input validation
- Error handling
- Health check endpoints for Kubernetes readiness/liveness probes

## Requirements

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)

## Project Structure

```
product-catalog-api/
├── controllers/         # Request handlers
│   ├── productController.js
│   ├── categoryController.js
│   └── healthController.js
├── models/              # Database models
│   ├── Product.js
│   └── Category.js
├── routes/              # API routes
│   ├── productRoutes.js
│   ├── categoryRoutes.js
│   └── healthRoutes.js
├── .env                 # Environment variables (create this file)
├── .gitignore
├── package.json
└── server.js            # Application entry point
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with the following content:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/product-catalog
   ```

## Running the Application

Start the server:
```
npm start
```

For development with auto-restart:
```
npm run dev
```

## API Endpoints

### Products

- **GET /api/products** - Get all products
- **GET /api/products/:id** - Get a specific product
- **POST /api/products** - Create a new product
- **PUT /api/products/:id** - Update a product
- **DELETE /api/products/:id** - Delete a product

### Categories

- **GET /api/categories** - Get all categories
- **GET /api/categories/:id** - Get a specific category
- **POST /api/categories** - Create a new category
- **PUT /api/categories/:id** - Update a category
- **DELETE /api/categories/:id** - Delete a category

### Health Checks

- **GET /health** - Get API health status
- **GET /health/live** - Liveness probe endpoint
- **GET /health/ready** - Readiness probe endpoint

## Example Requests

### Create a category

```bash
curl -X POST http:/:/localhost:3000/api/categories \
  -H "Content-Type: application/json" \
  -d '{"name": "Electronics", "description": "Electronic gadgets and devices"}'
```

#c## Create a product

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Smartphone X",
    "description": "Latest smartphone with advanced features",
    "price": 999.99
    "category": "60d9f2a9b4c7c61a84f5e71e",
    "sku": "PHON-001",
    "quantity": 50,
    "imageUrl": "smartphone.jpg"
  }'
```

## Testing

Run tests:
```
npm test
```

## DevOps Considerations

This application includes features specifically designed to work well in a containerized/Kubernetes environment:

1. **Health check endpoints** for monitoring application health
2. **Environment variable configuration** for easy container configuration
3. **Graceful error handling** to prevent crashes
4. **MongoDB connection management** with reconnection capability
5. **Logging** using morgan middleware

## License

MIT
