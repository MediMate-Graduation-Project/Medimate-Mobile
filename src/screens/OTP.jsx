import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
export default OTP = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={{alignSelf: 'center', alignItems: 'center'}}>
          <Text style={styles.title}>XÁC MINH MÃ OTP</Text>
        </View>
        <View style={{flexDirection: 'column', gap: 30, alignItems:'center'}}>
          <Text>Vui lòng nhập OTP đã gửi đến điện thoại của bạn</Text>
          <View style={styles.viewOTP}>
            <View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput} keyboardType="numeric" />
              </View>
            </View>
            <View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput} keyboardType="numeric" />
              </View>
            </View>
            <View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput} keyboardType="numeric" />
              </View>
            </View>
            <View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput} keyboardType="numeric" />
              </View>
            </View>
          </View>
          <Text>Gửi lại mã</Text>
        </View>
        <View>
          <View style={styles.button}>
            <Pressable onPress={() => {}} style={styles.btnLogin}>
              <Text style={styles.buttonText}>Xác minh</Text>
            </Pressable>
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
    justifyContent: 'flex-start',
    gap:64,
    flex: 2,
    paddingVertical:25
  },
  viewOTP: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  viewInput: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  textInput: {
    fontSize: 45,
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
    gap: 30,
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#30A2FF',
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
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
