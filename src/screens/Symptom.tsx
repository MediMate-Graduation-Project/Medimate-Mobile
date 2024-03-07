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
  Modal,
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

function Symptom() {
  const [recognized, setRecognized] = useState('');
  const [volume, setVolume] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);
  const [isKeyboardOpened, setIsKeyboardOpened] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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


  const _cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  const _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    _clearState();
  };

  const _clearState = () => {
    setRecognized('');
    setVolume('');
    setError('');
    setEnd('');
    setStarted('');
    setResults([]);
    setPartialResults([]);
  };

  return (


    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}

      style={[styles.container, modalVisible ? { backgroundColor: 'gray',opacity:1 } : {backgroundColor: '#F5FCFF'}]} >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                onChangeText={v=>setResults(v)}
              >

              </TextInput>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
              
              >
                <View style={styles.containerVoice}>
                  <Image width={50} height={50} style={{ objectFit: 'contain' }} source={require('../assets/voice.gif')} ></Image>
                  <TouchableOpacity onPress={_stopRecognizing}>
                    <MaterialCommunityIcons size={80} name='close-circle'></MaterialCommunityIcons>
                  </TouchableOpacity>
                </View>

              </Modal>
              <TouchableHighlight onPress={_startRecognizing}>
                <Image style={styles.button} source={require('../assets/button.png')} />
              </TouchableHighlight>
            </View>

            <TouchableOpacity style={styles.buttons}>
              <Text style={styles.title}>
                Tiếp theo
              </Text>
            </TouchableOpacity>
            <Text>STRART{started}</Text>
            <Text>Result:{results}</Text>
            
          </View>



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
    marginBottom:30
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
  containerVoice:{
    justifyContent:'center',
    alignItems:'center'
  }
});

export default Symptom;