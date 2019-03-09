from datetime import datetime
from typing import Iterator, Optional

from bson import ObjectId

from app.bootstrap import mongo
from app.config import DEFAULT_MESSAGES_LIMIT


class Message:
    collection = mongo.db.message

    @staticmethod
    def get(message_id: str) -> Optional[dict]:
        return Message.collection.find_one({'_id': ObjectId(message_id)})

    @staticmethod
    def find(
            page: int,
            limit: int = DEFAULT_MESSAGES_LIMIT,
    ) -> Iterator[dict]:
        offset = page * limit
        cursor = Message.collection.find().sort([
            ('timestamp', -1)
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
        result = Message.collection.insert_one(message)
        return result.inserted_id
