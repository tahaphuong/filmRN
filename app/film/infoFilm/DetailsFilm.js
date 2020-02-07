import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { sHome } from '../styleFilm';

import firebase from 'react-native-firebase';
import GLOBAL from '../global'

import LoadingLogo from '../auth/LoadingLogo'
 
export default class DetailsFilm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      disabledButton: false,
      addToList: 'Add to list',
      dataSrc: this.props.navigation.state.params.dataSrc,
      user: GLOBAL.authScreen.state.user
    }
  };

componentDidMount = () => {
  let list = GLOBAL.authScreen.state.list;

  if (list.length) {
    for (let i=0; i<list.length; i++) {
      if(list[i].imdbID == this.state.dataSrc.imdbID) {
        this.setState({...this.state, addToList: '✓ In your list'})
        return;
      } 
    }
  } 
}
  
toggleToList = async () => {
    // let data;
    // await firebase.firestore()
    //   .collection('users')
    //   .doc(this.state.user.email)
    //   .get()
    //   .then(doc=>{
    //     if (doc.exists) {
    //       data = doc.data().films
    //     } else {
    //       console.log('no data!')
    //     }
    //   })
    //   .catch(err=>{console.log(err.message)})
  
  // Disable button
  this.setState({...this.state, disabledButton: true})

  // Declare object film
  let thisFilm = {
    imdbID: this.state.dataSrc.imdbID,
    Poster: this.state.dataSrc.Poster,
    Title: this.state.dataSrc.Title
  };
  
  // get data from GLOBAL
  let list = GLOBAL.authScreen.state.list;
  

  if (list || list.length) {
    for (let i=0; i<list.length; i++) {
      if(list[i].imdbID == thisFilm.imdbID) {

        // 1. Update UI
        this.setState({...this.state, addToList: 'Add to list'})

        // 2. Update GLOBAL
        list.splice(i, 1)
        GLOBAL.authScreen.setState({...GLOBAL.authScreen.state, list: list})

        // 3. Update Download list
        await GLOBAL.downloadScreen.forceUpdate()

        // 4. Update firestore
        await firebase.firestore()
        .collection('users')
        .doc(this.state.user.email)
        .update({films: list})
        // .update({films: firebase.firestore.FieldValue.arrayRemove(list[i])})

        return;
      } 
    }
  } else {
    this.setState({...this.state, addToList: 'Add to list'})
  }
    
  
  if (this.state.addToList=='Add to list') {

    // 1. Update UI
    this.setState({...this.state, addToList: '✓ In your list'})

    // 2. Update GLOBAL
    list.push(thisFilm)
    GLOBAL.authScreen.setState({...GLOBAL.authScreen.state, list: list})

    // 3. Update Download list
    await GLOBAL.downloadScreen.forceUpdate()

    // 4. Update firestore
    await firebase.firestore()
    .collection('users')
    .doc(this.state.user.email)
    .update({films: list})
    // .update({films: firebase.firestore.FieldValue.arrayUnion(thisFilm)})
  } 

  // Enable button
  this.setState({...this.state, disabledButton: false})
}
  
  render() {
    // data of the film 
    const data = this.state.dataSrc

    // add alternative poster
    let poster;
    if (data.Poster != 'N/A') {poster = data.Poster} else {poster = 'https://i.pinimg.com/originals/72/24/f6/7224f6d53614cedbf8cef516b705a555.jpg'}

    if (data) {
      return (
        <View style={sHome.flex1}>
          <View style={sHome.posterBigCon}>
            <Image style={sHome.posterBig} source={{uri: poster}}/>
          </View>

          <View>
            <View style={sHome.infoCon}>
              <View><Text style={sHome.infoPosterYear}>{data.Year} - {data.Genre}</Text></View>
              <View><Text style={sHome.titlePoster}>{data.Title}</Text></View>

              <View style={sHome.playButtons}>
                <TouchableOpacity style={[sHome.buttonCon, sHome.watchMovieCon]}><Text style={sHome.playButtonText}>▷ Watch </Text></TouchableOpacity>
                <TouchableOpacity style={[sHome.buttonCon]} disable={this.state.disabledButton} onPress={()=>this.toggleToList()}><Text style={sHome.playButtonText}>{this.state.addToList}</Text></TouchableOpacity>
              </View>
              <View style={sHome.infoPosterYearCon}><Text style={sHome.infoContent}>{data.Plot}</Text></View>
              <View style={sHome.infoPosterYearCon}><Text><Text style={sHome.playButtonText}>Runtime: </Text><Text style={sHome.infoContent}>{data.Runtime}</Text></Text></View>
              <View style={sHome.infoPosterYearCon}><Text><Text style={sHome.playButtonText}>Actors: </Text><Text style={sHome.infoContent}>{data.Actors}</Text></Text></View>

            </View>
          </View>
          
        </View>
      );
    } else {
      return <LoadingLogo/>
    }
  } 
}


