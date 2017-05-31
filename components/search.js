'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

const styles = StyleSheet.create({
	flowRight: {
	  flexDirection: 'row',
	  alignItems: 'center',
	  alignSelf: 'stretch'
	},
	buttonText: {
	  fontSize: 18,
	  color: 'white',
	  alignSelf: 'center'
	},
	button: {
	  height: 36,
	  flex: 1,
	  flexDirection: 'row',
	  backgroundColor: '#48BBEC',
	  borderColor: '#48BBEC',
	  borderWidth: 1,
	  borderRadius: 8,
	  marginBottom: 10,
	  alignSelf: 'stretch',
	  justifyContent: 'center'
	},
	searchInput: {
	  height: 36,
	  padding: 4,
	  marginRight: 5,
	  flex: 4,
	  fontSize: 18,
	  borderWidth: 1,
	  borderColor: '#48BBEC',
	  borderRadius: 8,
	  color: '#48BBEC'
	},
});
function urlForQueryAndPage(key, value, pageNumber) {
  var data = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: pageNumber
  };
  data[key] = value;

  var querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'http://api.nestoria.co.uk/api?' + querystring;
};

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            searchString: '',
        };

    }
    onSearchTextChanged(event) {
      console.log('onSearchTextChanged');
      this.setState({ searchString: event.nativeEvent.text });
      console.log(this.state.searchString);
    }
    _executeQuery(query) {
      console.log(query);
      this.setState({ isLoading: true });
    }

    onSearchPressed() {
      var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
      this._executeQuery(query);
    }

    render() {
    var spinner = this.state.isLoading ?
  ( <ActivityIndicator
      size='large'/> ) :
  ( <View/>);

        return (
            <View>
            {spinner}
             <View style={styles.container}>
                 <View style={styles.flowRight}>
                  <TextInput
                  value={this.state.searchString}
                    style={styles.searchInput}
                     placeholder="Search..."
                      onChangeText={(text) => console.log('searching for ', text)}
                      onChange={this.onSearchTextChanged.bind(this)}
                    />
                  <TouchableHighlight style={styles.button}
                    onPress={this.onSearchPressed.bind(this)}
                      underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Go</Text>
                  </TouchableHighlight>
                </View>
            
            </View>
            <Navigation />                  
          
           </View>
           );
       }
};

export default Search;
