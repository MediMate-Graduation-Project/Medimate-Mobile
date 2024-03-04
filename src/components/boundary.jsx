import React from 'react';
import {StyleSheet, View, ImageBackground, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Boundary = ({children, title = '', background = ''}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.background}
        imageStyle={styles.backgroundImage}
        resizeMode='cover'
        // size={50}
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
            <MaterialCommunityIcons
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
            />
          </View>
          {/* <Text style={styles.title}>{title}</Text> */}
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
    backgroundColor:'#00ff00',
    
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
    // marginTop: 20,
    backgroundColor: '#D9D9D9',
    width: 35,
    height: 35,
    padding: 5,
    borderRadius: 15,
  },
  iconRight: {
    flexDirection: 'row',
    gap: 5,
    // justifyContent:'flex-end'
  },
  title: {
    marginTop: 5,
    color: '#22242E',
    fontWeight: '700',
    fontSize: 15,
    // marginBottom: 10,
    width: '100%',
    // paddingRight:15,
    textAlign: 'center',
  },
});
