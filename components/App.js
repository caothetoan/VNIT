import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, } from 'react-native';


import { Router, Scene } from 'react-native-router-flux';

//import HomeContainer from './home/HomeContainer'
import NewsContainer from './news/newsContainer'
import NewsItem from './news/NewsItem'

//import CodePush from 'react-native-code-push';//unable resolve

//import { Container, Content, Text, View } from 'native-base';//
//import Modal from 'react-native-modalbox';//


//import DataLocal from './listview_local'
//import DataRemote from './listview_remote'

//import DataRemote from './bitcoin_prices'
//import DataRemote from './photo_xinh'


//import AppNavigator from './AppNavigator';//
//import ProgressBar from './components/loaders/ProgressBar';//

//import theme from './themes/base-theme';//
//import Router from './Router'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showDownloadingModal: false,
      showInstalling: false,
      downloadProgress: 0,
    };
  }

  componentDidMount() {
	    
  }

  render() {
	/*<Scene key="Home" component={HomeContainer} title="Home" initial={true} />
          */
    if (!this.state.showDownloadingModal) {
      return (
            <Router hideNavBar= "false">
        <Scene key="root">
          
          <Scene key="NewsContainer" component={NewsContainer} title="News" initial={true} />
          <Scene key="NewsItem" component={NewsItem} title="NewsItem" />
        </Scene>
      </Router>
           
      );
    }

    return  <ActivityIndicator
      size='small'/>;
  }
}

export default App;