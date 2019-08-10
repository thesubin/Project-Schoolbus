import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput,Dimensions,TouchableOpacity,Button,Picker } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions, StackActions  } from 'react-navigation';
import logo from './assets/logo.png'
import bus from './assets/bus.png'
import ParentScreen from './parent/homescreen'
import Icon from "react-native-vector-icons/Ionicons"

const { width:WIDTH } = Dimensions.get('window')
class HomeScreen extends React.Component {
  constructor(){
		super();
		this.state={
			PickerValue:''
			
    }
    
  }
  
  clickme=()=>{
		var data = this.state.PickerValue;
		if(data==""){
			alert("Please Select a Option");
		}else{
       this.props.navigation.navigate('Details')
    }
  }

  render() {
    return (
      <View style={styles.container}>
      {/* <Image source={bus} style={styles.bus} />
       */}
      <View style={styles.welcomeBox}><Text style={styles.welcomeText}> WELCOME TO</Text>
      <Text style={styles.welcomeText}> Kata छौ? </Text>
   
      </View> 
      <Image source={bus} style={styles.bus} />
      
      <View style={styles.inputContainer}>
           <Text style={styles.text1}> You are </Text>
   
      </View> 
      <View style={styles.picker}>

  <Picker
		style={{width:"55%" ,position: 'absolute',borderWidth:1,borderColor:'black',alignItems: 'center',
  }}
		selectedValue={this.state.PickerValue}
		onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
		>
		<Picker.Item label="Select a option" value=""/>
		<Picker.Item label="PARENT" value="html" />
		<Picker.Item label="DRIVER" value="html" />
		<Picker.Item label="ADMIN" value="javascript"/>
		</Picker> 
     </View>
      <View style={styles.Buttonview}> 
         <TouchableOpacity style={styles.btnLogin} onPress={this.clickme}>
        <Text style={styles.text}>Get Started</Text>
  
         </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component  {
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
      <Text style={styles.text}>Login </Text>

       </TouchableOpacity>
      <Text style={styles.text1}>or
       Register as a parent  </Text>
       <TouchableOpacity  onPress={this.login}>
      <Text style={styles.text2}>here!</Text>

       </TouchableOpacity>
   
   </View>   

  );
 }

 login= () =>{
  this.props.navigation.navigate('Parent')
}
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Parent: ParentScreen,
  },{
    defaultNavigationOptions:{
        header: null,
    }
    },
  {
    initialRouteName: 'Home',
  }
);
// resetStack = () => {
//   this.props
//     .navigation
//     .dispatch(StackActions.reset({
//       index: 0,
//       key: null,
//       actions: [
//         NavigationActions.navigate({
//           // routeName: 'Home',
//           // routeName: 'Details',
          
//           routeName: 'Parent',
//         }),
//       ],
//     }))
//  }
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
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
  welcomeText:{
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center',    
    opacity:0.5,
    marginBottom: 1,
   
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
  picker: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:25,
      marginBottom:5,
      marginHorizontal:20
    }
});

