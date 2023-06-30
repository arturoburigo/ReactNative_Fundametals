import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/HomeScreen';

export default function App() {
  return (
    <View className='flex-1 bg-gray-700'>
      <StatusBar 
        style='light'
        translucent
        backgroundColor='transparent'
      />
      <Home/>
    </View>
  );
}

