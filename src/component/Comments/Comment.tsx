import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import { IComment } from '../../types/models';

interface ICommentProps {
  comment: IComment
}

export default function Comments({comment}: ICommentProps) {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign
        name={'hearto'}
        size={24}
        style={styles.icon}
        color={colors.black}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
