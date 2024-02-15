import {FlatList, StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/HomeScreen/CommentsScreen/CommentsScreen';

export default function App() {
  return (
    <View style={styles.app}>
    {/** <HomeScreen /> */}
    <CommentsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
