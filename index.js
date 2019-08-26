/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Signup from './signup';
import {name as appName} from './app.json';
import Home from './parent/location'
import Admin from './admin/homescreen'
AppRegistry.registerComponent(appName, () => App);
