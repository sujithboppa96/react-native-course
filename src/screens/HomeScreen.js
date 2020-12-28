import React, { useState } from "react";
import { Text, StyleSheet, FlatList, View, Button, TextInput, TouchableOpacity } from "react-native";



const DATA = [
  {
    id: '1',
    title: 'kohli',
  },
  {
    id: '2',
    title: 'Sachin',
  },
  {
    id: '3',
    title: 'Dhoni',
  },
];

const Item = ({ item,onPress,style }) => (
    <TouchableOpacity
    style={[styles.item, style]}        
    onPress={onPress}
    >
  <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
);
const HomeScreen = () => {

  const [data, setData] = useState(DATA)
  const [ value, onChnageValue] = useState('please add value to add')
  const [selectedId, setSelectedId] = useState(null);


  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    return (<Item item={item} 
    onPress={() => setSelectedId(item.id)}
    style={{ backgroundColor }}
    />)
  }
  const changeData = () => {
    let data1 = [...data]
    let obj = {
      id: `${data.length + 1}`,
      title: value
    }
    data1.push(obj)
    console.log(data1, 'data1')
    setData(data1)
  }
  return <View>
      <View
      style={styles.headerContainer}>
        <TextInput
        borderColor='blue'
        style={styles.inputData}
           onChangeText={text => onChnageValue(text)}
           value={value}
        >
        </TextInput>
      <Button
        title="Press me"
        onPress={changeData}
      />
      </View>
      <View style={styles.separator} />
      <FlatList
        data={data}
        extraData={selectedId}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  </View>
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 0,
  },
  inputData: {
    width: 100,
    height: 30
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;
