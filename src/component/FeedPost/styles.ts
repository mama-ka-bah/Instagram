import { StyleSheet } from "react-native";
import colors from "../../themes/colors";
import fonts from "../../themes/fonts";


export default StyleSheet.create({
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
  