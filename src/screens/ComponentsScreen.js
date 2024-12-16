import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
    return <Text style={styles.textStyle}> This is the component</Text>
};

const styles = StyleSheet.create({
    testStyle: {
        fontSize: 30,
    }
});

export default ComponentsScreen; 