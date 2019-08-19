import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput,Dimensions,TouchableOpacity,Button,Picker } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer, NavigationActions, StackActions  } from 'react-navigation';
import logo from './assets/logo.png'
import Icon from "react-native-vector-icons/Ionicons"
import App from './App';
const { width:WIDTH } = Dimensions.get('window')

 class SignupScreen extends React.Component  {
    constructor(){
      super()
      this.state={
        showPass: true,
        press:false
      }
    }
  
   render(){
      return (
     
        <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.Text}> Kata छौ? </Text>
     
        <View style={styles.inputContainer}>  
          <Icon name={"ios-person"} size={28} color={'rgba(0,0,0,0.7)'} style={styles.inputIcon} />
           <TextInput style={styles.input} placeholder={"Parent Name"}
           placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
            />
        </View>
        <View style={styles.inputContainer}>  
          <Icon name={"ios-person"} size={28} color={'rgba(0,0,0,0.7)'} style={styles.inputIcon} />
           <TextInput style={styles.input} placeholder={"Email"}
           placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
            />
        </View>
        <View style={styles.inputContainer}>  
          <Icon name={"ios-person"} size={28} color={'rgba(0,0,0,0.7)'} style={styles.inputIcon} />
           <TextInput style={styles.input} placeholder={"Student Id"}
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
           <TextInput style={styles.input} placeholder={"Username"}
           placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
            />
        </View>
        <View style={styles.inputContainer}>  
          <Icon name={"ios-key"} size={28} color={'rgba(0,0,0,0.7)'} style={styles.inputIcon} />
           <TextInput style={styles.input} placeholder={"Password"}
           secureTextEntry={this.state.showPass}
           placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
            />
     <TouchableOpacity style={styles.btnEye}>
        <Icon name={"ios-eye"} size={26} color={'rgba(0,0,0,0.7)'} />
      </TouchableOpacity>
            
     </View>
     <TouchableOpacity style={styles.btnLogin} onPress={this.login}>
        <Text style={styles.text}>Sign Up </Text>
  
         </TouchableOpacity>
        <Text style={styles.text1}>Already have an account?  </Text>
         <TouchableOpacity  onPress={this.login}>
        <Text style={styles.text2}>Sign in!</Text>
  
         </TouchableOpacity>
     
     </View>   
  
    );
   }
  
   login= () =>{
    // this.props.navigation.navigate('DetailScreen')
    // navigation.goBack(null)
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
    width :150,
    height: 180,
    borderRadius:50
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
    
  });
  
  export default createAppContainer(createSwitchNavigator(
    {
      AuthLoading: SignupScreen,
        
    },
    {
      initialRouteName: 'AuthLoading',
    }
  ));
  