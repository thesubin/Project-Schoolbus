import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput,Dimensions,TouchableOpacity,Button,Picker ,Div} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer, NavigationActions, StackActions  } from 'react-navigation';
import logo from './assets/logo.png'
import bus from './assets/bus.png'
import ParentScreen from './parent/homescreen'
import AdminScreen from './admin/homescreen'
import DriverScreen from './driver/homescreen'

import Icon from "react-native-vector-icons/Ionicons"
import firebase from './firebase'

// const firebaseConfig ={
//   apiKey: "AIzaSyD2gA_Ff_qCBITSIJXSVKBz_4qFGAceDks",
//   authDomain: "schoolbustracker-cb35a.firebaseapp.com",
//   databaseURL: "https://schoolbustracker-cb35a.firebaseio.com",
//   projectId: "schoolbustracker-cb35a",
//   storageBucket: "",
// };

// firebase.initializeApp(firebaseConfig);

var uid =''
const { width:WIDTH } = Dimensions.get('window')
class CheckLogin extends React.Component{
  constructor(){
		super();
		this.state={
	   user: null,
    }
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
       // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        //localStorage.removeItem('user');
      }
    });
  }
  handlelogin= () =>{
    var that=this;
    
        firebase.database().ref('uid').once('value', function (data) {
       var newData=data.val();
      
    var who=newData;
          
        })  
    if(localStorage.who==1){
      
   this.props.navigation.navigate('Parent')
    }
    else if(localStorage.who==2){
        this.props.navigation.navigate('Admin')
    }
    else if(localStorage.who==3){
     this.props.navigation.navigate('Driver')
     
    }
  }
  render() {
    return (
  
  <View>{ (this.state.user)? (this.handlelogin) : (this.props.navigation.navigate('Home'))   }</View>
    )}
}
class HomeScreen extends React.Component {
  constructor(){
		super();
		this.state={
			PickerValue:'',
      user: null,
    }
  }
  clickme=()=>{
		var data = this.state.PickerValue;
		if(data==""){
			alert("Please Select a Option");
		}else{
      uid= data
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
		<Picker.Item label="PARENT" value="parent" />
		<Picker.Item label="DRIVER" value="driver" />
		<Picker.Item label="ADMIN" value="admin"/>
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
class SignupScreen extends React.Component  {
  constructor(props){
    super(props)
    this.state=({
      showPass: true,
      press:false,
      email:'',
      password:'',
      studentid:'',
      contact:'',
      name:''
    })
  }
signUpUser=(email,password,contact,studentid,name) => {
try{
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  let rr=/^[a-zA-Z]*$/;
  if(this.state.password.length<6 || this.state.contact.length<9|| this.state.name==""|| rr.test(this.state.name)==false||rr.test(this.state.studentid)== false|| this.state.studentid==""|| reg.test(this.state.email) === false){
    alert("Please enter valid Data")
    return;
  } 
 
  else{firebase.auth().createUserWithEmailAndPassword(email,password).then((user)=>{
if(user){
  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref('users/parent/'+ userId).set({ email:email, contact:contact,
    studentid:studentid })
  firebase.auth().currentUser.updateProfile({
        displayName: name,
       
         // some photo url
      })  
    }
  }).then(() => alert("Registerd")).catch(function(error) {
    errorCode = error.code;
    errorMessage = error.message;
  if (errorCode === 'auth/email-already-in-use') {
    console.log("Wrong password");
    alert('Email Already in Use!');
  } else {
    console.log(error);
   
  }
})
    
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
      <Text style={styles.Text}> Kata छौ? </Text>
   
      <View style={styles.inputContainer}>  
        <Icon name={"ios-person"} size={28} color={'rgba(0,0,0,0.7)'} style={styles.inputIcon} />
         <TextInput style={styles.input} placeholder={"Parent Name"}
         placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid='transparent'
          onChangeText={(name)=>this.setState({name})}
          />
      </View>
      {/* <View style={styles.inputContainer}>  
        <Icon name={"ios-person"} size={28} color={'rgba(0,0,0,0.7)'} style={styles.inputIcon} />
         <TextInput style={styles.input} placeholder={"Email"}
         placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid='transparent'
          />
      </View> */}
      <View style={styles.inputContainer}>  
        <Icon name={"ios-person"} size={28} color={'rgba(0,0,0,0.7)'} style={styles.inputIcon} />
         <TextInput style={styles.input} placeholder={"Student Name"}
         placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid='transparent'
          onChangeText={(studentid)=>this.setState({studentid})}
          />
      </View>
      <View style={styles.inputContainer}>  
        <Icon name={"ios-person"} size={28} color={'rgba(0,0,0,0.7)'} style={styles.inputIcon} />
         <TextInput style={styles.input} placeholder={"Contact"}
         placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid='transparent'
          onChangeText={(contact)=>this.setState({contact})}
          keyboardType={'numeric'}
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
   <TouchableOpacity style={styles.btnLogin} onPress={() => this.signUpUser(this.state.email,this.state.password,this.state.contact,this.state.studentid,this.state.name)}>
      <Text style={styles.text}>Sign Up </Text>

       </TouchableOpacity>
      <Text style={styles.text1}>Already have an account?  </Text>
       <TouchableOpacity  onPress={this.sup}>
      <Text style={styles.text2}>Sign in!</Text>

       </TouchableOpacity>
   
   </View>   

  );
 }

 sup= () =>{
  this.props.navigation.navigate('Details')
  // navigation.goBack(null)
}
}


class DetailsScreen extends React.Component  {
  constructor(props){
    super(props)
    this.state=({
      showPass: true,
      press:false,
      email:'',
      password:''

    })
  }
  loginUser=(email,password) => {
    try{
      
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(this.state.password.length<6 || reg.test(this.state.email) === false){
      alert("Please enter a valid Email or Pasword More than 6 letters")
      return;
    } 
   
    else{
      firebase.auth().signInWithEmailAndPassword(email,password).then(this.login).catch(function(error) {
        errorCode = error.code;
        errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        console.log("Wrong password");
        alert('Wrong password.');
      } else {
        console.log(error)
        
      }
    })
    }
  }
    catch(error){
    console.log(error.toString())
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
   <TouchableOpacity style={styles.btnLogin} onPress={() => this.loginUser(this.state.email,this.state.password)}>
      <Text style={styles.text}>Login </Text>

       </TouchableOpacity>
      <Text style={styles.text1}>or
       Register as a parent  </Text>
       <TouchableOpacity  onPress={this.sgnup}>
      <Text style={styles.text2}>here!</Text>

       </TouchableOpacity>
   
   </View>   

  );
 }

 login= () =>{
   if(uid=='parent'){
    firebase.database().ref('uid').set({ login:1 })
  this.props.navigation.navigate('Parent')
   }
   else if(uid=='admin'){
    firebase.database().ref('uid').set({ login:2 })
    this.props.navigation.navigate('Admin')
   }
   else if(uid=='driver'){
    firebase.database().ref('uid').set({ login:3 })
    this.props.navigation.navigate('Driver')
    
   }
}
sgnup= () =>{
  this.props.navigation.navigate('Signup')
}
}


const Stacks = createStackNavigator(
  { Check: CheckLogin,
    Home: HomeScreen,
    Details: DetailsScreen,
    Signup: SignupScreen,
    
  },{
    defaultNavigationOptions:{
        header: null,
    }
    },
  {
    initialRouteName: 'Check',
  }
);
const RootStack = createSwitchNavigator(
  {
    
    Parent: ParentScreen,
    Admin: AdminScreen,
    Driver: DriverScreen,
    Stack:Stacks
  },
  {
    initialRouteName: 'Stack',
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

