import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { sHome } from '../styleFilm'
 
export default class DetailsHotFilm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      addToList: '✓ Added to list',
    }
  };
	
  render() {
    return (
        <View style={sHome.flex1}>
          <View style={sHome.posterBigCon}>
            <Image style={sHome.posterBig} source={require('../photosFilmApp/png/silence.png')}/>
          </View>

          <View>
            <View style={sHome.infoCon}>
              <View style={sHome.infoPosterYearCon}><Text style={sHome.infoPosterYear}>2005 - psychological | horror</Text></View>
              <View style={sHome.titlePosterCon}><Text style={sHome.titlePoster}>The Silence Of The Lambs</Text></View>

              <View style={sHome.playButtons}>
                <TouchableOpacity style={[sHome.buttonCon, sHome.watchMovieCon]}><Text style={sHome.playButtonText}>▷ Watch </Text></TouchableOpacity>
                <TouchableOpacity style={[sHome.buttonCon]}><Text style={sHome.playButtonText}>{this.state.addToList}</Text></TouchableOpacity>
              </View>

              <View style={sHome.infoPosterYearCon}><Text style={sHome.infoContent}>The Silence of the Lambs is a 1991 American film directed by Jonathan Demme from a screenplay written by Ted Tally, adapted from Thomas Harris's 1988 novel of the same name.</Text></View>
            </View>
            
          </View>

          
        </View>
		);
  } 
}


