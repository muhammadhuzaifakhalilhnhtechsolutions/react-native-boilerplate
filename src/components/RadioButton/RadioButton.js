import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, BLACK, THEME_COLOR} from '../../utils/Colors';
import {PoppinsRegular} from '../../utils/Fonts';

const RadioButton = ({options, value, onChange}) => {
  return (
    <View>
      <View style={styles.container}>
        {options?.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.radioButtonContainer}
            onPress={() => onChange(option)}>
            <View style={styles.radioButton}>
              {value === option && <View style={styles.radioButtonSelected} />}
            </View>
            <Text style={styles.radioText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    padding: 20,
    borderRadius: 10,
    gap: 30,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 360,
    borderWidth: 2,
    borderColor: THEME_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioButtonSelected: {
    height: 12,
    width: 12,
    borderRadius: 360,
    backgroundColor: THEME_COLOR,
  },
  radioText: {
    fontSize: 14,
    color: BLACK,
    fontFamily: PoppinsRegular,
    textAlignVertical: 'center',
  },
});
