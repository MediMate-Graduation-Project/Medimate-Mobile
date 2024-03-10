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

import {useNavigation} from '@react-navigation/native';
import { useRegister } from '../hooks/useAuth';
import { page } from '../constants';
export const Register = () => {
  const navigation = useNavigation();
  const [imageHeight, setImageHeight] = useState(new Animated.Value(247));
  const [imageWidth, setImageWidth] = useState(new Animated.Value(235));
  const [hidePwd, setHidePwd] = useState(true);
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const {mutate: register, isError, error} = useRegister(setErrorText)
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
  const handleRegister = () => {
    try {
      if(!userName){
        setErrorText('Vui lòng nhập tên');
        return;
      }
      if (!userPhoneNumber) {
        setErrorText('Vui lòng nhập số điện thoại');
        return;
      }
      if (!userPassword) {
        setErrorText('Vui lòng nhập mật khẩu');
        return;
      }
      setLoading(true);
      let dataToSend: any = {
        name: userName,
        phoneNumber: userPhoneNumber,
        password: userPassword,
      };
      register(dataToSend);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <Animated.View style={styles.container}>
      <View style={styles.view}>
        <View style={{alignSelf: 'center', alignItems: 'center'}}>
          <Animated.Image
            source={require('../assets/logo.png')}
            style={{height: imageHeight, width: imageWidth}}
          />
          <Text style={styles.title}>Tạo tài khoản</Text>
        </View>
        <View style={styles.formRegister}>
          <View>
            <Text style={styles.text}>Tên</Text>
            <View style={styles.viewInput}>
              <TextInput
                style={styles.textInput}
                onChangeText={userName => setUserName(userName)}
                value={userName}
              />
            </View>
          </View>
          <View>
            <Text style={styles.text}>Số Điện Thoại</Text>
            <View style={styles.viewInput}>
              <Image source={require('../assets/countryCode.png')} />
              <TextInput
                style={styles.textInput}
                onChangeText={userPhoneNumber =>
                  setUserPhoneNumber(userPhoneNumber)
                }
                value={userPhoneNumber}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View>
            <Text style={styles.text}>Mật khẩu</Text>
            <View style={styles.viewInput}>
              <TextInput
                style={styles.textInput}
                secureTextEntry={hidePwd}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
              />
              <Pressable onPress={() => setHidePwd(!hidePwd)}>
                <Icon name={hidePwd ? 'eye' : 'eye-off'} size={30} />
              </Pressable>
            </View>
          </View>
        </View>
        <View>
          <View>
            <Text style={{color: 'red', alignSelf: 'center', margin: 15}}>
              {errorText}
            </Text>
            <View style={styles.button}>
              <Pressable onPress={handleRegister} style={styles.btnRegister}>
                <Text style={styles.buttonText}>Đăng ký</Text>
              </Pressable>
            </View>
            <Text style={styles.loginText}>
              Bạn đã có tài khoản?{' '}
              <Text
                style={{color: '#30A2FF'}}
                onPress={() => navigation.navigate(page.login)}>
                Hãy đăng nhập
              </Text>
            </Text>
          </View>
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
  loginText: {
    fontSize: 15,
    color: '#000',
    alignSelf: 'center',
    fontStyle: 'italic',
  },
});
