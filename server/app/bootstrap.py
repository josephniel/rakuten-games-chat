from flask import Flask
from flask_socketio import SocketIO

from app.router import ROUTES
from app.utils import import_submodules


socketio = SocketIO()


def create_app() -> Flask:
    app = Flask(__name__)

    import_submodules('app.controllers')
    app.url_map.strict_slashes = False
    for route in ROUTES:
        app.add_url_rule(
            route.location,
            view_func=route.view_func,
        )

    socketio.init_app(app)
    import_submodules('app.events')

    return app
