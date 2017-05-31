/**
 * News API org React Native App
 */

import React, {
    Component,
} from 'react';
import {
    Image,
    ListView,
    StyleSheet,
    View,
    Text,
     ActivityIndicator,
     TouchableHighlight,
} from 'react-native';

import { Container, Content, Header, Left, Right, Body, Title,  Button, Spinner, List, ListItem, Icon } from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Actions } from 'react-native-router-flux';
import {getRepos, getRepoThunk, repoSelected} from '../../actions/index';

import styles from './styles'
import NewsItem from './NewsItem'
//import Header from '../header/Header'
//import SectionHeader from './header/SectionHeader'
import LoadMore from './LoadMore'

var API_KEY = 'fe83f3db0a7c4d6d95fb11f58f4a07e1';
var REQUEST_URL = function(state){
    return 'https://newsapi.org/v1/articles?source=' + state.source + '&sortBy='+ state.sortBy + '&apiKey=' + API_KEY;
} 
 //const Realm = require('realm');

  class NewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        dataSource: new ListView.DataSource({
                                            rowHasChanged: (row1, row2) => row1 !== row2,
                                            }),
        loaded: false,
        isLoading: false,
        source: 'techcrunch',
        sortBy: 'latest',
        repos: null,
        };
        //this.setState({ 
            //source: this.props.source? this.props.source : 'techcrunch',
            //sortBy: this.props.sortBy? this.props.sortBy : 'latest',
            //});
    }
    //componentWillMount(){
    //this.props.getRepoThunk();
    //}
    componentDidMount() {
        this.fetchData();
    }
    
    fetchData() {
        fetch(REQUEST_URL(this.state))
        .then((response) => response.json())
        .then((responseData) => {

              this.setState({
                            dataSource: this.state.dataSource.cloneWithRows(responseData.articles),
                            loaded: true,
                            repos:responseData.articles,
                            source: responseData.source
                            });
              })
        .done();
    }

    /*rowPressed(url) {
      var property = this.props.listings.filter(prop => prop.url === url)[0];

       this.props.navigator.push({
	    title: "Property",
	    component: DetailView,
	    passProps: {property: property}
	  });
    }
    */

    _executeQuery(query) {
      console.log(query);
      this.setState({ isLoading: true });
    }

    onPressed(query) {
      
      this._executeQuery(query);
    }

    renderRow(props) {
        return (
                <TouchableHighlight style={styles.button}
                    onPress={props => { Actions.NewsItem();}}
                      underlayColor='#99d9f4'>

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
                  </TouchableHighlight>
               
                );
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        //let realm = new Realm({
     //schema: [{name: 'News', properties: {name: 'string'}}]
    //});

    //realm.write(() => {
     //realm.create('News', this.state.source);
   // });

        return (
            <Container>
               
                 <Header>
				    <Left>
				    <Button transparent onPress= {()=>Actions.pop()}>
				                  <Icon name='arrow-back' />
				              </Button>
				    </Left>
			        <Body>
			            <Title>News List</Title>
			        </Body>
			        <Right />
			    </Header>
			   

                <View style={styles.container}>
                    <ListView
                      style={styles.listView}
                      dataSource={this.state.dataSource}
                      //renderRow={(data) => <RowArticle {...data} />}
                      renderRow={this.renderRow}
                      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                      //renderHeader={() => <Header />}
                      //renderFooter={() => <Footer />}
                    />
                  </View>
            </Container>
                  
                );
    }
    
    renderLoadingView() {
        return (
                <ActivityIndicator
      size='large'/>
                );
    }

}
function mapStateToProps(state){
  return{
    repos : state.repos
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({getRepos: getRepos, getRepoThunk: getRepoThunk, repoSelected: repoSelected}, dispatch)
}
export default NewsContainer;
//connect(mapStateToProps, matchDispatchToProps)(NewsContainer);
