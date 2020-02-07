import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';

import { Text, View, Button, SafeAreaView, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import { styles } from '../LoginStyle';
import App from '../../../App'

class Restaurants extends Component {
  state = {
    data: [
      {
        id: '1',
        name: '11'
      },
      {
        id: '2',
        name: '22'
      },
      {
        id: '3',
        name: '33'
      },
      {
        id: '4',
        name: '44'
      },
      {
        id: '5',
        name: '55'
      }
    ],
    moreData: [
      {
        id: '6',
        name: '66'
      },
      {
        id: '7',
        name: '77'
      }
    ],
    loading: false
  }

  renderItem = ({item,index}) => {
  return <Text>{item.name}</Text>
  };

  keyExtractor = (item, index) => index.toString();

  loadMore = (distanceFromEnd) => {
    console.log(distanceFromEnd)
    const tempArr = [...this.state.data]
    const tempMore = [...this.state.moreData]
    const allArr = tempArr.concat(tempMore)

    this.setState({data: allArr})
  }
  
  refresh = () => {
    this.setState({loading:true})
    setTimeout(()=>{
    this.setState({loading:false})
    },1000)
  }
  render() {
    return (
      
			<View>
        <FlatList 
        onRefresh={this.refresh}
        refreshing={this.state.loading}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        onEndReachedThreshold={0,1}
        onEndReached={this.loadMore}
        />
      </View>
		);
  } 
}

export default Restaurants;