import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, BLACK, THEME_COLOR} from '../../utils/Colors';
import {POPPINS_REGULAR, PoppinsRegular} from '../../utils/Fonts';

const Checkbox = ({options, selectedValues, onChange, style}) => {
  const toggleSelection = option => {
    const newSelectedValues = [...selectedValues];
    const index = newSelectedValues.findIndex(
      item => item.value === option.value,
    );

    if (index > -1) {
      newSelectedValues.splice(index, 1);
    } else {
      newSelectedValues.push(option);
    }

    onChange(newSelectedValues);
  };

  const isSelected = option => {
    return selectedValues.some(item => item.value === option.value);
  };

  return (
    <View>
      <View style={[styles.container, style]}>
        {options?.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.checkboxContainer}
            onPress={() => toggleSelection(option)}>
            <View
              style={[
                styles.checkbox,
                isSelected(option) && styles.checkboxSelected,
              ]}>
              {isSelected(option) && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.checkboxText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    borderRadius: 10,
    gap: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 20,
    width: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: THEME_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checkboxSelected: {
    backgroundColor: THEME_COLOR,
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxText: {
    fontSize: 14,
    color: BLACK,
    fontFamily: POPPINS_REGULAR,
    textAlignVertical: 'center',
  },
});
