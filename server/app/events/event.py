from flask_socketio import emit

from app.bootstrap import socketio


@socketio.on('my event')
def test_message(message):
    emit('my response', {'data': 'got it!'})
