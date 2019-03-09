from datetime import datetime

from bson import json_util
from flask_socketio import emit

import json

from app.bootstrap import socketio
from app.events.session import get_username_by_session_id
from app.logger import logger
from app.model import Message


def emit_load_messages(page: int) -> None:
    messages = list(Message.find(page))
    emit(
        'load_chat_messages',
        json.dumps({
            'messages': messages,
        }, default=json_util.default),
        broadcast=True,
    )


def emit_new_message(username: str, content: str, timestamp: datetime) -> None:
    emit(
        'add_chat_message',
        json.dumps({
            'username': username,
            'message': content,
            'timestamp': timestamp,
        }, default=json_util.default),
        broadcast=True,
    )


@socketio.on('retrieve_messages')
def on_load_chat_messages(data) -> None:
    emit_load_messages(data['page'])


@socketio.on('send_message')
def on_send_message(data) -> None:
    logger.info('Message received from %s', data['sid'])
    message = Message.create(
        username=get_username_by_session_id(data['sid']),
        content=data['message'],
    )
    emit_new_message(
        username=message['name'],
        content=message['content'],
        timestamp=message['timestamp'],
    )
