import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BLACK, WHITE} from '../../utils/Colors';
import {PoppinsSemiBold} from '../../utils/Fonts';

const TitleHeader = ({
  isBack = Boolean,
  onPress = Function,
  title = String,
}) => {
  return (
    <View style={styles.container}>
      {isBack && (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Ionicons name="arrow-back" color={WHITE} size={22} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TitleHeader;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  btn: {
    height: 42,
    width: 42,
    borderRadius: 360,
    backgroundColor: '#156778',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 10,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: PoppinsSemiBold,
    color: BLACK,
    textAlign: 'center',
    width: '100%',
  },
});
