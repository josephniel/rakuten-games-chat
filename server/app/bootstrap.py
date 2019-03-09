from flask import Flask
from flask_pymongo import PyMongo
from flask_socketio import SocketIO

from app.config import MONGODB_URI
from app.utils import import_submodules


mongo = PyMongo()
socketio = SocketIO()


def create_app() -> Flask:
    app = Flask(__name__)

    mongo.init_app(app, uri=MONGODB_URI)
    socketio.init_app(app)
    import_submodules('app.events')

    return app
