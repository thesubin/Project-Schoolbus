import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import  MapView from "react-native-maps";

export default class Location extends React.Component{
    constructor(props)  {
        super(props);
        this.state ={
            region:{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.922,
                longituteDelta: 0.0421,
            }
        }
    }
    render(){
        return(
            <View style={StyleSheet.container}>
            <MapView initialRegion={this.state.region}
                     showsUserLocation={true}
                     showsCompass={true}
                     rotateEnabled={false}
                     style={{flex:1}}
                     />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { 
      flex:1, 
     
      alignItems: 'center',
      justifyContent: 'center',
        },
});