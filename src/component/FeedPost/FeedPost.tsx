import {Image, Text, View} from 'react-native';
import colors from '../../themes/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Comments from '../Comments/Comment';

import styles from './styles';

import { IPost} from '../../types/models';

interface FeedPost {
  post: IPost
}

export default function FeedPost({post}: FeedPost) {
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
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />

      {/** Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
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
        <Text style={styles.text}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>

        {/**Comments */}
        <Text>View all {post.nofComments} comments</Text>
        {post.comments.map((comment: any) => (
          <Comments key={comment.id} comment= {comment} />
        ))}

        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
}
