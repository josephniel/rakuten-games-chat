from flask import Response
from flask.views import MethodView

from app.router import route


@route('/ping', 'ping-entrypoint')
class PingAPI(MethodView):

    @staticmethod
    def get() -> Response:
        return "pong"
