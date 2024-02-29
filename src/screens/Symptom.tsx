import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Voice, {

  SpeechResultsEvent,
  SpeechErrorEvent,
  SpeechRecognizedEvent,
} from '@react-native-voice/voice';
import { TouchableOpacity } from 'react-native';
import { Keyboard } from 'react-native';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import { Button } from 'react-native';
import TypeWriter from 'react-native-typewriter'
import Modal from "react-native-modal";
import { mainColor } from '../common/colors';
import { useNavigation } from '@react-navigation/native';
function VoiceTest() {
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [isKeyboardOpened, setIsKeyboardOpened] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleResult, setModalVisibleResult] = useState(false);
  const [modalVisibleError, setModalVisibleError] = useState(false);
  const [diagnoseAI, setdiagnoseAI] = useState('')
  const [checkError, setCheckError] = useState('false');
  const navigation=useNavigation();
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e: any) => {
    console.log('onSpeechStart: ', e);
    setStarted('√');
  };


  const onSpeechEnd = (e: any) => {
    console.log('onSpeechEnd: ', e);
    setEnd('√');
  };

  const onSpeechError = (e: SpeechErrorEvent) => {
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };

  const onSpeechResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechResults: ', e.value);
    setResults(e.value[0]);
  };

  const _startRecognizing = async () => {
    _clearState();
    setModalVisible(true)
    try {
      await Voice.start('en-US');
      console.log('called start');
    } catch (e) {
      console.error(e);
    }
  };

  const _stopRecognizing = async () => {
    setModalVisible(false)
    try {
      await Voice.stop();
      console.log('called end');
    } catch (e) {
      console.error(e);
    }
  };
  const _clearState = () => {
    setStarted('');
    setResults([]);
  };

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: () => {
      const requestData = {
        prompt: '(Lưu ý giúp tôi nhé =>nếu nhập sai, tầm bậy hoặc không phải triệu chứng bệnh thì đưa ra chữ Sai, còn nếu nhập đúng các triệu chứng thì đưa ra kết quả ngắn gọn chính xác nhất có thể)Tôi bị bệnh gì, đưa ra chẩn đoán sơ bộ 1 bệnh cụ thể và đưa ra phòng khám chuyên khoa phù hợp cho nó, triệu chứng là: ' + results
      };
      console.log(requestData);
      return axios.post('https://medimate-be.onrender.com/prompt', requestData);


    },
    onSuccess: (response) => {
      console.log('API Response:', response.data);
      setdiagnoseAI(response.data)
      setModalVisibleResult(true)
      console.log('m', diagnoseAI);

      if (response.data === "Sai") {
        setCheckError('true')
      } else {
        setCheckError('false')
      }
      console.log('e', checkError);

    },
    onError: (error) => {
      console.error('API Error:', error);
      setModalVisibleError(true)
    },
  });
  console.log("Results:", diagnoseAI[0]);
  const closeModalDiagnose = () => {
    setModalVisibleResult(false);
    setdiagnoseAI('')
    setIsKeyboardOpened(false)
  }

  const handleBackHome=()=>{
    navigation.navigate('Home')
  }
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
                  <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
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