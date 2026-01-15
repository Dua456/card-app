# Product CRUD API

A RESTful API for managing products built with Node.js, Express, and MongoDB. This API provides full CRUD (Create, Read, Update, Delete) functionality for product management.

## Tech Stack

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling for Node.js
- **dotenv** - Environment variable management
- **cors** - Cross-Origin Resource Sharing middleware

## Installation

1. Clone the repository or create the project structure
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on the `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your MongoDB URI and other configurations

5. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Products

#### Get all products
- **Method**: `GET`
- **Path**: `/api/products`
- **Description**: Retrieve a paginated list of all products
- **Query Parameters**:
  - `pageNumber` (optional): Page number for pagination (default: 1)
  - `keyword` (optional): Search term for name or description

#### Get single product
- **Method**: `GET`
- **Path**: `/api/products/:id`
- **Description**: Retrieve a specific product by ID

#### Create new product
- **Method**: `POST`
- **Path**: `/api/products`
- **Description**: Create a new product
- **Request Body**:
```json
{
  "name": "Product Name",
  "description": "Product description",
  "price": 29.99,
  "category": "electronics",
  "brand": "Brand Name",
  "stock": 10,
  "images": [
    {
      "url": "https://example.com/image.jpg",
      "alt": "Image description"
    }
  ]
}
```

#### Update product
- **Method**: `PUT`
- **Path**: `/api/products/:id`
- **Description**: Update an existing product by ID
- **Request Body**: Same as create product (all fields optional)

#### Delete product
- **Method**: `DELETE`
- **Path**: `/api/products/:id`
- **Description**: Delete a product by ID

#### Get top-rated products
- **Method**: `GET`
- **Path**: `/api/products/top`
- **Description**: Retrieve the top 5 highest-rated products

#### Create product review
- **Method**: `POST`
- **Path**: `/api/products/:id/reviews`
- **Description**: Add a review to a product
- **Request Body**:
```json
{
  "rating": 5,
  "comment": "Great product!",
  "title": "Excellent"
}
```

## How to Test

### Using Postman
1. Import the collection or manually add the endpoints
2. Set the base URL to `http://localhost:5000`
3. Send requests to the various endpoints

### Using cURL
Get all products:
```bash
curl http://localhost:5000/api/products
```

Create a product:
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Product",
    "description": "This is a test product",
    "price": 19.99,
    "category": "electronics",
    "brand": "Test Brand",
    "stock": 5
  }'
```

Get a specific product:
```bash
curl http://localhost:5000/api/products/PRODUCT_ID
```

Update a product:
```bash
curl -X PUT http://localhost:5000/api/products/PRODUCT_ID \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Product Name",
    "price": 24.99
  }'
```

Delete a product:
```bash
curl -X DELETE http://localhost:5000/api/products/PRODUCT_ID
```

## Error Handling

The API returns appropriate HTTP status codes and error messages:
- `400`: Bad Request - Invalid input data
- `404`: Not Found - Resource not found
- `500`: Internal Server Error - Unexpected server error

Example error response:
```json
{
  "success": false,
  "status": 404,
  "message": "Resource not found"
}
```

## Environment Variables

- `NODE_ENV`: Environment mode (development/production)
- `PORT`: Port number for the server
- `MONGODB_URI`: MongoDB connection string"# card-app" 
