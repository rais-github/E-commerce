## One-Click Deployment

Easily get a copy and launch your app on [AirCode](https://aircode.io/) by clicking the button below.

[![Deploy with AirCode](https://aircode.io/aircode-deploy-button.svg)](https://aircode.io/dashboard?owner=rais-github&repo=E-commerce&path=&appname=E-c0mmerce)



# Aircode ECommerce Serverless RestApi Project

Welcome to the Aircode ECommerce Serverless RestApi project! This project provides a serverless RESTful API for managing ECommerce operations, including user management, product management, order management, cart functionality, and secure payment processing using Stripe.

## Technologies Used
- **Node.js:** The server-side runtime environment used to build the API.
- **JWT (JSON Web Token):** Used for authentication to verify admin and normal user access.
- **MongoDB:** A NoSQL database used for storing data such as user information, products, orders, and carts.
- **Stripe:** Integrated for secure payment processing and handling payment intents.

## Project Structure

### User Folder
- **Register:** Endpoint for user registration.
- **Update:** Endpoint for updating user information.
- **Delete:** Endpoint for deleting user accounts.

### Auth Folder
- **Login:** Endpoint for user login.

### Product Folder
- **Create:** Endpoint for creating a new product (accessible by admin only).
- **Update:** Endpoint for updating product information (accessible by admin only).
- **Delete:** Endpoint for deleting a product (accessible by admin only).

### Order Folder
- **Create:** Endpoint for creating a new order.
- **Update:** Endpoint for updating order information.
- **Delete:** Endpoint for deleting an order.
- **Read All (User):** Endpoint for retrieving all orders for a specific user.
- **Read All (Admin):** Endpoint for retrieving all orders (admin access).

### Cart
- Similar structure to the order folder for managing the user's shopping cart.

### Checkout Folder
- **Payment Intent:** Endpoint for creating a payment intent with Stripe, sending the client secret to the frontend.
- **Card Payment:** Payment method provided for the checkout process.

## Getting Started
1. Clone the repository.
2. Install the required dependencies using `npm install`.
3. Set up your MongoDB database and provide the connection string in the configuration.
4. Set up your Stripe account and provide the API key for payment processing.
5. Configure environment variables for sensitive information.
6. Deploy the serverless project using your preferred provider (e.g., AWS Lambda, Azure Functions).

## Environment Variables
Make sure to set the following environment variables:

- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT authentication.
- `STRIPE_API_KEY`: Stripe API key for payment processing.

## Usage
Once the project is deployed and configured, you can use the provided API endpoints to manage users, products, orders, carts, and perform secure checkout with Stripe.

Feel free to explore and customize the project according to your specific requirements!

## Contributors
- [Your Name]

## License
This project is licensed under the [MIT License](LICENSE).
