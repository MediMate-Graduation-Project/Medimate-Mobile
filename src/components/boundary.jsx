import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
// import Background from "../../assets/images/Pattern.png";
import Ionicons from "react-native-vector-icons/Ionicons";
// import { useNavigation } from '@react-navigation/native';

export const Boundary = ({ children, title, background }) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.background}
        resizeMode="cover"
      >
        <Pressable onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back"
          color={"#6B50F6"}
          size={25}
          style={styles.backIcon}
        />
        </Pressable>
        {/* <Text style={styles.title}>{title}</Text> */}
        {children}
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5fa",
  },
  background: {
    flex: 1,
    padding: 30,
  },
  backIcon: {
    marginTop: 20,
    backgroundColor: "#eae3fc",
    width: 35,
    height: 35,
    padding: 5,
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    color: "#22242E",
    fontWeight: "700",
    fontSize: 25,
    marginBottom: 10,
  },
});
