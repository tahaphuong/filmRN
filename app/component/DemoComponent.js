import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, BackHandler, Image, ImageBackground } from 'react-native'
import App from '../../App';

export default class DemoComponent extends Component {
  render() {
		// const [logged, set] = React.useState(false)
		// const [fromName, passFromName] = React.useState('')
		// const [toName, passToName] = React.useState('')
		// const [wishing, passWishing] = React.useState('')
  
    return (
			<SafeAreaView>
				{		// COMMENT: This below wold be written on the main page

            // logged === true ? 
            // <View>
            //   <DemoComponent fromName={fromName} toName={toName} wishing={wishing}/>
            //   <Button title='BaCk To HoMe PaGe' onPress={()=>set(false)}></Button>
            // </View>
            // : 
            // <View>
            //   <Text style={styles.heading}>Create a Happy Birthday postcard!</Text>
            //   <TextInput placeholder='Your name is' onChangeText={(fromName)=>passFromName(fromName)} style={styles.input}/>
            //   <TextInput placeholder='You want to send to' onChangeText={(toName)=>passToName(toName)} style={styles.input}/>
            //   <TextInput placeholder='What you want to say:' multiline={true} numberOfLines={4} onChangeText={(wishing)=>passWishing(wishing)} style={styles.inputLong}/>
            //   {/* <TextInput placeholder='password' secureTextEntry={true} style={{border: 1, borderColor: 'black', borderWidth: 1}}/> */}
            //   <Button title='Create!' style={styles.button} onPress={()=>set(true)}></Button>
            // </View>
          }
				<View>
				<ImageBackground source={{uri: 'https://i.pinimg.com/originals/19/02/de/1902dee17a3cdba55e9847039bdc564d.jpg'}} style={{width: '100%', height: '94%'}}>
					<View style={s.content}>
						<Text style={[s.text, s.name]}>From: {this.props.fromName}</Text>
						<Text style={[s.text, s.name]}>To: {this.props.toName}</Text>
						<Text style={[s.text, s.wishingText]}>{this.props.wishing}</Text>
					</View>
				</ImageBackground>
				</View>
			</SafeAreaView>
			
  	);
  }
}

const s = {
	content: {
		marginTop: '50%'
	},
	text: {
		color: '#5A5B58',
		textAlign: 'center',
		fontSize: 11,
		fontFamily: 'serif',
		letterSpacing: 0.7
	},
	name: {
		fontWeight: 'bold'
	},
	wishingText: {
		marginTop: 20,
		paddingLeft: 30,
		paddingRight: 30,
	}
}
