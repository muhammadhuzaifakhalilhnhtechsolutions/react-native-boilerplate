import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../Button/Button';
import {THEME_COLOR, WHITE} from '../../utils/Colors';

const Footer = ({
  firstBtnTitle,
  secondBtnTitle,
  onPressFirst,
  onPressSecond,
  style,
}) => {
  return (
    <View style={styles.container}>
      <Button
        title={firstBtnTitle}
        outlined={true}
        TextColor={WHITE}
        outlinedColor={WHITE}
        onPress={onPressFirst}
        style={{...styles.btn, style}}
      />
      <Button
        title={secondBtnTitle}
        backgroundColor={WHITE}
        TextColor={THEME_COLOR}
        onPress={onPressSecond}
        style={{...styles.btn, style}}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: THEME_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
  },
  btn: {
    width: '45%',
  },
});
