import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Animated,
  Keyboard,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuItem = [
  {iconName: 'cog', name: 'Cài đặt'},
  {iconName: 'help-circle-outline', name: 'Trợ giúp và hỗ trợ'},
  {iconName: 'security', name: 'Chính sách và bảo mật'},
  {iconName: 'book-open-variant-outline', name: 'Hướng dẫn đặt khám'},
  {iconName: 'logout', name: 'Đăng xuất'},
];
export const Menu = () => {
  return (
    <View style={styles.view}>
      <MaterialCommunityIcons
        name={iconName}
        size={size}
        color={color}></MaterialCommunityIcons>
      <Text></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    borderWidth: 1,
    borderBottomColor: '#b6bab7',
    flexDirection: 'row',
    gap: 10,
    padding: 10,
  },
});
