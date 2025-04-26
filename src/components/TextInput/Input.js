import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  BACKGROUND_COLOR,
  BLACK,
  GRAY,
  THEME_COLOR,
  INPUT_BORDERWIDTH_GREY,
} from '../../utils/Colors';
import {PoppinsRegular} from '../../utils/Fonts';

const Input = ({
  placeholder = 'Placeholder',
  placeholderTextColor = '#64748B',
  onChangeText,
  value,
  style,
  numberOfLines = 1,
  multiline,
  onBlur,
  editable,
  keyboardType,
  maxLength,
  ref,
  icon,
  iconName,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPassword = placeholder.toLowerCase().includes('password');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      {icon && (
        <Ionicons
          name={iconName}
          color={THEME_COLOR}
          size={22}
          style={styles.iconStyle}
        />
      )}
      <TextInput
        ref={ref}
        placeholder={placeholder}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : 'gray'
        }
        onChangeText={onChangeText}
        cursorColor={THEME_COLOR}
        value={value}
        numberOfLines={numberOfLines}
        multiline={multiline}
        selectionColor={'#73a4ae'}
        onBlur={onBlur}
        editable={editable}
        maxLength={maxLength}
        keyboardType={keyboardType}
        secureTextEntry={isPassword && !isPasswordVisible}
        style={[
          {
            ...styles.inputstyles,
            paddingRight: isPassword ? 40 : 0,
            // marginLeft: icon ? 35 : 10,
            width: icon ? '80%' : '90%',
          },
          style,
        ]}
      />
      {isPassword && (
        <TouchableOpacity
          style={styles.icon}
          onPress={togglePasswordVisibility}>
          <Ionicons
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={22}
            color={GRAY}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: GRAY,
    marginTop: 10,
  },
  inputstyles: {
    fontSize: 14,
    color: BLACK,
    fontFamily: PoppinsRegular,
    paddingHorizontal: 10,
    paddingVertical: 13,
    textAlignVertical: 'center',
  },
  icon: {
    position: 'absolute',
    right: 12,
    zIndex: 1,
  },
  iconStyle: {
    position: 'absolute',
    left: 12,
    zIndex: 1,
  },
});
