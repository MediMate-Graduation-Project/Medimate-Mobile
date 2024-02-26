import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';
import React, {createRef, useState} from 'react';
import Logo from '../assets/Logo.png';
import countryCode from '../assets/countryCode.png';
import { useLogin } from '../hooks/useAuth';
export default Login = ({navigation}) => {
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const passwordInputRef = createRef();
  // const { mutate: login, isError, error } = useLogin();


  const handleLogin = () => {
    if (!userPhoneNumber) {
      setErrorText('Vui lòng nhập số điện thoại');
      return;
    }
    if (!userPassword) {
      setErrorText('Vui lòng nhập mật khẩu');
      return;
    }
    setLoading(true);
    let dataToSend = {username: userPhoneNumber, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    console.log(formBody);
    fetch('https://medimate-be-1.onrender.com/auth/login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => {
        setLoading(false);
        if (response.status === 200) {
          // AsyncStorage.setItem('user_id', response.data.email);
          navigation.navigate('Trang chủ');
        } else {
          setErrorText('Số điện thoại hoặc mật khẩu không đúng');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={{alignSelf: 'center', alignItems: 'center'}}>
          <Image source={Logo} />
          <Text style={styles.title}>Đăng nhập</Text>
        </View>
        <View style={styles.formLogin}>
          <View>
            <Text style={styles.text}>Số Điện Thoại</Text>
            <View style={styles.viewInput}>
              <Image source={countryCode} />
              <TextInput
                style={styles.textInput}
                onChangeText={userPhoneNumber =>
                  setUserPhoneNumber(userPhoneNumber)
                }
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
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
                ref={passwordInputRef}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                onSubmitEditing={Keyboard.dismiss}
                secureTextEntry={true}
                returnKeyType="next"
              />
            </View>
            <Text style={styles.forgotPwd}>Quên mật khẩu?</Text>
          </View>
        </View>
        <View>
          <Text style={{color: 'red', alignSelf: 'center', margin: 15}}>
            {errorText}
          </Text>
          <View style={styles.button}>
            <Pressable onPress={handleLogin} style={styles.btnLogin}>
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </Pressable>
          </View>
          <Text
            style={{
              fontSize: 15,
              color: '#000',
              alignSelf: 'center',
              fontStyle: 'italic',
            }}>
            Bạn chưa có tài khoản? Đăng ký tại đây
          </Text>
        </View>
      </View>
    </View>
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
  btnLogin: {
    alignItems: 'center',
  },
  forgotPwd: {
    color: '#30A2FF',
    alignSelf: 'flex-end',
    paddingTop: 12,
  },
});
