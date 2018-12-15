import io from 'socket.io-client';

const socket = io('http://localhost:8000/');

socket.open()
// socket.close()

socket.on('connect', () => {
	console.log('connect')
});

export const ioLogin = (username) => socket.emit('userLogin', username);
export const ioSendMsg = (msg) => socket.emit('userMsg', msg);
export const ioRecMsg = (fn)=> socket.on('RecMsg',fn)