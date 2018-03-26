import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from './src/assets/Bikini_Bottom.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeDeletedHandler = () => {
     this.setState(prevState => {
    return {
      places: prevState.places.filter(place => {
        // Checks if we have repeat input in the array
        return place.key !== prevState.selectedPlace.key;
      }),
      selectedPlace: null
    };
  });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(), 
          name: placeName,
          image: placeImage
        })
      };
    });
  };

placeSelectedHandler = key => {
  this.setState(prevState => {
    return {
      selectedPlace: prevState.places.find(place => {
        return place.key === key;
      })
    };
  });
  // this.setState(prevState => {
  //   return {
  //     places: prevState.places.filter(place => {
  //       // Checks if we have repeat input in the array
  //       return place.key !== key;
  //     })
  //   };
  // });
};

  render() {
    return (
      // Main Container
      <View style={styles.container}>
      {/* Place for input */}
     
      <PlaceDetail 
      selectedPlace={this.state.selectedPlace} 
      onItemDeleted={this.placeDeletedHandler} 
      onModalClosed={this.modalClosedHandler}/>
      <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        {/* Place for string array to display. Calls placeDeletedHandler */}
        <PlaceList 
        places={this.state.places} 
        onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
