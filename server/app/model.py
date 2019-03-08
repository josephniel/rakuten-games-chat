from typing import NamedTuple

from app.bootstrap import mongo


database = mongo.db


class User(NamedTuple):
    name: str


class Message(NamedTuple):
    user: User
    message: str
