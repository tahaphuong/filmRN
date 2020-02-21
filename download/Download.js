import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Image, Keyboard } from 'react-native';

import { sHome, sSearch } from '../styleFilm';
import firebase from 'react-native-firebase';
import GLOBAL from '../global'

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: GLOBAL.authScreen.state.user,
      list: GLOBAL.authScreen.state.list
    }
  }

  componentDidMount = () => {
    
  }
  
  getFullData = id => {
    this.props.navigation.navigate('DetailsFilm', {filmID: id, dataSrc: ''})
  }


  render() {
  GLOBAL.downloadScreen = this
  let list = GLOBAL.authScreen.state.list.map((val, key)=> {
    let poster = val.Poster != 'N/A' ? val.Poster : 'https://i.pinimg.com/originals/72/24/f6/7224f6d53614cedbf8cef516b705a555.jpg'
    return <TouchableOpacity key={key} style={sSearch.posterGridElement} onPress={()=>this.getFullData(val.imdbID)}><Image source={{uri: poster}} style={sHome.imgPosterScroll}/><Text style={sHome.posterName}>{val.Title}</Text></TouchableOpacity>
  })

    return(
      <View>
        <View style={sHome.hotPosterTitleCon}><Text style={sHome.listPosterTitle}>{this.state.user.displayName}'s movies list</Text></View>

        <ScrollView style={sSearch.scrollerResult}>
          <View style={sSearch.posterGrid}>{list}</View>
        </ScrollView>
      </View>
    );
  }
}