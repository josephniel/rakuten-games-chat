# rakuten-games-chat
## Description
This is the take-home exercise of Rakuten Games where we need to fulfill the basic functionalities of a chat application.

## Development
This repository consists of two (2) applications - the client application and the server application. We use `docker-compose` to orchestrate the building and running of the apps:

```
  $ docker-compose build
  $ docker-compose up
```

The build will create a container not just for the client and the server applications but also for MongoDB. MongoDB is the persistent layer of choice for this chat application due to its ease when bootstrapping.

## Application

### Server Application

The server application runs on `Flask` as the base application framework and `Flask-SocketIO` to support websocket events.

### Client Application

The client application is a React application bootstrap from `create-react-app` made by Facebook themselves wherein all the necessary configurations and setup for quick development are taken care of (i.e. Webpack configuration and setup, Babel transpiling, hot reloading; and other niceties for development purpose).
