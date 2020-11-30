import React from 'react';
import { StyleSheet, Text,View,TouchableOpacity } from 'react-native';
import { Card,Button } from 'react-native-paper';



export default class Note extends React.Component  {

    render() {
       return (
         <Card key={this.props.keyval} style={{margin:10,backgroundColor:'#E91E63',}}>
        <View >

        <Text style={styles.text} >{this.props.val.note}</Text>
        <Text >{this.props.val.date}</Text>
        
        
        <Button icon="delete" color="white" onPress={this.props.deleteMethod} >
        </Button>
  
       
        </View>
        </Card>
      );
    }
    }
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    margin:'10'
   
  },
  buttonDelete: {
    flexDirection: 'column',
    backgroundColor: 'white',

  },
  text:{color:'white',fontSize: 30}

});