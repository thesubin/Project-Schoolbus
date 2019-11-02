import React from 'react';
import {StyleSheet, Button, Text,Dimensions, View,TextInput,TouchableOpacity ,Image,FlatList} from 'react-native';
import firebase from '../firebase'
import bus from '../assets/bus.png'
import App from '../App'
const { width:WIDTH } = Dimensions.get('window')
import { List,ListItem, Icon, Left, Body, Right, Switch  } from 'native-base';
import { TouchableHighlight } from 'react-native-gesture-handler';
import RNRestart from 'react-native-restart'; 
export default class Profile extends React.Component {
    constructor(props) {
      super(props);
        this.state={
          ButtonStateHolder : true ,
            name:'',
            email:'',
            sid:'',
            color:'rgba(0,0,0,0.1)',
            contact:'',
            TextInputDisableStatus: false,
            topa:'true',
            contact1:""
            }
       
      this.logout = this.logout.bind(this);
      }
    
    logout() {
        
        firebase.auth().signOut();

        RNRestart.Restart();
      
      
      }
      edit(){
        this.setState({color:'rgba(121,185,242,4)',TextInputDisableStatus:true,ButtonStateHolder:false})
      }
    componentDidMount() {
      
            var user = firebase.auth().currentUser;
            var userId = firebase.auth().currentUser.uid;
             
            var that=this;
            
                firebase.database().ref('users/parent/'+ userId).on('value', function (data) {
               var newData=data.val();
             var cnt=newData.contact;
             var studentid=newData.studentid;
             
                  that.setState({ contact:cnt ,sid:studentid })
                  
                })  

            if (user) {
                this.setState( {name:user.displayName})
               
                this.setState( {email:user.email})
                
                 
               
                // localStorage.setItem('user', user.uid);
            } 
          
                  }

                  signUpUser=(contact1,studentid,email) => {
                    try{
                      if(this.state.contact1.length<9){
                        alert(["Please enter a valid contact"])
                        return;
                      } 
                     
                      else{
                      var userId = firebase.auth().currentUser.uid;
                      firebase.database().ref('users/parent/'+ userId).set({  contact:contact1, studentid:studentid,email:email
                        }).then(()=> alert("Successfully Updated"))
                        this.setState({color:'rgba(0,0,0,0.1)',TextInputDisableStatus:false,ButtonStateHolder:true})
                        }
                     
                    }
                    catch(error){
                    console.log(error.toString())
                    }
                    
                    }
  
      render() {
        return (
          <View style={styles.container}>
           <Image source={bus} style={styles.bus} />
            <View style={ 
       {alignItems: 'flex-end',marginLeft:234,top:140,}
       }>
           
             <TouchableOpacity style={styles.btnLogin1} onPress={() => this.edit()}>
        <Text style={styles.textbtn}>Edit </Text>
  
         </TouchableOpacity>
            </View>
          <View style={styles.welcomeBox}>
                <Text style={styles.welcomeText}>Hello {this.state.name}!</Text> 
                <View
                     style={{ 
                    marginTop:15,
                     borderBottomColor: 'black',
                     borderBottomWidth: 1,
                             }}
                />
                <Text style={styles.text}>Email:</Text> 
                <TextInput  style={{
            width: WIDTH-95,
            height:45,
            borderRadius:45,
            fontSize:16,
            paddingLeft:45,
            marginHorizontal: 5,
            backgroundColor: 'rgba(0,0,0,0.1)'}} placeholder={this.state.email}
           placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
            editable={false}
            />
                <Text style={styles.text}>Contact:</Text> 
                <TextInput style={{
            width: WIDTH-95,
            height:45,
            borderRadius:45,
            fontSize:16,
            paddingLeft:45,
            marginHorizontal: 5,
            backgroundColor: this.state.color}} placeholder={this.state.contact}
           placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
            editable={this.state.TextInputDisableStatus}
            onChangeText={(contact1)=>this.setState({contact1})}
            />
                <Text style={styles.text}>Student Name:</Text> 
                <TextInput  style={{
            width: WIDTH-95,
            height:45,
            borderRadius:45,
            fontSize:16,
            paddingLeft:45,
            marginHorizontal: 5,
            backgroundColor: 'rgba(0,0,0,0.1)'}} placeholder={this.state.sid}
           placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
            editable={false}
            />
               <TouchableOpacity style={styles.btnLogin} onPress={this.logout}>
        <Text style={styles.textbtn}>Log Out </Text>
  
         </TouchableOpacity>
        
         <TouchableOpacity disabled={this.state.ButtonStateHolder} style={styles.btnLogin} onPress={() =>  this.signUpUser(this.state.contact1,this.state.sid,this.state.email)}>
        <Text style={styles.textbtn}>Save </Text>
  
         </TouchableOpacity>
        
         
            {/* <Button
              title="Go to Settings"
     //         onPress={() => this.props.navigation.navigate('Settings')}
            /> */}
            </View>
            
          </View>
        );
      }
    }
  
  const styles = StyleSheet.create({
      container: { 
        flex:1, 
       
        alignItems: 'center',
       // justifyContent: 'center',
          },
          container1: { 
            marginTop:25,
            marginBottom:110,
            width:350,
            backgroundColor: 'rgba(232,232,232,0.35)',
          
            paddingTop:25,
                    
        borderRadius:25,
            
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
        top:55,
        width :150,
        height: 150,
        borderRadius:50,
        position:'absolute'  
      },
      btn:{
        marginTop:300,
      },
    
      welcomeBox: { 
          
        width: WIDTH-55,  
          backgroundColor: 'rgba(232,232,232,0.35)',
        top:140,
        borderRadius:25,
        paddingLeft: 20,
        paddingRight: 20,
        
        paddingTop:25,
        paddingBottom:25,
      },
      
       Text: {
            color: 'black',
            fontSize: 25,
            fontWeight: '500',
            marginTop: 10,
            opacity:0.5,
          },
          input:{
            width: WIDTH-95,
            height:45,
            borderRadius:45,
            fontSize:16,
            paddingLeft:45,
            marginHorizontal: 5
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
      textbtn:{
        color:'rgba(255,255,255,0.7)',
        fontSize:16,
        textAlign:'center'
    
      },
      text:{
        color:'black',
        fontSize:20,
        opacity:0.5,
        marginTop: 10,
      },
      welcomeText:{
        color: 'black',
        fontSize: 25,
        
        textAlign:'left',    
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
      btnLogin:{
        width: WIDTH-95,
        height:45,
        borderRadius:25,
        backgroundColor:'#432577',
        justifyContent:'center',
        marginTop:20
      },
      btnLogin1:{
        width: WIDTH-295,
        height:35,
        borderRadius:25,
        backgroundColor:'#432577',
        justifyContent:'center',
        marginTop:20
      },
      picker: {
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:25,
          marginBottom:5,
          marginHorizontal:20
        }
    });
    
    