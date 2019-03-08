from flask import Response
from flask.views import MethodView

from app.model import database
from app.router import route


@route('/sample', 'sample-entrypoint')
class SampleAPI(MethodView):

    @staticmethod
    def get() -> Response:
        records = []
        cursor = database.sample.find()
        for record in cursor:
            records.append(record)
        return str(records)

    @staticmethod
    def post() -> Response:
        database.sample.insert_one({
            'name': 'Hello',
        })
        return None
