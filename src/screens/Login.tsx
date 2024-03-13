import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {createRef, useState} from 'react';
import {useLogin} from '../hooks/useAuth';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from 'react-native-check-box';
import { mainColor } from '../common/colors';

export const Login = () => {
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [isDoctor, setIsDoctor] = useState(false);
  
  const passwordInputRef = createRef();
  const {
    mutate: login,
    isError,
    error,
    isPending,
    isSuccess,
  } = useLogin(setErrorText);
  const navigation = useNavigation();
  const [hidePwd, setHidePwd] = useState(true);

  const handleLogin = () => {
    try {
      if (!userPhoneNumber) {
        setErrorText('Vui lòng nhập số điện thoại');
        return;
      }
      if (!userPassword) {
        setErrorText('Vui lòng nhập mật khẩu');
        return;
      }
      setLoading(true);
      let dataToSend: any = {username: userPhoneNumber, password: userPassword};
      login(dataToSend);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={{alignSelf: 'center', alignItems: 'center'}}>
          <Image source={require('../assets/logo.png')} />
          <Text style={styles.title}>Đăng nhập</Text>
        </View>
        <View style={styles.formLogin}>
          <View>
            <Text style={styles.text}>Số Điện Thoại</Text>
            <View style={styles.viewInput}>
              <Image source={require('../assets/countryCode.png')} />
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
                returnKeyType="next"
                secureTextEntry={hidePwd}
              />
              <Pressable onPress={() => setHidePwd(!hidePwd)}>
                <Icon name={hidePwd ? 'eye' : 'eye-off'} size={30} />
              </Pressable>
            </View>
            <View style={styles.checkBoxView}>

            <CheckBox
              onClick={() => {
                setIsDoctor(!isDoctor);
              }}
              isChecked={isDoctor}
              checkBoxColor={mainColor}
            >
            </CheckBox>
            <Text style= {styles.checkBoxText}>Bạn là bác sĩ?</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{color: 'red', alignSelf: 'center', margin: 15}}>
            {errorText}
          </Text>
          <View>
            <View style={styles.button}>
              <TouchableOpacity onPress={handleLogin} style={styles.btnLogin}>
                <Text style={styles.buttonText}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.registerText}>
              Bạn chưa có tài khoản?{' '}
              <Text
                style={{color: '#30A2FF'}}
                onPress={() => navigation.navigate('register')}>
                {' '}
                Đăng ký tại đây
              </Text>
            </Text>
          </View>
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
  formLogin: {
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
    fontSize: 18,
    color: '#FFF',
    fontWeight: '500',
  },
  btnLogin: {
    alignItems: 'center',
  },
  checkBoxView: {
    color: '#30A2FF',
    alignSelf: 'flex-end',
    paddingTop: 12,
    paddingRight:10,
    flexDirection: 'row',
    gap:5,
    alignItems: 'center'
  },
  checkBoxText:{
    color: '#000',
    fontWeight: '700'
  },
  registerText: {
    fontSize: 16,
    color: '#000',
    alignSelf: 'center',
    fontStyle: 'italic',
  },
});
