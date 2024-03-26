import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Voice, {SpeechResultsEvent,SpeechErrorEvent,SpeechRecognizedEvent,SpeechEndEvent} from '@react-native-voice/voice';
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
export const useSymptom=()=>{
  const [isRecording, setIsRecording] = useState(true);
  const [results, setResults] = useState<string>('');
  const [resultsVoice, setResultsVoice] = useState<string>('');
  const [isKeyboardOpened, setIsKeyboardOpened] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleResult, setModalVisibleResult] = useState(false);
  const [modalVisibleError, setModalVisibleError] = useState(false);
  const [diagnoseAI, setdiagnoseAI] = useState('')
  const [checkError, setCheckError] = useState(false);
  const [messageError,setMessageError]=useState('')
  const navigation=useNavigation();
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechPartialResults = onSpeechResults;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e: any) => {
    console.log('onSpeechStart: ', e);
    setIsRecording(true);
  };


  const onSpeechEnd = (e: SpeechEndEvent) => {
    console.log('onSpeechEnd: ', e);
    setIsRecording(false);
  };

  const onSpeechError = (e: SpeechErrorEvent) => {
    console.log('onSpeechError: ', e);
    setCheckError(true)
    setMessageError('Không nhận diện được giọng nói. Vui lòng thử lại!')
  };

  const onSpeechResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechResults: ', e.value);
    setResultsVoice(e.value && e.value[0] || '');
  };

  const _startRecognizing = async () => {
    setModalVisible(true)
    _clearState();
  
    try {
      await Voice.start('vi-VN');
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
    setCheckError(false);
    setIsRecording(true);
    setResultsVoice('');
  };
 const _stopSpeaking=async()=>{
  setIsRecording(false)
  try {
    await Voice.stop();
    console.log('called end');
  } catch (e) {
    console.error(e);
  }
 }
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: () => {
      if (resultsVoice != '') {
        const requestData = {
          diagnose: '(Lưu ý giúp tôi nhé =>nếu nhập sai, tầm bậy hoặc không phải triệu chứng bệnh thì đưa ra chữ Sai, còn nếu nhập đúng các triệu chứng thì đưa ra kết quả ngắn gọn chính xác nhất có thể)Tôi bị bệnh gì, đưa ra chẩn đoán sơ bộ 1 bệnh cụ thể với câu có thể bạn đang bị: và đưa ra phòng khám chuyên khoa phù hợp cho nó với câu bạn nên đến phòng khám: , triệu chứng là: ' + resultsVoice
        };
        console.log(requestData);
        return axios.post('https://medimate-be.onrender.com/diagnose', requestData);
      }else{
        const requestData = {
          diagnose: '(Lưu ý giúp tôi nhé =>nếu nhập sai, tầm bậy hoặc không phải triệu chứng bệnh thì đưa ra chữ Sai, còn nếu nhập đúng các triệu chứng thì đưa ra kết quả ngắn gọn chính xác nhất có thể)Tôi bị bệnh gì, đưa ra chẩn đoán sơ bộ 1 bệnh cụ thể với câu có thể bạn đang bị: và đưa ra phòng khám chuyên khoa phù hợp cho nó với câu bạn nên đến phòng khám: , triệu chứng là: ' + results        };
        console.log(requestData);
        return axios.post('https://medimate-be.onrender.com/diagnose', requestData);
      }


    },
    onSuccess: (response) => {
      console.log('API Response:', response.data);
      setdiagnoseAI(response.data)
      setModalVisibleResult(true)
      console.log('m', diagnoseAI);

      if (response.data === "Sai") {
        setCheckError(true)
      } else {
        setCheckError(false)
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
    navigation.navigate('Trang chủ')
  }
  const handleNavigateBack=()=>{
    _stopRecognizing();
    navigation.navigate('diagnose')
  }
  const handleNavigateMap=()=>{
    _stopRecognizing();
    setModalVisibleResult(false);
    navigation.navigate('Maps')
  }
  return(
    {
        _startRecognizing,
        _stopRecognizing,
        mutateAsync,
        isPending,
        closeModalDiagnose,
        handleBackHome,
        isKeyboardOpened,
        setIsKeyboardOpened,
        results,
        setResults,
        modalVisible,
        setModalVisible,
        setModalVisibleError,
        setModalVisibleResult,
        modalVisibleError,
        modalVisibleResult,
        checkError,
        diagnoseAI,
        handleNavigateBack,
        handleNavigateMap,
        isRecording,
        setIsRecording,
        messageError,
        _stopSpeaking,
        resultsVoice
    }

  )
}