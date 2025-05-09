import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('textInput'); // Start with text input

  const handleTextDetection = () => {
    // In the future, this will send 'inputText' to your backend
    console.log('Detecting text:', inputText);
    setResult('Result from text analysis will go here');
    setCurrentScreen('results');
  };

  const handleImageSelection = () => {
    // In the future, this will allow image selection
    console.log('Selecting image');
    setSelectedImage('Image URI will go here');
    setCurrentScreen('imageInput');
  };

  const handleImageDetection = () => {
    // In the future, this will send 'selectedImage' to your backend
    console.log('Detecting image:', selectedImage);
    setResult('Result from image analysis will go here');
    setCurrentScreen('results');
  };

  const handleGoBack = () => {
    setCurrentScreen('textInput'); // Go back to the text input screen
    setResult(null);
    setSelectedImage(null);
    setInputText('');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'textInput':
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Enter News Text</Text>
            <TextInput
              style={styles.input}
              placeholder="Headline and/or body"
              multiline
              value={inputText}
              onChangeText={text => setInputText(text)}
            />
            <Button title="Detect from Text" onPress={handleTextDetection} />
            <Button title="Detect from Image" onPress={handleImageSelection} />
          </View>
        );
      case 'imageInput':
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Select Image</Text>
            {selectedImage && <Text>Image Selected: {selectedImage.substring(0, 20)}...</Text>}
            <Button title="Choose Image" onPress={() => console.log('Implement image picker')} /> {/* Placeholder */}
            {selectedImage && <Button title="Detect from Image" onPress={handleImageDetection} />}
            <Button title="Go Back" onPress={handleGoBack} />
          </View>
        );
      case 'results':
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Detection Result</Text>
            {result && <Text style={styles.resultText}>{result}</Text>}
            <Button title="Go Back" onPress={handleGoBack} />
          </View>
        );
      default:
        return null;
    }
  };

  return <View style={styles.mainContainer}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 150,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    textAlignVertical: 'top', // For multiline input to start from top
  },
  resultText: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
});