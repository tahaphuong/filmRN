/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Film from './app/film/Nav/FilmContainer'
import { ThemeProvider, ThemeConsumer } from 'react-native-elements'

const theme = {
  height: 300, 
  width: 200,
}

const OutsideComponent = () => {
  <ThemeConsumer>
    {({theme})=><View style={theme.view}></View>}
  </ThemeConsumer>
}


const App: () => React$Node = () => {

  return (
    <>
    <StatusBar hidden={true} animated={true} showHideTransition="fade" translucent={true} backgroundColor="#ffffff00" barStyle="light-content" />
      <Film />

      <SafeAreaView>
      </SafeAreaView>
    </>
  );
};

export default App;
