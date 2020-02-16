import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import firebase from 'react-native-firebase';
import { sProfile } from '../styleFilm'
import { Avatar } from 'react-native-elements';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: firebase.auth().currentUser
    }
  }
  render() {
    let { user } = this.state

    if (!user.photoURL) {
      firebase.auth().currentUser.updateProfile({
        photoURL: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
      })
    }

    return(
      <View>

        <View style={sProfile.userInfo}>
          <TouchableOpacity style={sProfile.avaCon}><Image source={{uri: user.photoURL}} style={sProfile.ava}/></TouchableOpacity>
          <View style={sProfile.displayNameCon}><Text style={sProfile.name}>{user.displayName}</Text></View>
          <View style={sProfile.displayEmailCon}><Text style={sProfile.email}>{user.email}</Text></View>
        </View>

        <View style={sProfile.selectionsCon}>
          <TouchableOpacity style={[sProfile.button, sProfile.buttonBlack]}>
            <Image source={{uri: 'https://icons.iconarchive.com/icons/iconsmind/outline/512/Pen-2-icon.png'}} style={sProfile.selectionsIcon}/>
            <Text style={sProfile.buttonText}>Edit your profile</Text></TouchableOpacity>
          <TouchableOpacity style={[sProfile.button, sProfile.buttonBlack]}>
            <Image source={{uri: 'https://icons-for-free.com/iconfiles/png/512/card+car+card+payment+shopping+card+icon+icon-1320085907830843503.png'}} style={sProfile.selectionsIcon}/>
            <Text style={sProfile.buttonText}>Payment method</Text></TouchableOpacity>
          <TouchableOpacity style={[sProfile.button, sProfile.buttonRed]} onPress={()=>firebase.auth().signOut()}>
            <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/thin-line-color-2/21/05_1-512.png'}} style={sProfile.selectionsIcon}/>
            <Text style={sProfile.buttonTextRed}>Log out</Text></TouchableOpacity>

        </View>


      </View>
    );
  }
}