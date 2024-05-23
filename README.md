# **URL Shortener Frontend Application**

### Table of content 📚

1. [**Overview**](#overview-👀)
2. [**Technologies**](#technologies-🛠️)
3. [**Project objectives**](#project-objectives-🎯)
4. [**Documentation**](#documentation-🔍)
5. [**Installation**](#installation-📥)

### **Overview** 👀

The URL Shortener project aims to develop the frontend for an API that allows users to shorten long URLs into concise, shareable links.

### **Features** 🚀

1. **URL Shortening:**
   - Users can input URLs into the application.
   - The application generates a unique, shortened URL for each inputted long URL.
   - Shortened URLs redirect users to the original long URLs when accessed.
2. **RESTful API:**
   - The application provides a RESTful API that allows developers to integrate URL shortening and analytics functionalities into their own applications or services.
   - API endpoints include URL shortening, retrieving analytics data, and managing user accounts.

### **Technologies** 🛠️

- **Frontend:** React.js, react-hook-form, Zod
- **Backend:** Node.js, Express.js, Prisma ORM, Jest & supertest
- **Deployment:** Docker with internal network
- **Database:** Postgres
- **CI**: Throw github actions and custom workflow before merge to main
- **API Documentation:** Postman

### **Project Objectives** 🎯

- Develop a user-friendly web API with an intuitive interface for URL shortening and analytics.
- Implement robust backend functionalities and error catching.
- Provide comprehensive API documentation for developers interested in integrating the application's functionalities into their projects.

### API Documentation 🔍

https://documenter.getpostman.com/view/32838257/2sA2rB12vH

### Installation 📥

It is important to follow the steps, as db must be started in order for the app to perform the db migrations.

1. `CLONE` the backend repository

   `https://github.com/JoseSzycho/url-shortener.git`

2. `Set .env file`, use '.env.example' as guidance

3. `Compose` the app

   `docker compose up -d`

4. `CLONE` the frontend repository

   `https://github.com/facuperezm/url`

5. `Navigate` to the frontend directory

   ```sh
   cd url
   ```

6. `Install dependencies` using pnpm (ensure you have pnpm installed; if not, install it using `npm install -g pnpm`)

   ```sh
   pnpm install
   ```

7. `Start` the frontend application

   ```sh
   pnpm dev
   ```

8. `Have fun`
