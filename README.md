# GraphQL Server Example

A simple GraphQL server built with Apollo Server that demonstrates basic GraphQL concepts with a gaming-themed schema.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Schema](#schema)
- [API Queries](#api-queries)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project is a basic GraphQL server implementation that provides a foundation for understanding GraphQL concepts. It includes a schema for managing games, reviews, and authors with their relationships.

## ✨ Features

- **GraphQL Server**: Apollo Server implementation
- **Type-safe Schema**: Strongly typed GraphQL schema definitions
- **Gaming Domain**: Real-world example with games, reviews, and authors
- **Standalone Server**: Ready-to-run server configuration
- **Modern JavaScript**: ES6 modules support

## 🛠 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory):

   ```bash
   cd GraphQL
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🚀 Usage

### Starting the Server

Run the following command to start the GraphQL server:

```bash
npm start
```

The server will start on **http://localhost:4000** and you'll see:

```
Server ready at: http://localhost:4000/
```

### Accessing GraphQL Playground

Once the server is running, you can access the Apollo Studio sandbox by navigating to:

```
http://localhost:4000/
```

This provides an interactive GraphQL playground where you can test queries and explore the schema.

## 📊 Schema

The GraphQL schema includes three main types:

### Types

#### Game

```graphql
type Game {
  id: ID!
  title: String!
  platform: [String!]!
}
```

#### Review

```graphql
type Review {
  id: ID!
  rating: Int!
  content: String!
}
```

#### Author

```graphql
type Author {
  id: ID!
  name: String!
  verified: Boolean!
}
```

### Root Query

```graphql
type Query {
  reviews: [Review]
  games: [Game]
  authors: [Author]
}
```

## 🔍 API Queries

Here are some example queries you can run in the GraphQL playground:

### Get All Games

```graphql
query {
  games {
    id
    title
    platform
  }
}
```

### Get All Reviews

```graphql
query {
  reviews {
    id
    rating
    content
  }
}
```

### Get All Authors

```graphql
query {
  authors {
    id
    name
    verified
  }
}
```

## 📁 Project Structure

```
GraphQL/
├── index.js          # Main server file with Apollo Server setup
├── schema.js         # GraphQL type definitions
├── package.json      # Project dependencies and scripts
├── package-lock.json # Exact dependency versions
└── README.md         # Project documentation
```

### File Descriptions

- **`index.js`**: Entry point that sets up and starts the Apollo GraphQL server
- **`schema.js`**: Contains all GraphQL type definitions and schema structure
- **`package.json`**: Defines project metadata, dependencies, and npm scripts

## 🛠 Technologies Used

- **[Apollo Server](https://www.apollographql.com/docs/apollo-server/)** (v5.0.0) - GraphQL server implementation
- **[GraphQL](https://graphql.org/)** (v16.11.0) - Query language and runtime
- **Node.js** - JavaScript runtime environment
- **ES6 Modules** - Modern JavaScript module system

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development Notes

- This is a basic example server without resolvers implementation
- To make the queries functional, you'll need to add resolvers for each query type
- The server currently serves the schema but doesn't return actual data
- Consider adding data sources and resolver functions for a complete implementation

## 🔮 Next Steps

To extend this project, consider:

- Adding resolver functions to return actual data
- Implementing a database connection
- Adding mutations for creating/updating data
- Adding relationships between types (games ↔ reviews ↔ authors)
- Adding authentication and authorization
- Implementing real-time subscriptions

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

If you have any questions or run into issues, please feel free to open an issue in the repository.

---

**Happy Coding! 🚀**
