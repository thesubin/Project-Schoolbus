import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

// export default () => (
//    <View style={styles.container}>
//      <MapView
//        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//        style={styles.map}
//        region={{
//          latitude: 37.78825,
//          longitude: -122.4324,
//          latitudeDelta: 0.015,
//          longitudeDelta: 0.0121,
//        }}
//      >
//      </MapView>
//    </View>
// );














export default class Location extends React.Component{
    // constructor(props)  {
    //     super(props);
    //     this.state ={
    //         region:{
    //             latitude: 37.78825,
    //             longitude: -122.4324,
    //             latitudeDelta: 0.922,
    //             longituteDelta: 0.0421,
    //         }
    //     }
    // }
    render(){
        return(
            <View style={styles.container}>
        
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
            </MapView>
          </View>  
        );
    }
}
// const styles = StyleSheet.create({
//     container: { 
//       flex:1, 
     
//       alignItems: 'center',
//       justifyContent: 'center',
//         },
// });