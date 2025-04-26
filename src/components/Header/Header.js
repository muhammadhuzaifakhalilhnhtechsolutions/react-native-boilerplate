import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {THEME_COLOR, WHITE} from '../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {POPPINS_SEMI_BOLD} from '../../utils/Fonts';

const Header = ({
  icon,
  title,
  onPress,
  onPressRightBtn,
  rightBtnTitle,
  iconName,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.divTitle}>
        {icon && (
          <TouchableOpacity style={styles.backBtnDiv} onPress={onPress}>
            <Ionicons name="arrow-back" size={28} color={WHITE} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.previewBtn} onPress={onPressRightBtn}>
        <Text
          style={{
            ...styles.previewText,
            marginHorizontal: rightBtnTitle ? 10 : 0,
          }}>
          {rightBtnTitle}
        </Text>
        <Ionicons
          name={iconName}
          size={22}
          color={WHITE}
          style={{marginRight: rightBtnTitle ? 5 : 0}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLOR,
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  backBtnDiv: {
    width: '10%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divTitle: {
    width: '65%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: WHITE,
    fontSize: 18,
    fontFamily: POPPINS_SEMI_BOLD,
    width: '90%',
    textAlign: 'left',
    paddingLeft: 20,
  },
  previewBtn: {
    padding: 6,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: WHITE,
    borderRadius: 360,
    marginRight: 5,
  },
  previewText: {
    color: WHITE,
    fontSize: 14,
    fontFamily: POPPINS_SEMI_BOLD,
  },
});
