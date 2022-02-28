import React from 'react';
import { View,Text,StyleSheet, Button} from 'react-native';

function Home({navigation}){
  return(
    <View style = {styles.container}>
      <Text> HomeScreen</Text>
      <Button title="Add an Item"
      onPress={()=>navigation.navigate('AddItem')}
      />
      <Button title="List of items"
       onPress={()=>navigation.navigate('List')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
 container:{
   flex:1,
   justifyContent:'center',
  alignItems:'center',
  backgroundColor:"#981135"
 } 
});

export default Home;
