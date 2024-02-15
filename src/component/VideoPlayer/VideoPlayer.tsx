import {useState} from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Video from 'react-native-video';
import colors from '../../themes/colors';

interface IVideoPlayer {
  uri: string,
  paused: boolean
}

export default function VidePlayer({uri, paused}: IVideoPlayer) {
  const [muted, setMuted] = useState(true);
  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted={muted}
        paused={paused}
      />
      <Pressable style={styles.muteButton} onPress={() => setMuted(v => !v)}>
        <Ionicons name={muted ? 'volume-mute' : 'volume-medium'} size={14} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButton: {
    backgroundColor: colors.black,
    padding: 5,
    position: 'absolute',
    bottom: 10,
    right: 10
  }
});
