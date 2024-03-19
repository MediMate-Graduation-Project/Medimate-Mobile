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
import { ErrorModal } from '../components/ErrorModal';
import { ButtonMain } from '../components/ButtonMain';
import { ButtonItem } from '../components/ButtonItem';

function Diagnose() {
  const { isPending, isKeyboardOpened, setIsKeyboardOpened,
    results, setResults, _stopRecognizing, _startRecognizing,handleNavigateMap, mutateAsync,handleNavigateBack, modalVisible, modalVisibleResult, checkError, closeModalDiagnose, modalVisibleError, setModalVisibleError, setModalVisibleResult, diagnoseAI, handleBackHome } = useSymptom()
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
                maxLength={8000}
                placeholder='Nhập triệu chứng của bạn....'
                onFocus={() => setIsKeyboardOpened(true)}
                onBlur={() => setIsKeyboardOpened(false)}
                enterKeyHint='next'
                value={results}
                onChangeText={v => setResults(v)}
              >
              </TextInput>
              <TouchableHighlight onPress={_startRecognizing}>
                <Image style={styles.button} source={require('../assets/button.png')} />
              </TouchableHighlight>
              <Modal
                animationIn={'bounceInLeft'}
                isVisible={modalVisible}

              >
                <View style={styles.containerVoice}>
                  <TypeWriter typing={1} style={styles.resultVoice} >{results}</TypeWriter>
                  <Image style={styles.ImageVoice} source={require('../assets/Voice_gif.gif')} ></Image>
                  <ButtonItem titleLeft='Quay lại' handleOnpresLeft={handleNavigateBack}
                        titleRight='Chẩn đoán' handleOnpresRight={()=>{{
                          mutateAsync({prompt:results}),_stopRecognizing}
                        }}
                  />
                </View>

              </Modal>

            </View>
            <ButtonMain title='Chẩn đoán' handleOnpres={() => {
              mutateAsync({ prompt: results })
            }} />
            <Modal
              isVisible={modalVisibleResult}>
              <View style={styles.ModalSymptom}>
                {checkError === 'true'
                  ?
                  <ErrorModal image={require('../assets/error.gif')}
                    message='Triệu chứng không phù hợp hoặc chưa chi tiết đầy đủ.
                      Vui lòng nhập lại!??'
                    handleNavigate={() => { setModalVisibleResult(false), setIsKeyboardOpened(false) }}
                  />

                  :
                  <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image style={{ width: 300, height: 200, objectFit: 'contain' }} source={require('../assets/a.gif')}></Image>
                      <TouchableOpacity onPress={closeModalDiagnose}>
                        <MaterialCommunityIcons color={'red'} size={40} name='close'></MaterialCommunityIcons>
                      </TouchableOpacity>
                    </View>

                    <TypeWriter typing={1} style={styles.TextDiagnose}>{diagnoseAI}</TypeWriter>
                    <ButtonItem
                      titleLeft='Quay về trang chủ' handleOnpresLeft={handleBackHome}
                      titleRight='Đặt lịch khám' handleOnpresRight={handleNavigateMap}
                    />

                  </View>
                }



              </View>
            </Modal>

            <Modal
              animationIn={'bounceInLeft'}
              isVisible={modalVisibleError}
            >
              <ErrorModal
                image={require('../assets/error.gif')}
                message='Lỗi hệ thống! Vui lòng nhập lại'
                handleNavigate={() => { setModalVisibleError(false), setIsKeyboardOpened(false),_stopRecognizing() }}
              />
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
    width: 300,
    maxWidth: 300,
    maxHeight: 70
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 20,
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
    alignItems: 'center',
    flexDirection:'column'
  },
  ModalSymptom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
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
    padding: 5
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
  

  buttonReClick: {
    backgroundColor: '#FB3D56',
    padding: 10,
    borderRadius: 10,
    margin: 10
  },
  ImageVoice:{

  },
  resultVoice:{
    marginTop:30,
    width: 400,
    fontSize:20,
    color:'white',
    padding:10
  }
});

export default Diagnose;
