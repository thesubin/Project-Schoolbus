import React from 'react';
import { StyleSheet, Button, Text, View,Dimensions,Picker } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width:WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
 container: {
   flex:1,
   ...StyleSheet.absoluteFillObject,
   height: "100%",
   width: "100%",
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
 LocationBtn:{
   flex:1,
   position:"absolute",
   width: "100%",
   bottom:75,
   justifyContent: 'flex-end',
   alignItems: 'center',
 
},
LocationBtn1:{
  flex:1,
  position:"absolute",
  width: "30%",
  top:48,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'silver' ,
  borderRadius:50,

},
btnLogin:{
  width: WIDTH-175,
  height:45,
  borderRadius:25,
  backgroundColor:'#432577',
  justifyContent:'center',
  marginTop:10,
},

text:{
  color:'rgba(255,255,255,0.7)',
  fontSize:16,
  textAlign:'center'

},

});


export default class Location extends React.Component{
   constructor(){
		super();
		this.state={
			PickerValue:''
			
    } 
  } 
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
              showsMyLocationButton={true}
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
            <View style={styles.LocationBtn1}>
              <Text style={styles.text}>Bus</Text>
              <Picker
		style={{width:'100%',height:35,marginLeft:22,borderWidth:1,borderColor:'black',alignItems: 'center',
  }}
		selectedValue={this.state.PickerValue}
		onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
		>
		<Picker.Item label="1" value="1"/>
		<Picker.Item label="2" value="2" />
		<Picker.Item label="3" value="3" />
		<Picker.Item label="4" value="4"/>
		</Picker> 
  
           
            </View>
        
            <View style={styles.LocationBtn}>
            <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.text}>Get Location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.text}>My Location</Text>
            </TouchableOpacity>
  
            </View>
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