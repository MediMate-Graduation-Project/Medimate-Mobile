import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Voice from '@react-native-community/voice';

export const VoiceDemo= () => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStartHandler = () => {
    console.log('Speech started');
    setIsListening(true);
  };

  const onSpeechEndHandler = () => {
    console.log('Speech ended');
    setIsListening(false);
  };

  const onSpeechResultsHandler = (event) => {
    console.log('Speech results:', event.value);
    setRecognizedText(event.value[0]);
  };

  const startSpeechToText = async () => {
    try {
      await Voice.start('en-US');
    } catch (error) {
      console.error(error);
    }
  };

  const stopSpeechToText = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{recognizedText}</Text>
      {isListening ? (
        <Button title="Stop Listening" onPress={stopSpeechToText} />
      ) : (
        <Button title="Start Listening" onPress={startSpeechToText} />
      )}
    </View>
  );
};

