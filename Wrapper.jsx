import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';

const Wrapper = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
