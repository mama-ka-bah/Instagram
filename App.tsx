import {ScrollView, StyleSheet, View} from 'react-native';
import FeedPost from './src/component/FeedPost/FeedPost';

export default function App() {
  return (
    <ScrollView style={styles.app}>
      {/**Appel au compoent FeedPost */}
      <FeedPost />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
