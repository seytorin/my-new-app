import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
    // Touchablewithoutfeedback allows onpress events with the View element.  This can be used to make buttons
    <TouchableOpacity  onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image source={props.placeImage} style={styles.placeImage} />
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        marginRight: 8,
        height: 80,
        width: 80
    }
});

export default listItem;