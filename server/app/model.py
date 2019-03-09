from typing import Optional

from bson.objectid import ObjectId

from app.bootstrap import mongo


class User:
    collection = mongo.db.user

    @staticmethod
    def get(user_id: str) -> Optional[dict]:
        return User.collection.find_one({'_id': ObjectId(user_id)})

    @staticmethod
    def create(name: str) -> ObjectId:
        user_record = User.collection.insert_one({'name': name})
        return user_record.inserted_id
