import React from 'react';
import { Button, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
 import Map from './location'
 import Profile from './Profile'
import Notification from './Notification'
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Notification />
          {/* <Button
          title="Go to Settings"
 //         onPress={() => this.props.navigation.navigate('Settings')}
        /> */}
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
}
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Profile />        
       
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Map />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home:  HomeScreen ,
},{
    defaultNavigationOptions:{
        header: null,
    }
    }
);


const DetailsStack = createStackNavigator({
    Location:  DetailsScreen ,
    
  },{
    defaultNavigationOptions:{
        header: null,
    }
    }
);
  

const SettingsStack = createStackNavigator({
  Settings:SettingsScreen ,
},{
    defaultNavigationOptions:{
        header: null,
    }
    }
  );

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack ,
    Profile: SettingsStack,
    Location:  DetailsScreen ,
  },
  
  
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarVisible: true,
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-options`;
        } else if (routeName === 'Profile') {
          iconName = `ios-information-circle`;
        }else if (routeName === 'Location') {
            iconName = `ios-car`;
          }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
      
    }),
    
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
));
