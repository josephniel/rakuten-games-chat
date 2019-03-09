from flask import request
from flask_socketio import emit

from app.bootstrap import socketio
from app.logger import logger


SESSIONS = {}


def add_user_session() -> None:
    SESSIONS[request.sid] = None


def add_username(name: str) -> None:
    SESSIONS[request.sid] = name


def remove_user_session() -> None:
    SESSIONS.pop(request.sid)


def emit_update_active_users() -> None:
    emit(
        'update_active_users',
        {'active_users': list(SESSIONS.values())},
        broadcast=True
    )


@socketio.on('connect')
def client_connected() -> None:
    add_user_session()
    emit('username_requested')
    logger.info("Client connected.")


@socketio.on('add_username')
def on_add_username(data) -> None:
    if data['username'] in SESSIONS.values():
        emit('username_taken')
    else:
        add_username(data['username'])
        emit_update_active_users()
        emit('username_valid')


@socketio.on('disconnect')
def client_disconnected() -> None:
    remove_user_session()
    emit_update_active_users()
    logger.info("Client disconnected.")
