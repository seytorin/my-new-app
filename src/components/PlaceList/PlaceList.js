import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
// FlatList allows the viewport to add autoscrollability for user. Limited because you need to know how many items you'll need.
import ListItem from '../ListItem/ListItem';

const placeList = props => {
       
    //  data property is required for FlatList use. Must be an array
    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem 
                    placeName={info.item.name}
                    placeImage={info.item.image} 
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;