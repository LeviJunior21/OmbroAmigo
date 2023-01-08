import { io, Socket } from 'socket.io-client';

const socket = io.connect("http://localhost:4000");
export { socket }