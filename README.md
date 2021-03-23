> Google Base Application

---

## Prerequisites

- [Node.js] - 14.15.0
- [NPM] - 6.14.8

## Setup

GET the Client Id and Client Secret from google console.
And URL of application in authorized javascript region.
Enable the releavant APIs in goolge console like People API

Make a copy of `.env.example` as `.env` in both backend and frontend directory and update your application details and credentials. 

Build frontend application

    $ cd frontend
    $ npm run build

Finally, start the application.

    $ cd backend
    $ npm start
