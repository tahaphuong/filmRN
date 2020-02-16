import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';

import { sHome, sSearch } from '../styleFilm';
import { Icon } from 'react-native-elements'


// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
// const SCREEN_WIDTH = width < height ? width : height;

// const isSmallDevice = width <= 200;
// const numColumns = isSmallDevice ? 2 : 3;

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // STRING: save key word here
      keyWord: null,
      // STRING: notify error
      resultError: null,
      // STRING: show search status
      searchStatus: null,

      //OBJECT of objects: result from API. Has different pages
      searchResult: {},
      
      // NUMBER: page searched
      page: 1,


      // OBJECT of objects: an object with props which are film types
      resultsToScreen: null,
      // ARRAY of objects: data loaded on screen (converted into components in flatlist)
      resultsOnScreen: null,
      // ARRAY of strings: list headers. Only re-construct after search || add more element if lazyLoad return new header
      headersCategory: null,

      // STRING: which category/film.type lazy loaded
      lazyLoadType: null,
      // STRING: end of search/error flatlist
      flatListStatus: null,
      // BOOL: list is loading?
      loadingList: false,
    }
  }


  // when user type keywords
  searchTriggerByKeyWord = async word => {

    // 1. set key word
    if(word.trim()) {      
      await this.setState({...this.state, page:1, keyWord: word.trim(), searchStatus: 'searching ' + word.trim() + '...'})

      // 2. call API
      await fetch('http://www.omdbapi.com/?s=' + word.trim() + '&page=1&apikey=1f641348')
      .then(res=>res.json())
      .then(resJson=>{
        if (resJson.Response == "True") {
          // 3. concat search results to state. Start with page 1

          // Save new search results to state
          let search = {}
          search[1] = resJson

          // results to be onscreen
          let resultsToScreen = {};
          // headers to be onscreen
          let headers = [];
    
    
          for (let val of resJson.Search) {  
            if(resultsToScreen.hasOwnProperty(val.Type)) {
              resultsToScreen[val.Type].films.push(val)
            } else {
              resultsToScreen[val.Type] = {films: [val], header: val.Type}
              headers.push(val.Type)
            }
          }

          setTimeout(
          ()=>this.setState({...this.state, 
            searchResult: search, 
            headersCategory: headers.sort(), 

            resultsToScreen: resultsToScreen, 
            resultsOnScreen: resultsToScreen['movie'].films,

            lazyLoadType: 'movie',
            searchStatus: resJson.totalResults + ' found.',
            flatListStatus: ''
          }),800)
        } else {
          setTimeout(
            ()=>this.setState({...this.state, 
            searchStatus: resJson.Error + ' Type another key word', 
            flatListStatus: '',
            headersCategory: null,
            resultsOnScreen: null,
          }),800)
        } 
      })
    } else {
      this.setState({...this.state, searchStatus: '', headersCategory: null})
    }
  }

  loadMore = async () => {

    // 1. move to next page
    let page = this.state.page + 1;
    await this.setState({...this.state, page: page, flatListStatus: 'loading...'})
  
    setTimeout(async () => {    
      await fetch('http://www.omdbapi.com/?s=' + this.state.keyWord.trim() + '&page=' + this.state.page.toString() + '&type=' + this.state.lazyLoadType + '&apikey=1f641348')
      .then(res=>res.json())
      .then(async resJson=>{
        // 2. If API return results => response true
        if (resJson.Response == "True") {

          // 3. Declare vars to handle data 
          
          // 3.1 search results, object with pages
          let search = this.state.searchResult;
          // => save data by pages
          search[this.state.page.toString()] = resJson

          // 3.2 Objects with categories, no pagings
          let resultsToScreen = this.state.resultsToScreen;

          // 3.3 List of headers. Click one header => move to list film by category
          let headers = this.state.headersCategory;

          
          // 4. Iterate data in new page of API
          for (let val of search[this.state.page.toString()].Search) {  
            if(resultsToScreen.hasOwnProperty(val.Type)) {
              resultsToScreen[val.Type].films.push(val)
            } else {
              resultsToScreen[val.Type] = {films: [val], header: val.Type}
              headers.push(val.Type)
            }
          }

          // save data to state
          await this.setState({...this.state, 
            searchResult: search,
            headersCategory: headers.sort(), 
            resultsToScreen: resultsToScreen, 
            resultsOnScreen: resultsToScreen[this.state.lazyLoadType].films,
            flatListStatus: '',
          })
        } else {
          this.setState({...this.state, flatListStatus: 'End of search'})
        }
      })
    } , 600) 
  }

  resultsByCategory = async (type) => {

    let onScreen = this.state.resultsToScreen[type].films
    await this.setState({...this.state, resultsOnScreen: onScreen, lazyLoadType: type})
  }

  getFullData = id => {
    this.props.navigation.navigate('DetailsFilm', {filmID: id, dataSrc: ''})
  }

  renderItem = ({item, index}) => {
    let poster = item.Poster != 'N/A' ? item.Poster : 'https://i.pinimg.com/originals/72/24/f6/7224f6d53614cedbf8cef516b705a555.jpg'
    return <View><TouchableOpacity 
    style={sSearch.posterGridElement} 
    onPress={()=>this.getFullData(item.imdbID)}>
    <Image source={{uri: poster}} style={sHome.imgPosterScroll}/>
    <Text style={sHome.posterName}>{item.Title}</Text></TouchableOpacity></View>
  }
  
  keyExtractor = (item, index) => index.toString();


  refresh = () => {
    this.setState({loadingList:true})
    setTimeout(()=>{
    this.setState({loadingList:false})
    },200)
  }

  renderFooterFlatList = () => {
    return <View style={sSearch.errorSearchBar}><Text style={[sSearch.errorMessage, {color: 'gray'}]}>{this.state.flatListStatus}</Text></View>
  }


  render() {
    let headers;
    if (this.state.headersCategory) {
      headers = this.state.headersCategory.map((val, key)=> {
        return (<TouchableOpacity key={key} onPress={()=>this.resultsByCategory(val)} style={sSearch.headerButton}>
        <Text style={sHome.listPosterTitle}>{val}</Text>
        </TouchableOpacity>)
      })
    }
    
    return(
      <View>      
        <View style={sSearch.searchBarCon}>
          <View style={sSearch.searchBar}>
            <TextInput 
              onChangeText={text=>this.searchTriggerByKeyWord(text)} 
              placeholder="Search something..." 
              returnKeyLable="search" 
              maxLength={30} 
              style={sSearch.searchText}/>
              {/* <TouchableOpacity onPress={()=>this.clearInput()} style={sSearch.deleteIconCon}>
                <Image source={{uri: 'https://cdn.onlinewebfonts.com/svg/img_417072.png'}} style={sSearch.deleteIcon}/>  
              </TouchableOpacity> */}
          </View>
          <TouchableOpacity 
            style={sSearch.searchButton}>
            <Image source={{uri: 'https://cdn.pixabay.com/photo/2014/04/03/00/31/magnifying-glass-308581_960_720.png'}} 
            style={{width: 20, height: 20}}/>
          </TouchableOpacity>
        </View>
        
        {/*search status */}
        <View style={sSearch.errorSearchBar}><Text style={[sSearch.errorMessage, {color: 'gray'}]}>{this.state.searchStatus}</Text></View>        
        <View style={sSearch.headersCon}>{headers}</View>
        <View style={sSearch.flatListCon}>
          <View style={sSearch.errorSearchBar}><Text style={sSearch.errorMessage}>{this.state.resultError}</Text></View>

          <FlatList 
            columnWrapperStyle={sSearch.posterGrid}
            contentContainerStyle={{ paddingBottom: width}}   
            ListFooterComponent={this.renderFooterFlatList}
            numColumns={3}

            data={this.state.resultsOnScreen}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderItem}

            onRefresh={this.refresh}
            refreshing={this.state.loadingList}
            progressViewOffset={10}

            onEndReachedThreshold={0.1}
            onEndReached={this.loadMore}>
          </FlatList>
        </View>
        
          {/* <View style={sHome.hotPosterTitleCon}><Text style={sHome.listPosterTitle}>haha</Text></View> */}

        {/* </ScrollView> */}
      </View>
    );
  }
}