import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';

import { Text, View, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import { styles } from '../LoginStyle';
import App from '../../../App'
import { TextInput, ScrollView } from 'react-native-gesture-handler';

import { s } from '../HomeStyle'

class Restaurants extends Component {
  render() {
    return(
      <SafeAreaView style={s.bigScreen}>
        <View style={s.titleHeader}>
          <Text style={s.deliveringTo}>Delivering to</Text>
          <Text style={s.currentLocationTitle}>Current location</Text>
        </View>

        <View style={{marginBottom: '3%'}}>
          <View style={styles.loginInput}>
            <TextInput style={styles.textLoginInput} placeholder="Search foods"/>
          </View>
        </View>

        <ScrollView style={s.scrollCate} horizontal={true} showsHorizontalScrollIndicator={false}>
          
          <View style={s.boxResCon}><View style={s.boxCate}></View></View>
          <View style={s.boxResCon}><View style={s.boxCate}></View></View>
          <View style={s.boxResCon}><View style={s.boxCate}></View></View>
          <View style={s.boxResCon}><View style={s.boxCate}></View></View>
          <View style={s.boxResCon}><View style={s.boxCate}></View></View>

        </ScrollView>

        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>

          <View style={s.boxRes}>
            <View style={s.imgRes}></View>
            <View><Text style={s.titleRes}>This restaurant is cursed</Text></View>
            <View><Text style={s.infoRes}>4.5 (787 ratings) Cafe / Restaurant </Text></View>
          </View>
          
          <View style={s.boxRes}>
            <View style={s.imgRes}></View>
            <View><Text style={s.titleRes}>This restaurant is cursed</Text></View>
            <View><Text style={s.infoRes}>4.5 (787 ratings) Cafe / Restaurant </Text></View>
          </View>

          <View style={s.boxRes}>
            <View style={s.imgRes}></View>
            <View><Text style={s.titleRes}>This restaurant is cursed</Text></View>
            <View><Text style={s.infoRes}>4.5 (787 ratings) Cafe / Restaurant </Text></View>
          </View>
        </ScrollView>

      </SafeAreaView>
    );
  }
}



export default Restaurants;