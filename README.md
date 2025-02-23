# React To-Do List (Order Management System)

This is a simple React-based To-Do list (Order Management System) with a backend API integration using Axios. It allows users to create, read, update, and delete (CRUD) order items.

## Features
- Add new order items
- View all order items
- Edit existing order items
- Delete order items
- Uses Material UI for UI components
- Backend API integration with Axios

## Technologies Used
- React.js
- Material UI
- Axios
- React Router
- Styled Components

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js (latest LTS version recommended)
- npm or yarn

### Clone the Repository
```sh
git clone https://github.com/PavithraEswaramoorthy/Restaurant-CRUD-frontend.git
cd Restaurant-CRUD-frontend
```

### Install Dependencies
```sh
npm install
```

## Running the Project
Start the development server:
```sh
npm start
```
The application will be available at `http://localhost:3000/`.

## API Endpoints
The frontend interacts with the backend using the following API endpoints:
- `POST http://localhost:5000/posting` - Add a new order
- `GET http://localhost:5000/getting` - Retrieve all orders
- `PUT http://localhost:5000/updating/:id` - Update an order
- `DELETE http://localhost:5000/deleting/:id` - Delete an order

## Folder Structure
```
frontend/
│-- src/
│   │-- components/
│   │   ├── Home.js
│   │   ├── Services.js
│   │   ├── TodoList.js
│   │-- App.js
│   │-- index.js
│-- public/
│-- package.json
│-- README.md
```

## Dependencies
The project uses the following dependencies:
```json
{
  "@mui/material": "^5.15.20",
  "@mui/icons-material": "^5.15.20",
  "axios": "^1.7.2",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.24.0",
  "styled-components": "^6.1.11"
}
```


## License
This project is licensed under the [GNU GENERAL PUBLIC LICENSE](LICENSE).

