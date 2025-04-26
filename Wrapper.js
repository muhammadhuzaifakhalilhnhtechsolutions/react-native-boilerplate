import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WHITE} from './src/utils/Colors';

const Wrapper = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={WHITE} />
      <View style={styles.main}>{children}</View>
    </SafeAreaView>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: StatusBar.currentHeight,
  },
  main: {
    flex: 1,
    width: '98%',
    alignSelf: 'center',
  },
});
