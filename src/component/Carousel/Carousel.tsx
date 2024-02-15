import {useState, useRef} from 'react';

import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  Text,
  ViewToken,
  ViewabilityConfig,
} from 'react-native';
import colors from '../../themes/colors';
import DoublePressable from '../DoublePressable';

interface ICarousel {
  images: string[],
  onDoublePress?: () => void
}

export default function Carousel({images, onDoublePress = () => {}}: ICarousel) {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewabilytyConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  /*
  const onViewableItemsChanged = ({viewableItems}:any) => {
    if (viewableItems.length > 0) {
      console.log("index: ", viewableItems[0].index);
      setActiveImageIndex(viewableItems[0].index);
    }
  };
  */

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePressable={onDoublePress}>
            <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilytyConfig}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              aspectRatio: 1,
              borderRadius: 5,
              backgroundColor:
                activeImageIndex === index ? colors.primary : colors.white,
              margin: 10,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
}
