import {FlatList, StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

export default function App() {
  return (
    <View style={styles.app}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
