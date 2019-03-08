from app.bootstrap import create_app, socketio
from app.config import SERVER_HOST, SERVER_PORT, DEBUG


if __name__ == "__main__":
    app = create_app()
    socketio.run(
        app,
        host=SERVER_HOST,
        port=SERVER_PORT,
        debug=DEBUG,
    )
