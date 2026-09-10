# SyncBoard

SyncBoard is a full-stack web application for managing boards and organizing information. It includes user authentication and board management features.

## Features

- User registration and login
- JWT authentication
- Protected routes
- Create boards
- View boards
- Update boards
- Delete boards
- User management

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)

### Frontend

- Frontend application for interacting with the SyncBoard API

## Project Structure

```text
syncboard/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── boardController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── Board.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── boardRoutes.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
└── frontend/