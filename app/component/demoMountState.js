import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, BackHandler, Image, ImageBackground } from 'react-native'
import { styles } from '../../App';
import App from '../../App';

export default class Login extends Component {
  constructor(props) {
			super(props)
			this.state={
				number:0
			}
	}
	componentDidMount() {
		this.setState({number:1})
	}
	clickMe = () => {
		this.setState({number:2})
	};
	render() {
		return(
			<SafeAreaView>
				<Text>hh</Text>
			</SafeAreaView>
		);
	}
}