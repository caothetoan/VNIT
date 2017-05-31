import React, {
    Component,
} from 'react';
import { View, Text, StyleSheet, ListView, } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  navigationItem:{
    marginRight:10,
  },
});

const Navigation = (props) => (
  <View style={styles.container}>
    <NavigationItem text='Top' />  
    <NavigationItem text='Latest' /> 
  </View>
);

class NavigationItem extends Component {
    render() {
        return (
                <Text style={styles.navigationItem}>{this.props.text}</Text>
                );
    }
}
export default Navigation;
