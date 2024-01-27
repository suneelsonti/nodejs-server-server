# Sample Nodejs server

This is a sample Node.js server to explore the Software Catalog feature of Backstage.

## Overview
This server has two routes: `POST /api/v1/articles` to create a new article and `GET /api/v1/articles` to list all articles. Note that the server is just a dummy app and doesn't save anything in the database. **It only returns dummy data.**

### Running the server
To run the server, run:

```
npm start
```

To view the Swagger UI interface:

```
open http://localhost:5000/docs
```
