import {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import colors from '../../themes/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Comments from '../Comments/Comment';
import DoublePressable from '../DoublePressable';

import styles from './styles';

import {IPost} from '../../types/models';
import Carousel from '../Carousel/Carousel';

interface FeedPost {
  post: IPost;
}

export default function FeedPost({post}: FeedPost) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(v => !v);
  };

  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  let content = null;

  if (post.image) {
    content = (
      <DoublePressable onDoublePressable={toggleLike}> 
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
      </DoublePressable>
    );
  }else if (post.images){
    content = (<Carousel  images={post.images} onDoublePress={toggleLike} />);
  }

  return (
    <View style={styles.post}>
      {/** Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/** Content */}
          <View>{content}</View>

      {/** Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>

          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />

          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/** Liked */}
        <Text>
          Liked by <Text style={styles.bold}>lgrinevicius</Text> and{' '}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>

        {/**Post description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>

        <Text onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>

        {/**Comments */}
        <Text>View all {post.nofComments} comments</Text>
        {post.comments.map((comment: any) => (
          <Comments key={comment.id} comment={comment} />
        ))}

        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
}
