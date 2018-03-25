import React from 'react';
// Critical for using react native
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

export default class App extends React.Component {
  state = {
    placeName: '',
    //Array for input values
    places: []
  }
  //Creates method where 'this' always references class because of arrow function
  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    //If empty
    if (this.state.placeName.trim() === ""){
      return;
    }
    //If not empty return object
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };
  render() {
    //outputs arrays with react and uses jsx element place.
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place}/>
    ));
    return (
      //styles here referes to the constant on line 29. This styles the container 
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
          placeholder="An awesome place"
          value ={this.state.placeName} onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}/>

          <Button title= "Add" styles={styles.placeButton} onPress={this.placeSubmitHandler}/>
        </View>
        {/* Output for places */}
        <View style={styles.listContainer}>
          {placesOutput}
        </View>
      </View>
    );
  }
}
//StyleSheet is how you create objects that style containers
const styles = StyleSheet.create({
  //Direction is not seen because column is default and desired.  You add a property to set the style of elements.
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  //Imbedded container for input
  inputContainer: {
    // flex: 1,
    width:"100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  //Styling for input
  placeInput: {
    width: "70%"
  },
  //Styling for input button
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width:"100%"
  }
});
