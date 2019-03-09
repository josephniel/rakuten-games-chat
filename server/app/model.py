from datetime import datetime
from typing import Iterator, Optional

from app.bootstrap import mongo


class Message:
    collection = mongo.db.message

    @staticmethod
    def get(username: str) -> Optional[dict]:
        return Message.collection.find({'name': username})

    @staticmethod
    def find(limit: int, offset: int) -> Iterator[dict]:
        cursor = Message.collection.find().sort([
            ('timestamp', 1)
        ]).skip(offset).limit(limit)
        for row in cursor:
            yield row

    @staticmethod
    def create(username: str, content: str) -> dict:
        message = {
            'name': username,
            'content': content,
            'timestamp': datetime.now()
        }
        Message.collection.insert_one(message)
        return message
