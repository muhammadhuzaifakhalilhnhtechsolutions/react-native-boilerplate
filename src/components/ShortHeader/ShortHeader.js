import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {WHITE} from '../../utils/Colors';

const ShortHeader = ({onPress, color}) => {
  return (
    <TouchableOpacity style={styles.conatiner} onPress={onPress}>
      <Ionicons name="arrow-back" color={color ? color : WHITE} size={24} />
    </TouchableOpacity>
  );
};

export default ShortHeader;

const styles = StyleSheet.create({
  conatiner: {
    height: 45,
    width: 45,
    borderRadius: 360,
    backgroundColor: '#156778',
    // backgroundColor: 'rgba(0, 0, 0, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
