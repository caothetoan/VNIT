/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TextInput,
    ScrollView,
    ListView,
    Image
} from 'react-native';

import Header from './header';
import Row from './row';
import demoData from './data'

const styles = StyleSheet.create({
                                 separator: {
                                 flex: 1,
                                 height: StyleSheet.hairlineWidth,
                                 backgroundColor: '#8E8E8E',
                                 },
                                 welcome: {
                                 fontSize: 20,
                                 textAlign: 'center',
                                 margin: 10,
                                 paddingTop: 22,
                                 },
                                 instructions: {
                                 textAlign: 'center',
                                 color: '#333333',
                                 marginBottom: 5,
                                 },
                                 bigblue: {
                                 color: 'blue',
                                 fontWeight: 'bold',
                                 fontSize: 30,
                                 },
                                 red: {
                                 color: 'red',
                                 },
                                 });


class ListViewBasics extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: ds.cloneWithRows(demoData)
        };
    }
    render() {
       
        return (
               
                <ListView
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={(data) => <Row {...data} />}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                    renderHeader={() => <Header />}
                />
                
                );
    }
}
//getMoviesFromApi
class ListViewRemote extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
        const url = 'https://facebook.github.io/react-native/movies.json';
        let params = {
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
        };
        
        this.state = {
        dataSource: ds.cloneWithRows(getMoviesFromApi(url))
        };
    }
    render() {
        
        
        return (
                <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(data) => <Row {...data} />}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                renderHeader={() => <Header />}
                />
                );
    }
}

function getMoviesFromApiAsync(url) {
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
          return responseJson.movies;
          })
    .catch((error) => {
           console.error(error);
           });
}

async function getMoviesFromApi(url) {
    try {
        let response = await fetch(url);
        let responseJson = await response.json();
        return responseJson.movies;
    } catch(error) {
        console.error(error);
    }
}
function postMoviesFromApiAsync(url, params) {
    return fetch(url, {
                 method: 'POST',
                 headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
                 },
                 body: JSON.stringify(params)
                 })
    .then((response) => response.json())
    .then((responseJson) => {
          return responseJson.movies;
          })
    .catch((error) => {
           console.error(error);
           });
}
// web socket tcp
function webSocketConnect(){
    var ws = new WebSocket('ws://host.com/path');
    
    ws.onopen = () => {
        // connection opened
        
        ws.send('something'); // send a message
    };
    
    ws.onmessage = (e) => {
        // a message was received
        console.log(e.data);
    };
    
    ws.onerror = (e) => {
        // an error occurred
        console.log(e.message);
    };
    
    ws.onclose = (e) => {
        // connection closed
        console.log(e.code, e.reason);
    };

}
// App registration and rendering
AppRegistry.registerComponent('Robot', () => ListViewBasics);
