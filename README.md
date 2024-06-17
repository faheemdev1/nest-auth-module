# Full Stack Authentication Module

## Overview

This project implements a user authentication module with sign-up and sign-in functionality using React for the front end and NestJS with MongoDB for the back end. Users can register an account and log in to the application, with the front end providing forms for sign-up and sign-in, and the back end handling user data storage and authentication.

https://github.com/faheemdev1/nest-auth-module/assets/173107258/8c797740-e615-47e5-bce2-24ab1f1f4dbe

## Features
- User signup with email, name, and password (minimum length and character type validation).
- User signin with email and password.
- Simple application page accessible after successful signin.

## Technologies Used

- **Frontend**: React, Axios, React Router
- **Backend**: NestJS, TypeScript, MongoDB, Mongoose, JWT (JSON Web Token)
- **Authentication**: JWT

## Setup Instructions

1. **Navigate to the backend directory:**
   ```sh
   cd backend
   npm install
   docker compose up easygenerator-db -d
   ```
2. **Navigate to the frontend directory:**
   ```sh
   cd auth-module
   npm install
   npm run start
   ```
## Directory Structure
1. **Frontend:**
   ```
   |-- .gitignore
   |-- README.md
   |-- package-lock.json
   |-- package.json
   |-- public
   |   |-- favicon.ico
   |   |-- index.html
   |   |-- logo192.png
   |   |-- logo512.png
   |   |-- manifest.json
   |   |-- robots.txt
   |-- src
   |   |-- App.css
   |   |-- App.js
   |   |-- component
   |   |   |-- AuthForm.jsx
   |   |   |-- ProtectedRoute.jsx
   |   |-- index.css
   |   |-- index.js
   |   |-- pages
   |   |   |-- Home.jsx
   |   |   |-- Login.jsx
   |   |   |-- Signup.jsx
   |   |-- utils
   |   |   |-- auth.service.js
   |   |   |-- constants.js
   ```
2. **Backend:**
```|-- .eslintrc.js
   |-- .gitignore
   |-- .prettierrc
   |-- README.md
   |-- docker-compose.yml
   |-- nest-cli.json
   |-- package-lock.json
   |-- package.json
   |-- prisma
   |   |-- schema.prisma
   |-- src
   |   |-- app.module.ts
   |   |-- auth
   |   |   |-- auth.controller.ts
   |   |   |-- auth.module.ts
   |   |   |-- auth.service.ts
   |   |   |-- decorator
   |   |   |   |-- get-user.decorator.ts
   |   |   |   |-- index.ts
   |   |   |-- dto
   |   |   |   |-- auth.dto.ts
   |   |   |   |-- index.ts
   |   |   |-- guard
   |   |   |   |-- index.ts
   |   |   |   |-- jwt.guard.ts
   |   |   |-- strategy
   |   |   |   |-- index.ts
   |   |   |   |-- jwt.strategy.ts
   |   |-- main.ts
   |   |-- prisma
   |   |   |-- prisma.module.ts
   |   |   |-- prisma.service.ts
   |   |-- user
   |   |   |-- dto
   |   |   |   |-- edit-user.dto.ts
   |   |   |   |-- index.ts
   |   |   |-- user.controller.ts
   |   |   |-- user.module.ts
   |   |   |-- user.service.ts
   |-- test
   |   |-- app.e2e-spec.ts
   |   |-- jest-e2e.json
   |-- tsconfig.build.json
   |-- tsconfig.json
   ```

## Future Enhancements
- Implement state management tool for proper state managements.
- Implement Logger on the backend
