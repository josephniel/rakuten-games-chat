import os


SERVER_HOST = os.getenv('SERVER_HOST', '0.0.0.0')
SERVER_PORT = int(os.getenv('SERVER_PORT', 30001))
DEBUG = bool(os.getenv('DEBUG', True))
LOG_LEVEL = os.getenv('LOG_LEVEL', 'INFO')

MONGODB_URI = 'mongodb://{user}:{password}@{host}:{port}/{database}'.format(
    user=os.getenv('MONGODB_USERNAME'),
    password=os.getenv('MONGODB_PASSWORD'),
    host=os.getenv('MONGODB_HOST'),
    port=os.getenv('MONGODB_PORT'),
    database=os.getenv('MONGODB_DATABASE'),
)

DEFAULT_MESSAGES_LIMIT = 1
