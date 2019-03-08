import os


SERVER_HOST = os.getenv('SERVER_HOST', '0.0.0.0')
SERVER_PORT = int(os.getenv('SERVER_PORT', 30001))
DEBUG = bool(os.getenv('DEBUG', False))
