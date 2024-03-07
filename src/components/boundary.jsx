import React from 'react';
import {StyleSheet, View, ImageBackground, Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mainColor } from '../common/colors';

export const Boundary = ({children, background = '', hospitalId}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.background}
        imageStyle={styles.backgroundImage}
        resizeMode='cover'
      >
        <View style={styles.header}>
          <View>
            <Pressable onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="arrow-left"
                color={'#000'}
                size={25}
                style={styles.backIcon}
              />
            </Pressable>
          </View>
          <View style={styles.iconRight}>
            <Pressable style={styles.button}  onPress={() => {navigation.navigate('schedule', { id: hospitalId})}}>
              <Text style={styles.buttonText}>
                Đặt khám ngay
              </Text>
            </Pressable>
            {/* <MaterialCommunityIcons
              name="share-variant-outline"
              color={'#000'}
              size={25}
              style={styles.backIcon}
            />
            <MaterialCommunityIcons
              name="heart"
              color={'#000'}
              size={25}
              style={styles.backIcon}
            /> */}
          </View>
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
  },
  background: {
    flex: 1,
    backgroundColor:'#fff',
    
  },
  backgroundImage: {
    bottom: '1',
    height: undefined,
    aspectRatio: 1.3,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    
    justifyContent: 'space-between',
  },
  backIcon: {
    backgroundColor: '#fff',
    width: 35,
    height: 35,
    padding: 5,
    borderRadius: 20,
  },
  button:{
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    borderColor: mainColor,
    borderWidth: 2
  },
  buttonText:{
    fontWeight: '700',
    fontSize: 15,
    color: mainColor
  },
  iconRight: {
    flexDirection: 'row',
    gap: 5,
  },
  title: {
    marginTop: 5,
    color: '#22242E',
    fontWeight: '700',
    fontSize: 15,
    width: '100%',
    textAlign: 'center',
  },
});
