import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Voice, {SpeechResultsEvent,SpeechErrorEvent,SpeechRecognizedEvent,} from '@react-native-voice/voice';
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
export const useSymptom=()=>{
  const [isRecording, setIsRecording] = useState(false);
  const [results, setResults] = useState<string>('');
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
        modalVisibleError,
        modalVisibleResult,
        checkError,
        diagnoseAI
    }

  )
}