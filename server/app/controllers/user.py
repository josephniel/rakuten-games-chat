from bson.json_util import dumps
from bson.objectid import ObjectId

from flask import Response
from flask.views import MethodView
from marshmallow import fields
from webargs.flaskparser import use_kwargs

from app.model import database
from app.router import route


@route('/users/<string:user_id>', 'user-entrypoint')
class UserAPI(MethodView):

    @staticmethod
    def get(user_id: str) -> Response:
        user_record = database.sample.find_one_or_404({
            '_id': ObjectId(user_id)
        })
        return dumps(user_record)


@route('/users', 'user-create-entrypoint')
class UserCreateAPI(MethodView):

    @staticmethod
    @use_kwargs({
        'name': fields.String(required=True)
    })
    def post(name: str) -> Response:
        user_record = database.sample.insert_one({'name': name})
        return dumps(user_record.inserted_id)
