import {FlatList} from 'react-native';
import FeedPost from '../../component/FeedPost';

import posts from '../../assets/data/post.json';

export default function HomeScreen() {
  return (
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        keyExtractor={item => {
          return `post-${item.createdAt}`;
        }}
        showsVerticalScrollIndicator={false}
      />
  );
}
