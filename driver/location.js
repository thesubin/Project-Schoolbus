import React from 'react';
import { StyleSheet, Button, Text, View,TouchableOpacity,Dimensions,Image } from 'react-native';
const { width:WIDTH } = Dimensions.get('window')
import locationLoad from '../assets/location.gif'
import MapView, { PROVIDER_GOOGLE ,Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import firebase from '../firebase'
import Geolocation from '@react-native-community/geolocation';
import map from '../assets/map.png'
export default class Location extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      PickerValue:'',    
     latitude: 0,
      longitude: 0,
      error:null,
      opacity:0,
      email:'',
      contact:'',
      busno:'',
    };
  }
  componentDidMount() {
    this._interval = setInterval(() => {
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
      
      var user = firebase.auth().currentUser;
      var userId = firebase.auth().currentUser.uid;
       
      var that=this;
      
          firebase.database().ref('users/driver/'+ userId).on('value', function (data) {
         var newData=data.val();
       var cnt=newData.Contact;
       var bus=newData.BUS;
       
            that.setState({ contact:cnt ,busno:bus })
            firebase.database().ref('/DriverLocation/'+ bus).set({ latitude: that.state.latitude,longitude:that.state.longitude })
          })  

      if (user) {
          this.setState( {name:user.displayName})
         
          this.setState( {email:user.email})
          
           
         
          // localStorage.setItem('user', user.uid);
      } 
      
      // Your code
    }, 10000);
   
  }
    componentWillUnmount() {
      clearInterval(this._interval);
    }
 
  render(){

        return(
            <View style={StyleSheet.container}>
           <View style={styles.LocationBtn}>
             <Image source={locationLoad} style={styles.bus} />
             <Text style={styles.welcomeText}> Sending Location </Text>
            </View>
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
        LocationBtn:{
            flex:1,
            width: "100%",
            justifyContent: 'center',
            alignItems: 'center',
          
         },
         bus: {
           
          top:10,   
          width :390,
          height: 390,
          borderRadius:50,
            
        },
        welcomeText:{
    
          top:50,
          color: 'black',
          fontSize: 25,
          fontWeight: 'bold',
          textAlign:'center',    
          opacity:0.5,
          marginBottom: 1,
         
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