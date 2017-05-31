/**
 * VNIT Robot BIBOT React Native App
 * https://vnit.top
 * @flow
 */
 import { AppRegistry, StatusBar } from 'react-native';
import setup from './components/setup';

StatusBar.setBarStyle('default');
AppRegistry.registerComponent('VNIT', setup);

