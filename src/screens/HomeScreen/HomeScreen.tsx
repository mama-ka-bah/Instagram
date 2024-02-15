import {FlatList, ViewToken, ViewabilityConfig} from 'react-native';
import FeedPost from '../../component/FeedPost';

import posts from '../../assets/data/post.json';
import { useRef, useState } from 'react';

export default function HomeScreen() {

  const [activePostId, setActivePostId] = useState<string | null>(null);

  const viewabilytyConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id)
      }
    },
  );

  return (
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} isVisible={activePostId === item.id} />}
        keyExtractor={item => {
          return `post-${item.createdAt}`;
        }}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewabilytyConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
  );
}
