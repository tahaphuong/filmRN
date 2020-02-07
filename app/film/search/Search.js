import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Image, Keyboard } from 'react-native';

import { sHome, sSearch } from '../styleFilm';

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: '',
      searchResult: '',
      tooLongKeyWordError: '',
      resultError: '',
      resultLoaded: false,
    }
  }

  passToKeyWord = word => {
    if(word) {
      if (word.trim().length>=30) {
        this.setState({...this.state, tooLongKeyWordError: 'You can only search up to 30 characters'})
      } else {
        this.setState({...this.state, tooLongKeyWordError: '', keyWord: word.trim()})
      }

      this.searchTrigger()
    }
  }

  searchTrigger = async () => {

    await fetch('http://www.omdbapi.com/?s=' + this.state.keyWord + '&apikey=1f641348')
    .then(res=>res.json())
    .then(resJson=>{this.setState({...this.state, searchResult: resJson, resultLoaded: true})})
    .then(console.log(this.state.searchResult))

    if (this.state.searchResult.Response != "True") {
      this.setState({...this.state, resultError: this.state.searchResult.Error})
    } else {
      this.setState({...this.state, resultError: ''})
    }

  }

  searchTriggerAndKeyboardDown = () => {}

  getFullData = id => {
    fetch('http://www.omdbapi.com/?i=' + id + '&apikey=1f641348')
    .then(res=>res.json())
    .then(resJson=>this.props.navigation.navigate('DetailsFilm', {dataSrc: resJson}))
  }


  // clearInput = () => {this.setState({...this.state, keyWord: ''})}
  render() {
    let movieResults;
    let seriesResults;
    let poster;

    if (this.state.resultLoaded) {
      if(this.state.searchResult.Response == "True") {

        movieResults = this.state.searchResult.Search.map((val, key)=> {
          if (val.Type=="movie") {
            if (val.Poster != 'N/A') {poster = val.Poster} else {poster = 'https://i.pinimg.com/originals/72/24/f6/7224f6d53614cedbf8cef516b705a555.jpg'}
            return <TouchableOpacity key={key} style={sSearch.posterGridElement} onPress={()=>this.getFullData(val.imdbID)}><Image source={{uri: poster}} style={sHome.imgPosterScroll}/><Text style={sHome.posterName}>{val.Title}</Text></TouchableOpacity>
          } 
        })

        seriesResults = this.state.searchResult.Search.map((val, key)=> {
          if (val.Type=="series") {
            if (val.Poster.length) {poster = val.Poster} else {poster = 'https://i.pinimg.com/originals/72/24/f6/7224f6d53614cedbf8cef516b705a555.jpg'}
            return <TouchableOpacity key={key} style={sSearch.posterGridElement} onPress={()=>this.getFullData(val.imdbID)}><Image source={{uri: poster}} style={sHome.imgPosterScroll}/><Text style={sHome.posterName}>{val.Title}</Text></TouchableOpacity>
          }
        })
      } 
    }
    return(
      <View>
        <View style={sSearch.searchBarCon}>
          <View style={sSearch.searchBar}>
            <TextInput 
              onChangeText={text=>this.passToKeyWord(text)} 
              placeholder="Search something..." 
              returnKeyLable="search" 
              maxLength={30} 
              style={sSearch.searchText}/>
              {/* <TouchableOpacity onPress={()=>this.clearInput()} style={sSearch.deleteIconCon}>
                <Image source={{uri: 'https://cdn.onlinewebfonts.com/svg/img_417072.png'}} style={sSearch.deleteIcon}/>  
              </TouchableOpacity> */}
          </View>
          <TouchableOpacity onPress={()=>this.searchTrigger()} style={sSearch.searchButton}><Image source={{uri: 'https://cdn.pixabay.com/photo/2014/04/03/00/31/magnifying-glass-308581_960_720.png'}} style={{width: 20, height: 20}}/></TouchableOpacity>
        </View>
        <View style={sSearch.errorSearchBar}><Text style={sSearch.errorMessage}>{this.state.tooLongKeyWordError}</Text></View>

        <ScrollView style={sSearch.scrollerResult}>
          <View style={sHome.hotPosterTitleCon}><Text style={sHome.listPosterTitle}>movies</Text></View>
          <View style={sSearch.posterGrid}>{movieResults}</View>
          <View style={sSearch.errorSearchBar}><Text style={sSearch.errorMessage}>{this.state.resultError}</Text></View>

          <View style={sHome.hotPosterTitleCon}><Text style={sHome.listPosterTitle}>series</Text></View>
          <View style={sSearch.posterGrid}>{seriesResults}</View>

        </ScrollView>
      </View>
    );
  }
}