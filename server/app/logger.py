import logging

from app.config import LOG_LEVEL


def get_logger(name: str) -> logging.Logger:
    new_logger = logging.getLogger(name)
    new_logger.setLevel(LOG_LEVEL)

    if not new_logger.handlers:
        handler = logging.StreamHandler()
        handler.setFormatter(logging.Formatter(
            '[%(levelname)s][%(asctime)-15s] %(message)s'
        ))
        handler.setLevel(LOG_LEVEL)
        new_logger.addHandler(handler)

    return new_logger


logger = get_logger('rakuten-games-chat')
