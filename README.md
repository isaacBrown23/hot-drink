# HotDrink

A modern e-commerce/product showcase website built with React and Vite.

## Features

- **Home Page**: Highlights the main website features.
- **Products Listing**: Browse available products.
- **Single Product View**: Detailed page for each product.
- **Shopping Cart**: Add, view, and manage cart items.
- **Checkout Process**: Complete purchases in a streamlined process.
- **Order Success Page**: Confirmation after a successful order.
- **Contact Page**: Contact information and form for inquiries.
- **Responsive Design**: Optimized for all screen sizes.

## Technologies Used

- **React**: UI library for building dynamic interfaces.
- **Vite**: Fast, modern build tool for development and production.
- **React Router DOM**: Declarative routing for seamless navigation.
- **SCSS**: CSS preprocessor for modular and maintainable styling.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/isaacBrown23/hot-drink.git
   cd hot-drink
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

By default, the app will be available at `http://localhost:3000`.

## Project Structure

```
hotdrink/
├── public/                 # Static assets (images)
├── src/
│   ├── assets/            # Images and media files
│   ├── Components/        # Reusable React components (Banner, Footer, TopNav, etc.)
│   ├── Pages/             # Application pages (Home, Products, Cart, etc.)
│   ├── style/             # SCSS stylesheets
│   ├── App.jsx            # Main app component with routes
│   ├── main.jsx           # React app entry point
│   └── data.json          # Sample product data 
├── index.html             # Main HTML template
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration file
└── README.md              # Project documentation
```
