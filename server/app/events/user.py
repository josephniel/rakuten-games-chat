from flask import request
from flask_socketio import emit

from app.bootstrap import socketio
from app.events.message import emit_load_messages
from app.logger import logger
from app.session import (
    add_user_session,
    add_username,
    get_active_users,
    remove_user_session,
)


def emit_update_active_users() -> None:
    emit(
        'update_active_users',
        {'active_users': get_active_users()},
        broadcast=True
    )


@socketio.on('connect')
def client_connected() -> None:
    add_user_session()
    emit('username_requested')
    logger.info("Client connected.")


@socketio.on('disconnect')
def client_disconnected() -> None:
    remove_user_session()
    emit_update_active_users()
    logger.info("Client disconnected.")


@socketio.on('add_username')
def on_add_username(data) -> None:
    if data['username'] in get_active_users():
        emit('username_taken')
    else:
        add_username(data['username'])
        emit_update_active_users()
        emit_load_messages(0)
        emit('username_valid', {'sid': request.sid})
