import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput,Dimensions,TouchableOpacity,Button,Picker } from 'react-native';
import firebase from '../firebase'
import Icon from "react-native-vector-icons/Ionicons"
import logo from '../assets/logo.png'
const { width:WIDTH } = Dimensions.get('window')
export default class SignupScreen extends React.Component  {
    constructor(props){
      super(props)
      this.state=({
        showPass: true,
        press:false,
        email:'',
        password:''
      })
    }
  signUpUser=(email,password) => {
  try{
    if(this.state.password.length<6){
      alert("Please enter atleast 6 characters")
      return;
    } 
    else{firebase.auth().createUserWithEmailAndPassword(email,password).then(() => alert("Resgisterd"))
      
    }
  }
  catch(error){
  console.log(error.toString())
  }
  
  }
  
    
   render(){
      return (
     
        <View style={styles.container}>
         <Image source={logo} style={styles.logo2} />
        <Text style={styles.Text}> ADD DRIVER </Text> 
     
        <View style={styles.inputContainer}>  
          <Icon name={"ios-person"} size={28} color={'rgba(0,0,0,0.7)'} style={styles.inputIcon} />
           <TextInput style={styles.input} placeholder={"Driver Name"}
           placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
            />
        </View>
        <View style={styles.inputContainer}>  
          <Icon name={"ios-person"} size={28} color={'rgba(0,0,0,0.7)'} style={styles.inputIcon} />
           <TextInput style={styles.input} placeholder={"Contact"}
           placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
            />
        </View>
        <View style={styles.inputContainer}>  
          <Icon name={"ios-person"} size={28} color={'rgba(0,0,0,0.7)'} style={styles.inputIcon} />
           <TextInput style={styles.input} placeholder={"Email"}
           placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText={(email)=>this.setState({email})}
            />
        </View>
        <View style={styles.inputContainer}>  
          <Icon name={"ios-key"} size={28} color={'rgba(0,0,0,0.7)'} style={styles.inputIcon} />
           <TextInput style={styles.input} placeholder={"Password"}
           secureTextEntry={this.state.showPass}
           placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText={(password)=>this.setState({password})}
            
           />
     <TouchableOpacity style={styles.btnEye}>
        <Icon name={"ios-eye"} size={26} color={'rgba(0,0,0,0.7)'} />
      </TouchableOpacity>
            
     </View>
     <TouchableOpacity style={styles.btnLogin} onPress={() => this.signUpUser(this.state.email,this.state.password)}>
        <Text style={styles.text}>Sign Up </Text>
  
         </TouchableOpacity>
        
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
   container1: { 
        flex:1, 
        backgroundColor: 'rgba(0,0,0,0.7)',
        alignItems: 'center',
        justifyContent: 'center',
          },
  logo: {
  width :200,
  height: 230,
  borderRadius:50
  },
  logo2: {
    width :150,
    height: 180,
    borderRadius:50
    },
  bus: {
    top:115,
    width :100,
    height: 100,
    borderRadius:50,
    position:'absolute'  
  },

  welcomeBox: { 
    backgroundColor: 'rgba(232,232,232,0.35)',
    borderRadius:25,
    paddingLeft:45,
    paddingRight:45,
    paddingTop:45,
    paddingBottom:45,
  },
  
   Text: {
        color: 'black',
        fontSize: 25,
        fontWeight: '500',
        marginTop: 10,
        opacity:0.5,
      },
    input:{
      width: WIDTH-55,
      height:45,
      borderRadius:45,
      fontSize:16,
      paddingLeft:45,
      backgroundColor: 'rgba(0,0,0,0.35)',
      marginHorizontal: 25
    },

    inputIcon:{
      position:'absolute',
      top:8,
      left:37
    },
    inputContainer:{
      marginTop:10
    },
  btnEye:{
    position:'absolute',
    top:8,
    right:37
  },
  btnLogin:{
    width: WIDTH-55,
    height:45,
    borderRadius:25,
    backgroundColor:'#432577',
    justifyContent:'center',
    marginTop:20
  },
  text:{
    color:'rgba(255,255,255,0.7)',
    fontSize:16,
    textAlign:'center'

  },


  text1:{
    color:'rgba(0,0,0,0.7)',
    fontSize:12,
    textAlign:'center',
    marginTop:10,
    fontStyle:'italic'
  },

  text2:{
    color:'rgba(1, 50, 67, 1)',
    fontSize:15,
    fontStyle:'italic',
    textDecorationLine: 'underline'
   },
   Button:{
     borderRadius:55,
     
   },
   Buttonview:{
  
    marginTop:15
  },

});

