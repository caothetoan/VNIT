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

class Robot extends Component {
  render() {
      let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          //http://cdn.kenh360.com/photo/data/20160404/1250000004/CD53D78C25E7FE4FE6BBC02C33C8C232.jpg
      };
    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>
            
            <Greeting name='Toan' />
        </Text>
            
            <ListViewBasics />
           
            <PizzaTranslator />
           
            <Text style={styles.instructions}>
            
            </Text>
           
            <View style={{flex: 1, flexDirection: 'row'}}>
             <Image source={pic} style={{flex: 1}}/>
        
            </View>
           
            
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
            
           
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
            
            <View>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
            </View>
       
            <View>
            
            <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
            </View>
            
            <BlinkApp />
            <IScrolledDownAndWhatHappenedNextShockedMe />
            
      </View>
    );
  }
}

class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    
    render() {
        return (
                <View style={{padding: 10}}>
                <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
                </View>
                );
    }
}

class Blink extends Component{
    constructor(props){
        super(props);
        this.state = {showText: true};
        
        // Toggle the state every second
        setInterval(() => {
                    this.setState({ showText: !this.state.showText });
                    }, 1000);
    }
    
    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return(
               <Text>{display}</Text>
        )
    }
}
class BlinkApp extends Component {
    render() {
        return (
                <View>
                <Blink text='I love to blink' />
                
                </View>
                );
    }
}


class Greeting extends Component {
    render() {
        return (
                <Text>Hello {this.props.name}!</Text>
                );
    }
}

class LotsOfGreetings extends Component {
    render(){
        return (
            <View style={{alignItems:'center'}}>
                <Greeting name='Toan' />
                <Greeting name='Cao' />
            </View>
                );
    }
    
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return (
                <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
               
                <Text style={{fontSize:96}}>If you like</Text>
               
                <Text style={{fontSize:96}}>Scrolling down</Text>
              
                <Text style={{fontSize:96}}>What's the best</Text>
               
                <Text style={{fontSize:96}}>Framework around?</Text>
              
                <Text style={{fontSize:80}}>React Native</Text>
                </ScrollView>
                );
    }
}

class ListViewBasics extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: ds.cloneWithRows([
                                      'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
                                      ])
        };
    }
    render() {
       
        return (
               
                <ListView
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
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
        this.state = {
        dataSource: getMoviesFromApi('https://facebook.github.io/react-native/movies.json')
        };
    }
    render() {
        let url = 'https://facebook.github.io/react-native/movies.json';
        let params = {
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
        };
        
        return (
                <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
                />
                </View>
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
                  //'Authorization': 'Bearer ' + token,
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
