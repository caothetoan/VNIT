/**
 * ListView Remote data App
 */

import React, {
    Component,
} from 'react';
import {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

//import RowArticle from './components/RowArticle'
import Header from './components/Header'
//import SectionHeader from './components/SectionHeader'
import Footer from './components/Footer'

var REQUEST_URL = 'http://xinh.kenh360.com/ActionHandler.ashx?currentPage=0&pageSize=100&categoryId=1&userId=&orderBy=&ActionObject=examination&action=getListImageByPage
';

class DataRemote extends Component {
    constructor(props) {
        super(props);
        this.state = {
        dataSource: new ListView.DataSource({
                                            rowHasChanged: (row1, row2) => row1 !== row2,
                                            }),
        loaded: false,
        };
    }
    
    componentDidMount() {
        this.fetchData();
    }
    
    fetchData() {
        fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
              this.setState({
                            dataSource: this.state.dataSource.cloneWithRows(responseData),
                            loaded: true,
                            });
              })
        .done();
    }
    
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        
        return (
                <View style={styles.container}>
			        <ListView
			          style={styles.listView}
			          dataSource={this.state.dataSource}
			          //renderRow={(data) => <RowArticle {...data} />}
			          renderRow={this.renderRow}
			          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
			          renderHeader={() => <Header />}
			          renderFooter={() => <Footer />}
			          //renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
			        />
			      </View>
               
                );
    }
    
    renderLoadingView() {
        return (
                <View style={styles.container}>
                <Text>
                Loading...
                </Text>
                </View>
                );
    }
    
    renderRow(props) {
        return (
                <View style={styles.row}>
				    <Image source={{ uri: props.ImageSrc}} style={styles.photo} />
				    <Text style={styles.text}>
				      {`${props.Description}`}
				    </Text>
                </View>

               
                );
    }
}

var styles = StyleSheet.create({
                               
                               container: {
							    flex: 1,
                                marginTop: 20,
							    flexDirection: 'row',
							    alignItems: 'center',
							  },
                              separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
							  text: {
							    marginLeft: 12,
							    fontSize: 16,
							  },
							  photo: {
							    height: 40,
							    width: 40,
							    borderRadius: 20,
							  },
                               rightContainer: {
                               flex: 1,
                               },
                               title: {
                               fontSize: 20,
                               marginBottom: 8,
                               textAlign: 'center',
                               },
                               year: {
                               textAlign: 'center',
                               },
                               thumbnail: {
                               width: 53,
                               height: 81,
                               },
                               listView: {
                               paddingTop: 20,
                               backgroundColor: '#F5FCFF',
                               },
                               row: {
							    flex: 1,
							    padding: 12,
							    flexDirection: 'row',
							    alignItems: 'center',
							  },
                               });

AppRegistry.registerComponent('VNIT', () => DataRemote);


export default DataRemote;