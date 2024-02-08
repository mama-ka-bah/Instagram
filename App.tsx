import {Image, StyleSheet, Text, View} from 'react-native';
import colors from './src/themes/colors';
import fonts from './src/themes/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function App() {
  return (
    <View style={styles.post}>
      {/** Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>vadimnotjustdev</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/** Content */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
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
          <Text style={styles.bold}>66 others</Text>
        </Text>

        {/**Post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>vadimnotjustdev</Text> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Blanditiis earum magnam at labore
          doloremque dolore eveniet provident. Deleniti fuga molestias dolores
          labore et rerum rem tempore dolore quibusdam, odit aliquam.
        </Text>

        {/**Comments */}
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>vadimnotjustdev</Text> Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
          </Text>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
        </View>
        <Text>19 December, 2021</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: colors.black,
    lineHeight: 18
  },
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
