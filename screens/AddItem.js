import React,{useState} from 'react';
import { View,Text,StyleSheet,TextInput,TouchableHighlight, Alert} from 'react-native';
import database from '@react-native-firebase/database';


 let addItem=item=> {
   database().ref('/Items').push({
      name:item
  }) 
 }

function AddItem(){
  const [name,setName] = useState('');
  const handlesubmit = () => {
    addItem(name);
    setName('');
    Alert.alert('Item Saved Successfully')
  }
  return(
    <View style = {styles.main}>
      <Text style={styles.title}> Add Items </Text>
      <TextInput style={styles.itemInput} value={name} onChangeText={text =>setName(text)}></TextInput>
    <TouchableHighlight
     style ={styles.button}
    onPress={handlesubmit}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
 
 main:{
   flex:1,
   padding:30,
   flexDirection:'column',
   justifyContent:'center',
   backgroundColor:"#567787"
 },
 title:{
   marginBottom:20,
   fontSize:25,
   textAlign:'center'
 },
 itemInput:{
   height:50,
   padding:4,marginRight:5,
   fontSize:23,
   borderWidth:1,
   borderColor:"#fff",
   borderRadius:8,
   color:"#fff"
 },
 buttonText:{
   fontSize:18,
   color:"#111",
   alignSelf:'center',
 },
 button:{
   height:45,
   flexDirection:'row',
   backgroundColor:'#fff',
   borderColor:'#ggg',
   borderWidth:1,
   borderRadius:8,
   marginBottom:10,
   marginTop:10,
   alignSelf:'stretch',
   justifyContent:'center'
 }
 
});

export default AddItem;
