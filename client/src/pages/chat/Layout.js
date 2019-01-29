import React, { Component } from 'react';
import io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT, VERIFY_USER } from '../../utility/Events'
import LoginForm from './LoginForm'
import ChatContainer from '../../components/chat/chats/ChatContainer'
import './index.css';
import {Redirect} from 'react-router';


let socketUrl = "http://tbl-chat1.herokuapp.com";

// if (process.env.NODE_ENV === 'production') {
// 	socketUrl = "https://codepal-plm.herokuapp.com/"
// } else {
// 	socketUrl = "http://localhost:3001"
// }
export default class Layout extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	socket:null,
		  user:null,
		  redirect: false,
		  registeredUser: this.props.userInfo.nickname
	  };
	}

	componentWillMount() {
		this.initSocket()
	}
	componentDidMount() {
		// this.checkLogin(this.props.userInfo.nickname)
	}

	/*
	*	Connect to and initializes the socket.
	*/
	initSocket = ()=>{
		const socket = io(socketUrl)
		console.log(socketUrl)

		socket.on('connect', ()=>{
			if(this.state.user){
				this.reconnect(socket)
			}else{
				console.log("connected")
			}
		})
		
		this.setState({socket})
	}

	checkLogin = (user) => {
		if(user) {
			this.setUser(user)
		}
	}

	/*
	* 	Sets the user property in state 
	*	@param user {id:number, name:string}
	*/	
	setUser = (user)=>{
		const { socket } = this.state
		socket.emit(USER_CONNECTED, user);
		this.setState({user})
	}
	/**
	 * Reverifies user with socket and then resets user.
	 */
	reconnect = (socket) => {
		socket.emit(VERIFY_USER, this.state.user.name, ({ isUser, user })=>{
			if(isUser){
				this.setState({ user:null })
			}else{
				this.setUser(user)
			}
		})
	}

	/*
	*	Sets the user property in state to null.
	*/
	logout = ()=>{
		const { socket } = this.state
		socket.emit(LOGOUT)
		this.setState({user:null, redirect: true})
	}


	render() {
		const { socket, user } = this.state
		if(this.state.redirect) {
			return <Redirect to='/home' />
		}
		return (
			<div className="container-chat">
				{
					!user ?	
					<LoginForm socket={socket} setUser={this.setUser} registeredUser={this.state.registeredUser} />
					:
					<ChatContainer socket={socket} user={user} logout={this.logout}/>
				}
			</div>
		);
	}
}
