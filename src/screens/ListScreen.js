import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

const age = " - Age ";
const ListScreen = () => {
    const friends = [
        {name: "Jhon", age: 21},
        {name: "Marry", age: 24},
        {name: "Matt", age: 27},
        {name: "James",age: 72},
        {name: "Tim", age: 68},
        {name: "Ed", age: 64}
    ]
    return <FlatList 
         keyExtractor={friend => friend.name}
         data={friends} renderItem={
        ({item}) => {
            return <Text style={styles.textStyle}>{item.name}{age + item.age}</Text>
            
        }
    } />
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 32,
        marginVertical: 50,
        marginHorizontal: 14
    }
});

export default ListScreen;