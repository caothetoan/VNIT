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
const NewsItemB = (props) => (
  <View style={styles.row}>
                    <Image source={{ uri: props.urlToImage}} style={styles.photo} />

                    <View style={styles.rightContainer}>
                        <View style={styles.column}>
                           <Text style={styles.title}>
                          {`${props.title}`}
                        </Text>
                        </View>
                        <View style={styles.column}>
                          <Text style={styles.author}>
                          {`${props.author}`}
                        </Text>
                        </View>
                        <View style={styles.column}>
                          <Text style={styles.description}>
                              {`${props.description}`}
                            </Text>
                        </View>

                    </View>
                   
                </View>
);

class NewsItem extends Component {

  render() {
   <View style={styles.row}>
                    <Image source={{ uri: props.urlToImage}} style={styles.photo} />

                    <View style={styles.rightContainer}>
                        <View style={styles.column}>
                           <Text style={styles.title}>
                          {`${props.title}`}
                        </Text>
                        </View>
                        <View style={styles.column}>
                          <Text style={styles.author}>
                          {`${props.author}`}
                        </Text>
                        </View>
                        <View style={styles.column}>
                          <Text style={styles.description}>
                              {`${props.description}`}
                            </Text>
                        </View>

                    </View>
                   
                </View>
  }
}
export default NewsItem;
