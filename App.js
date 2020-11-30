import React from 'react';
import { render } from 'react-dom';
import { ScrollView, StyleSheet, Text,View } from 'react-native';
import { Appbar, TextInput ,Button,Card,List} from 'react-native-paper';
import Note from './components/Note'

export default class App extends React.Component  {

constructor(props) {
  super(props);
  this.state = {
    noteArray: [],
    noteText: '',
  }
}

  render() {

  let notes = this.state.noteArray.map((val,key) => {
    return <Note key={key} keyval={key} val={val}
           deleteMethod={()=>  this.deleteNote(key) }/>
  });
  return (
    <View style={styles.container}>
    <Appbar.Header >
  <Appbar.Content titleStyle={{textAlign: 'center'}}
 title="TODO LIST"/>
  </Appbar.Header>
  <TextInput
  label='add todo item'
  value={this.state.noteText}
  onChangeText={(noteText) => this.setState({noteText})}
  value={this.state.noteText}
  />
  <Button mode="contained" onPress={this.addNote.bind(this) }>
  <Text> Add TODO </Text>
  </Button>
  <ScrollView>
  <Card style={styles.container}>
  {notes}
  </Card>
  </ScrollView>
      
    </View>
  );
}
addNote(){
  if(this.state.noteText){
    var d=new Date();
    this.state.noteArray.push({
      'date':d.getDate()  +'/'+ d.getMonth() +'/' +d.getFullYear(),
      'note':this.state.noteText
    });
    this.setState({noteArray: this.state.noteArray })
    this.setState({ noteText: '' })

  }
}
  deleteNote(key) {
    this.state.noteArray.splice(key,1);
    this.setState({noteArray: this.state.noteArray})
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },

});
