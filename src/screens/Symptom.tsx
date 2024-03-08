import React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Modal from "react-native-modal";
import TypeWriter from 'react-native-typewriter';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mainColor } from '../common/colors';
import { useSymptom } from '../hooks/useSymptom';

function VoiceTest() {
  const {isPending, isKeyboardOpened, setIsKeyboardOpened, 
    results, setResults,_stopRecognizing, _startRecognizing, mutateAsync,modalVisible,modalVisibleResult,checkError,closeModalDiagnose,modalVisibleError,setModalVisibleError,setModalVisibleResult,diagnoseAI,handleBackHome} = useSymptom()
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={styles.container} >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {isPending ? <Image style={{ height: '100%', width: '100%', objectFit: 'contain' }} source={require('../assets/Loading_2.gif')}></Image> :
          <View style={styles.containerItem}>
            <Image style={[styles.image, isKeyboardOpened && styles.imageSmall]} source={require('../assets/symptom.png')} />
            <Text style={styles.welcome}>Các triệu chứng bạn đang mắc phải</Text>
            <View style={styles.containerInput}>
              <TextInput style={styles.Input}
                editable
                multiline
                numberOfLines={4}
                maxLength={200}
                placeholder='Nhập triệu chứng của bạn....'
                onFocus={() => setIsKeyboardOpened(true)}
                onBlur={() => setIsKeyboardOpened(false)}
                enterKeyHint='next'
                value={results}
                onChangeText={v => setResults(v)}
              >

              </TextInput>
              <Modal
                animationIn={'bounceInLeft'}
                isVisible={modalVisible}

              >
                <View style={styles.containerVoice}>
                  <Image width={50} height={50} style={{ objectFit: 'contain' }} source={require('../assets/voice.gif')} ></Image>
                  <TouchableOpacity onPress={_stopRecognizing}>
                    <MaterialCommunityIcons size={80} color={'white'} name='close-circle'></MaterialCommunityIcons>
                  </TouchableOpacity>
                </View>

              </Modal>
              <TouchableHighlight onPress={_startRecognizing}>
                <Image style={styles.button} source={require('../assets/button.png')} />
              </TouchableHighlight>
            </View>

            <TouchableOpacity style={styles.buttons} onPress={() => {
              mutateAsync({ prompt: results })

            }}>
              <Text style={styles.title}>
                Tiếp theo
              </Text>

            </TouchableOpacity>

            <Modal
              isVisible={modalVisibleResult}>
              <View style={styles.ModalSymptom}>
                {checkError === 'true'
                  ?
                  <View style={styles.containerErrorDiagnose}>
                    <Image style={{ width: 200, height: 200, objectFit: 'contain' }} source={require('../assets/error.gif')}></Image>
                    <Text style={{ color: 'red', fontWeight: 'bold' }}>
                      Triệu chứng không phù hợp hoặc chưa chi tiết đầy đủ.
                      Vui lòng nhập lại!??
                    </Text>
                    <TouchableOpacity style={styles.buttonBackHome} onPress={() => setModalVisibleResult(false)} >
                      <Text style={styles.textButton}>
                        OK
                      </Text>
                    </TouchableOpacity>
                  </View>
                  :
                  <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image style={{ width: 300, height: 200, objectFit: 'contain' }} source={require('../assets/a.gif')}></Image>
                      <TouchableOpacity onPress={closeModalDiagnose}>
                        <MaterialCommunityIcons color={'red'} size={40} name='close'></MaterialCommunityIcons>
                      </TouchableOpacity>
                    </View>

                    <TypeWriter typing={1} style={styles.TextDiagnose}>{diagnoseAI}</TypeWriter>
                    <View style={styles.containerButton}>
                      <TouchableOpacity style={styles.buttonBackHome} onPress={handleBackHome}>
                        <Text style={styles.textButton}>
                          Quay về trang chủ
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonBook}>
                        <Text style={styles.textButton}>
                          Đặt lịch khám
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                }



              </View>
            </Modal>

            <Modal
              animationIn={'bounceInLeft'}
              isVisible={modalVisibleError}
            >
              <View style={styles.containerError}>
                <Image style={{ objectFit: 'contain', width: 200, height: 200 }} source={require('../assets/error.gif')} ></Image>
                <Text style={styles.nameError}>Lỗi hệ thống! Vui lòng nhập lại</Text>
                <TouchableOpacity style={styles.buttonReClick} onPress={() => setModalVisibleError(false)}>
                  <Text style={{ color: 'white' }}>Nhập lại</Text>
                </TouchableOpacity>
              </View>

            </Modal>
          </View>}

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>




  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black'
  },
  action: {
    textAlign: 'center',
    color: '#0000FF',
    marginVertical: 5,
    fontWeight: 'bold',
  },

  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
  },
  Input: {
    borderWidth: 1,
    borderRadius: 20,
    width: 300,
    maxWidth: 300,
    maxHeight: 70
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 100
  },
  buttons: {
    padding: 10,
    width: 300,
    borderRadius: 15,
    backgroundColor: '#30A2FF',
    marginBottom: 30
  },
  title: {
    color: 'white',
    textAlign: 'center'
  },
  image: {
    width: 300,
    height: 300,
    objectFit: 'contain'
  },
  imageSmall: {
    width: 150,
    height: 150,
    objectFit: 'contain'
  },
  containerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerVoice: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  ModalSymptom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 60,
    maxWidth: 250,
    borderRadius: 20,
  },
  TextDiagnose: {
    fontWeight: 'bold',
    color: mainColor,
    backgroundColor: 'white',
    padding: 20,
    width: 350,
    maxHeight: 550
  },
  textButton: {
    color: 'white',
  },
  buttonBackHome: {
    backgroundColor: '#FB3D56',
    padding: 10,
    borderRadius: 10,
    marginRight: 20,


  },
  buttonBook: {
    backgroundColor: mainColor,
    padding: 10,
    borderRadius: 10,
  },
  containerButton: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  containerError: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25
  },
  nameError: {
    color: 'red',
    fontWeight: 'bold'
  },
  buttonReClick: {
    backgroundColor: '#FB3D56',
    padding: 10,
    borderRadius: 10,
    margin: 10
  },
  containerErrorDiagnose: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 30
  }
});

export default VoiceTest;