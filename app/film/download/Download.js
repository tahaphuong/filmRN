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
    fetch('http://www.omdbapi.com/?i=' + id + '&apikey=1f641348')
    .then(res=>res.json())
    .then(resJson=>this.props.navigation.navigate('DetailsFilm', {dataSrc: resJson}))
  }


  render() {
  GLOBAL.downloadScreen = this
  let list = GLOBAL.authScreen.state.list.map((val, key)=> {
    // console.log(val, key)
    return <TouchableOpacity key={key} style={sSearch.posterGridElement} onPress={()=>this.getFullData(val.imdbID)}><Image source={{uri: val.Poster}} style={sHome.imgPosterScroll}/><Text style={sHome.posterName}>{val.Title}</Text></TouchableOpacity>
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