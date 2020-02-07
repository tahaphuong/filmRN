import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';

import { Text, View, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import { styles } from '../LoginStyle';
import App from '../../../App';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

import { s } from '../HomeStyle';

class Offers extends Component {
  render() {
    return(
      <SafeAreaView style={s.bigScreen}>
  
        <View>
          <View style={styles.loginInput}>
            <TextInput style={styles.textLoginInput} placeholder="Search foods"/>
          </View>
        </View>

        <ScrollView>
          <View style={s.boxRes}>
            <View style={s.imgResVer}></View>
            <View><Text style={s.titleRes}>This restaurant is cursed</Text></View>
            <View><Text style={s.infoRes}>4.5 (787 ratings) Cafe / Restaurant </Text></View>
          </View>
          
          <View style={s.boxRes}>
            <View style={s.imgResVer}></View>
            <View><Text style={s.titleRes}>This restaurant is cursed</Text></View>
            <View><Text style={s.infoRes}>4.5 (787 ratings) Cafe / Restaurant </Text></View>
          </View>

          <View style={s.boxRes}>
            <View style={s.imgResVer}></View>
            <View><Text style={s.titleRes}>This restaurant is cursed</Text></View>
            <View><Text style={s.infoRes}>4.5 (787 ratings) Cafe / Restaurant </Text></View>
          </View>
        </ScrollView>

      </SafeAreaView>
    );
  }
}



export default Offers;