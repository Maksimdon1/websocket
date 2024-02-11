import {useState, useEffect} from 'react'
import io from "socket.io-client";

const socket = io.connect("http://192.168.1.3:5000"); 

export default function Joystick() {
	return (
		<div>Joystick</div>
	)
}
