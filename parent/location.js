import React from 'react';
import { StyleSheet, Button,Modal, Text, View,Dimensions,Picker, ToastAndroid,TouchableHighlight,Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE ,Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { TouchableOpacity } from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';
import map from '../assets/map.png'
import MapViewDirections from 'react-native-maps-directions';
import busloc from '../assets/busloc.png'
const { width:WIDTH } = Dimensions.get('window')
const GOOGLE_MAPS_APIKEY = 'AIzaSyCltPX7f0EKagb3VXRsPkaisgq_XS6TDiM';

import firebase from '../firebase'
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
modal:{
  
  height:150,
  width: 250,
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
  marginBottom:50,

},
btnLogin:{
  width: WIDTH-175,
  height:45,
  borderRadius:25,
  backgroundColor:'#432577',
  justifyContent:'center',
  marginTop:10,
},

text1:{
 color: 'rgba(10,211,207,9)',
   fontSize:16,
 fontStyle:'italic'

},
text2:{
  color: 'rgba(254,83,123,9)',
    fontSize:16,
  fontStyle:'italic'
 
 },

text:{
  color:'rgba(255,255,255,0.7)',
  fontSize:16,
  textAlign:'center'

},

});


export default class Location extends React.Component{
  
    constructor(props) {
      super(props);
  
      this.state = {
        
        PickerValue:'',    
       latitude: 0,
        longitude: 0,
       DriverLatitude: 0,
        DriverLongitude: 0,
       distance: '',
       time:'',
        error:null,
        opacity:0,
        Dopacity:0,
        Vopacity:0,
        modalVisible: false,
      };
    }
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
  
    componentDidMount() {
     Geolocation.getCurrentPosition(
         (position) => {
           this.setState({
             latitude: position.coords.latitude,
             longitude: position.coords.longitude,
             error: null,
           });
           
         },
         (error) => this.setState({ error: error.message }),
         { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
       );
      }
      // calculateDistance() {
      //   var distance = require('google-distance');
        
      //   distance.get(
      //     {
      //       origin: '-7.841879,110.409193',
      //       destination: '-7.741194,110.342588'
      //     },
      //     function(err, data) {
      //       if (err) return console.log(err);
      //       this.setState({ distance: data })
      //   });


        
      //   // const{google}=this.props  
      //   // var origin1 = new window.google.maps.LatLng(this.state.latitude, this.state.longitude);
      //   // var destinationA = new window.google.maps.LatLng(this.state.DriverLatitude, this.state.DriverLongitude);
      //   // var service = new window.google.maps.DistanceMatrixService();
      //   // service.getDistanceMatrix(
      //   //   {
      //   //     origins: [origin1],
      //   //     destinations: [destinationA],
      //   //     travelMode: 'DRIVING',
      //   //     unitSystem: UnitSystem,
      //   //    }, callback);
      //   // var service = new window.google.maps.DistanceMatrixService();
      //   // service.getDistanceMatrix({
			// 	// 	origins:this.state.latitude + "," +  this.state.longitude,
			// 	// 	destinations:this.state.DriverLatitude+ "," + this.state.DriverLongitude,
			// 	// 	mode:"driving",
			// 	// 	key:"AIzaSyDUYbTR-3PDWPhgxjENs4yf35g2eHc641s"
			// 	// },callback)
      //   // function callback(response, status) {
      //   //   if (status == 'OK') {
      //   //     var origins = response.originAddresses;
      //   //     var destinations = response.destinationAddresses;
        
      //   //     for (var i = 0; i < origins.length; i++) {
      //   //       var results = response.rows[i].elements;
      //   //       for (var j = 0; j < results.length; j++) {
      //   //         var element = results[j];
      //   //         var distance = element.distance.text;
      //   //         var duration = element.duration.text;
      //   //         var from = origins[i];
      //   //         var to = destinations[j];
      //   //         this.setState({ distance: distance, time:duration })
      //   //       }
      //   //     }
      //   //   } // See Parsing the Results for
      //   //   // the basics of a callback function.
      //  // }
      // }
        
      clickme(){
            var data = this.state.PickerValue;
            if(data==""){
              alert("Please Select a Option");
            }else{
              
            var that=this;
            var data1 = this.state.PickerValue;
                firebase.database().ref('DriverLocation/'+ data1 ).on('value', function (data) {
               var newData=data.val();
             var lat=newData.latitude;
             var lon=newData.longitude;
             
                  that.setState({ DriverLatitude: lat,DriverLongitude:lon })
                 that.setState({Dopacity:1}) 
                })
              // this.calculateDistance()
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
      let MyLocation={latitude:this.state.latitude,longitude:this.state.longitude}
      
      return(
            <View style={styles.container}>
           
       

            <MapView
              showsMyLocationButton={true}
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
            <Marker  opacity={this.state.opacity} title={"You"} coordinate={ {latitude:this.state.latitude,longitude:this.state.longitude}}>
          <Image source={map} style={{height:50 ,width:50}}/>
           </Marker>
            <Marker  opacity={this.state.Dopacity} title={"bus"} coordinate={{latitude:this.state.DriverLatitude,longitude:this.state.DriverLongitude}}>
          <Image source={busloc} style={{height:40 ,width:100}}/>
           </Marker> 
           <MapViewDirections 
           origin={{latitude:this.state.latitude,longitude:this.state.longitude}}
           destination={{latitude:this.state.DriverLatitude,longitude:this.state.DriverLongitude}}
          
            apikey={GOOGLE_MAPS_APIKEY}
           strokeWidth={5}
           strokeColor="hotpink"
           
           onReady={(result) => {
            this.setState({distance : result.distance})
            this.setState({time : result.duration})
            
           
          }}
          onError={(errorMessage) => {
            // console.log('GOT AN ERROR');
          }}
           />
            </MapView>
            <View style={styles.LocationBtn1}>
              <Text style={styles.text}>Bus</Text>
              <Picker
		style={{width:'100%',height:35,marginLeft:22,borderWidth:1,borderColor:'black',alignItems: 'center',
  }}
		selectedValue={this.state.PickerValue}
		onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
		>
    <Picker.Item label="Select Bus" value=""/>
		<Picker.Item label="1" value="1"/>
		<Picker.Item label="2" value="2" />
		<Picker.Item label="3" value="3" />
		
		</Picker> 
  
           
            </View>
        <View   	style={{width:'50%',position:"absolute",height:115,marginLeft:22,borderWidth:1,top:122,borderColor:'black',alignItems: 'center',}}>
            <Text style={styles.text1}>You are </Text>
            <Text style={styles.text1}> {this.state.distance} km away</Text>
            <Text style={styles.text2}>Please Wait </Text>
            <Text style={styles.text2}> {this.state.time}</Text>
            <Text style={styles.text2}> minutes</Text>

       </View>

            <View style={styles.LocationBtn}>
            <TouchableHighlight style={styles.btnLogin} onPress={()=>this.clickme()}>
              <Text style={styles.text}>Get Location</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.btnLogin} onPress={()=>this.setState({opacity:1})}>
              <Text style={styles.text}>My Location</Text>
            </TouchableHighlight>
  
            </View>
          </View>  
        );
    }
}