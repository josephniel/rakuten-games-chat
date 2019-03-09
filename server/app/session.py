from typing import List

from flask import request


SESSIONS = {}


def add_user_session() -> None:
    SESSIONS[request.sid] = None


def add_username(name: str) -> None:
    SESSIONS[request.sid] = name


def remove_user_session() -> None:
    SESSIONS.pop(request.sid)


def get_username_by_session_id(session_id: str) -> None:
    return SESSIONS[session_id]


def get_active_users() -> List[str]:
    return list(SESSIONS.values())
