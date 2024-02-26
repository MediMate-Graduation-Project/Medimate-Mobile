import React from 'react';
import {StyleSheet, View, ImageBackground, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Boundary = ({children, title, background = ''}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="arrow-left"
              color={'#000'}
              size={25}
              style={styles.backIcon}
            />
          </Pressable>
          <Text style={styles.title}>{title}</Text>
        </View>
        {children}
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:5
  },
  background: {
    flex: 1,
    // padding: 30,
  },
  header:{
    flexDirection:'row',
    
  },
  backIcon: {
    // marginTop: 20,
    backgroundColor: '#D9D9D9',
    width: 35,
    height: 35,
    padding: 5,
    borderRadius: 15,
  },
  title: {
    marginTop: 5,
    color: '#22242E',
    fontWeight: '700',
    fontSize: 15,
    // marginBottom: 10,
    width:'100%',
    // paddingRight:15,
    textAlign: 'center',
  },
});
