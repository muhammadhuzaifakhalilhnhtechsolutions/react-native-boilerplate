import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={{color: 'red', fontSize: 22}}>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
});
