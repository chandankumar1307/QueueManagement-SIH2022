import { KeyboardAvoidingView, TextInput } from 'react-native';

export default function TextInputButton({viewStyle, inputStyle, placeholder, onChangeText}) {
  return (
      <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={viewStyle}>

        <TextInput style={inputStyle} placeholder={placeholder} onChangeText={onChangeText}></TextInput>
      </KeyboardAvoidingView>
  );
}