import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, ImageBackground, Alert } from 'react-native';

import { sHome } from '../styleFilm'
import { ThemeContext } from 'react-navigation';
import LoadingLogo from '../auth/LoadingLogo';
import firebase from 'react-native-firebase';

 
export default class Film extends Component {

  constructor(props) {
    super(props)
    this.state = {
      trending: ['glass', '1917', 'frozen+ii', 'parasite'],
      popular: ['jaws', 'ted', 'avengers%3Aendgame', 'it'],
      
      loading: true,

      trendingData: [],
      popularData: [],
    }
  };


  componentDidMount() {

    // get Data for each film title
    function getData (films, environment, category, lastLoad) {
      let list = []
      for (let film of films) {
        fetch('http://www.omdbapi.com/?t=' + film + '&apikey=1f641348')
        .then(res=>res.json())
        .then(resJson=>{
          list = list.concat(resJson)
          if (list.length == films.length) {
            environment.setData(list, category, lastLoad)
          }
        })
      
      }
    }

    getData(this.state.trending, this, 'trending');
    getData(this.state.popular, this, 'popular', true);
  }

  setData = (list, category, lastLoad) => {
    switch (category) {
      case 'trending': 
        this.setState({
          ...this.state,
          trendingData: list
        })
        break;
      
      case 'popular': 
        this.setState({
          ...this.state,
          popularData: list
        })
        break;
    }
    
    if (lastLoad) {
      this.setState({
        ...this.state,
        loading: false,
      })
    }
  }
  checkEnvironment = () => {console.log('this environment')}
  render() {

    if (this.state.loading) {return <LoadingLogo/>}
    else {
    let trendings = this.state.trendingData.map((val, key)=>{
    return <TouchableOpacity key={key} onPress={()=>this.props.navigation.navigate('DetailsFilm', {dataSrc: val, filmID: val.imdbID})} style={sHome.posterScroll}><Image source={{uri: val.Poster}} style={sHome.imgPosterScroll}/><Text style={sHome.posterName}>{val.Title}</Text></TouchableOpacity>
    });

    let populars = this.state.popularData.map((val, key)=>{
      return <TouchableOpacity key={key} onPress={()=>this.props.navigation.navigate('DetailsFilm', {dataSrc: val, filmID: val.imdbID})} style={sHome.posterScroll}><Image source={{uri: val.Poster}} style={sHome.imgPosterScroll}/><Text style={sHome.posterName}>{val.Title}</Text></TouchableOpacity>
    });

    return(
      <View>
        <View style={sHome.hotPoster}>
          <ImageBackground style={[sHome.posterBig]} source={require('../photosFilmApp/png/silence.png')}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailsHotFilm')} style={[sHome.posterDarkFilter, sHome.hotPosterImg]}>
            <View style={sHome.nowTrendingCon}><Text style={sHome.nowTrendingText}>NOW TRENDING</Text></View>
            <View style={sHome.hotPosterTitleCon}><Text style={sHome.hotPosterTitle}>The silence of the lamb</Text></View>
            <View style={sHome.nowTrendingCon}><Text><Text style={sHome.hotPosterInfoText}>2h 20min </Text><Text style={sHome.hotPosterInfoText}>| </Text><Text style={sHome.hotPosterInfoText}>Horror</Text></Text></View>
          </TouchableOpacity>
          </ImageBackground>
        </View>
        <View>
          <View style={sHome.hotPosterTitleCon}><Text style={sHome.listPosterTitle}>premiere</Text></View>
            <ScrollView style={sHome.posterScroller} horizontal={true} nestedScrollEnabled={true} showsHorizontalScrollIndicator={false}> 
              {trendings}
            </ScrollView>
        </View>

        <View> 
          <View style={sHome.hotPosterTitleCon}><Text style={sHome.listPosterTitle}>popular</Text></View>
          <ScrollView style={sHome.posterScroller} horizontal={true} nestedScrollEnabled={true} showsHorizontalScrollIndicator={false}> 
            {populars}
          </ScrollView>
        </View>

      </View>
    );
  }
  } 
}

