import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile_card = () => {
  return (
    <View style={style.container}>
      <Image
        style={style.image}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s',
        }}
      />
      <Text style={style.name}>HAFIZ MUHAMMAD DANIAL</Text>
      <Text style={style.bio}>Skilled developer with experience in React Native, Visual Studio.</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    margin: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 80,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 50,
  },
  name:{
    fontSize:16,
    fontWeight:'bold',
    padding:10,
    marginTop: -45,
  },
  bio:{
    textAlign:'center',
    color:'black',
    marginTop: 5
  }
});

export default Profile_card;
