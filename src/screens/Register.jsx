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
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


import { useNavigation } from "@react-navigation/native";
export const Register = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
  const [imageHeight, setImageHeight] = useState(new Animated.Value(247));
  const [imageWidth, setImageWidth] = useState(new Animated.Value(235));
  const [hidePwd, setHidePwd] = useState(true)

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      keyboardWillShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      keyboardWillHide,
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  const keyboardWillShow = event => {
    Animated.parallel([
      Animated.timing(imageHeight, {
        duration: event.duration,
        toValue: 150,
        useNativeDriver: false,
      }),
      Animated.timing(imageWidth, {
        duration: event.duration,
        toValue: 150,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const keyboardWillHide = event => {
    Animated.parallel([
      Animated.timing(imageHeight, {
        duration: event.duration,
        toValue: 247,
        useNativeDriver: false,

      }),
      Animated.timing(imageWidth, {
        duration: event.duration,
        toValue: 235,
        useNativeDriver: false,

      }),
    ]).start();
  };
  return (
    <Animated.View style={styles.container}>
      <View style={styles.view}>
        <View style={{alignSelf: 'center', alignItems: 'center'}}>
          <Animated.Image source={require('../assets/Logo.png')} style={{height: imageHeight, width: imageWidth}} />
          <Text style={styles.title}>Tạo tài khoản</Text>
        </View>
        <View style={styles.formRegister}>
          <View>
            <Text style={styles.text}>Tên</Text>
            <View style={styles.viewInput}>
              <TextInput
                style={styles.textInput}
                onChangeText={onChangeText}
                value={text}
              />
            </View>
          </View>
          <View>
            <Text style={styles.text}>Số Điện Thoại</Text>
            <View style={styles.viewInput}>
              <Image source={require('../assets/countryCode.png')} />
              <TextInput
                style={styles.textInput}
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View>
            <Text style={styles.text}>Mật khẩu</Text>
            <View style={styles.viewInput}>
              <TextInput style={styles.textInput} secureTextEntry={hidePwd} />
              <Pressable onPress={()=>setHidePwd(!hidePwd)}>
                <Icon name={hidePwd ? 'eye': 'eye-off'} size={30} />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <Pressable
            onPress={() => {
              navigation.navigate("Trang chủ");
            }}
            style={styles.btnRegister}>
            <Text style={styles.buttonText}>Đăng ký</Text>
          </Pressable>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingHorizontal: 30,
  },
  view: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flex: 2,
  },
  viewInput: {
    marginTop: 7,
    borderColor: '#30A2FF',
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    maxHeight: 45,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  textInput: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    flex: 1,
  },
  title: {
    color: '#000000',
    fontSize: 32,
    fontWeight: '700',
  },
  formRegister: {
    flexDirection: 'column',
    gap: 10,
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#30A2FF',
    borderRadius: 16,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '500',
  },
  btnRegister: {
    alignItems: 'center',
  },
});
