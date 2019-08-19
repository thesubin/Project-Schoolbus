import React from 'react';
import {StyleSheet, Button, Text,Dimensions, View,TextInput,TouchableOpacity ,Image,FlatList} from 'react-native';
import firebase from '../firebase'
const { width:WIDTH } = Dimensions.get('window')
import { List,ListItem, Icon, Left, Body, Right, Switch  } from 'native-base';
var data = []

export default class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listViewData: data,
      newContact: ""
    };
  }
  
  componentDidMount() {
    
        var that = this
    
        firebase.database().ref('contacts').on('child_added', function (data) {
    
          var newData = [...that.state.listViewData]
          newData.push(data)
          that.setState({ listViewData: newData })
          
        })
      }

    render() {
      return (
        <View style={styles.container}>
        <View style={styles.welcomeBox}>
              <Text style={styles.welcomeText}>Notifications</Text>
          {/* <Button
            title="Go to Settings"
   //         onPress={() => this.props.navigation.navigate('Settings')}
          /> */}
          </View>
          <View style={styles.container1}>
          
         <FlatList
         enableEmptySection
         data={this.state.listViewData}
         renderItem={({ item }) => (
           <ListItem>
         <Text> {item.val().name}  </Text>
           </ListItem>
           
         )}
         />
         
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
      top:115,
      width :100,
      height: 100,
      borderRadius:50,
      position:'absolute'  
    },
  
    welcomeBox: { 
        
        
        backgroundColor: 'rgba(232,232,232,0.35)',
      top:15,
      borderRadius:25,
      paddingLeft: 20,
      paddingRight:"50%",
      paddingTop:25,
      paddingBottom:25,
      alignItems:'flex-start'
    },
    
     Text: {
          color: 'black',
          fontSize: 25,
          fontWeight: '500',
          marginTop: 10,
          opacity:0.5,
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
    text:{
      color:'rgba(255,255,255,0.7)',
      fontSize:16,
      textAlign:'center'
  
    },
    welcomeText:{
      color: 'black',
      fontSize: 25,
      fontWeight: 'bold',
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
    picker: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:25,
        marginBottom:5,
        marginHorizontal:20
      }
  });
  
  