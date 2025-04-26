import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {POPPINS_SEMI_BOLD} from '../../utils/Fonts';
import {THEME_COLOR, WHITE} from '../../utils/Colors';

const Button = ({
  onPress,
  title,
  style,
  textStyle,
  disabled,
  outlined,
  backgroundColor,
  TextColor,
  outlinedColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        style,
        {
          backgroundColor: outlined
            ? 'transparent'
            : backgroundColor
            ? backgroundColor
            : WHITE,
          borderColor: outlined ? outlinedColor : null,
          borderWidth: outlined ? 1 : null,
        },
      ]}
      disabled={disabled}>
      <Text
        style={[
          styles.buttonText,
          textStyle,
          {
            color: TextColor,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: WHITE,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: THEME_COLOR,
    fontSize: 14,
    fontFamily: POPPINS_SEMI_BOLD,
  },
});

export default Button;
