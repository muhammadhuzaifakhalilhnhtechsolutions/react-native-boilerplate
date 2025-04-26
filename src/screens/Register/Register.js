import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BLACK, GRAY, THEME_COLOR, WHITE} from '../../utils/Colors';
import {POPPINS_BOLD, POPPINS_REGULAR} from '../../utils/Fonts';
import Input from '../../components/TextInput/Input';
import Checkbox from '../../components/CheckBox/CheckBox';
import Button from '../../components/Button/Button';
import FastImage from 'react-native-fast-image';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <LinearGradient
      colors={['#225B4E', '#225B4E', BLACK, BLACK]}
      style={styles.conatiner}>
      <StatusBar barStyle={'light-content'} backgroundColor={THEME_COLOR} />
      <KeyboardAvoidingView
        style={styles.conatiner}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.main}>
            <View style={styles.card}>
              <Text style={styles.heading}>Sign up</Text>

              <View style={styles.signupContainer}>
                <Input
                  placeholder="Email"
                  lebal={'Email'}
                  keyboardType={'email-address'}
                  value={email}
                  onChangeText={setEmail}
                />
                <Input
                  placeholder="Full Name"
                  lebal={'Full Name'}
                  value={password}
                  onChangeText={setPassword}
                />

                <Input
                  placeholder="Phone Number"
                  lebal={'Phone Number'}
                  value={password}
                  onChangeText={setPassword}
                />
                <Input
                  placeholder="Password"
                  lebal={'Password'}
                  value={password}
                  onChangeText={setPassword}
                />
                {/* <View style={styles.uploadBox}>
                  <Text style={styles.lebalStyle}>Upload Document</Text>
                  <TouchableOpacity style={styles.docDiv}></TouchableOpacity>
                </View> */}
              </View>
              <Button
                title={'Sign Up'}
                backgroundColor={THEME_COLOR}
                TextColor={WHITE}
              />
              <Text
                style={styles.orText}
                adjustsFontSizeToFit
                numberOfLines={1}>
                ----------------------- OR -----------------------
              </Text>
              <TouchableOpacity style={styles.googleBtn}>
                <FastImage
                  source={require('../../assets/Images/google.png')}
                  style={{height: 25, width: 25}}
                  resizeMode="contain"
                />
                <Text style={styles.googleText}>Continue with Google</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default Register;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    width: '100%',
  },
  main: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: WHITE,
    width: '90%',
    borderRadius: 15,
    paddingVertical: 20,
  },
  heading: {
    color: BLACK,
    fontFamily: POPPINS_BOLD,
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  signupText: {
    color: THEME_COLOR,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: POPPINS_BOLD,
  },
  signupContainer: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orText: {
    color: GRAY,
    fontFamily: POPPINS_REGULAR,
    marginVertical: 20,
    textAlign: 'center',
  },
  googleBtn: {
    backgroundColor: WHITE,
    borderRadius: 10,
    width: '90%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: THEME_COLOR,
  },
  googleText: {
    color: BLACK,
    fontSize: 14,
    fontFamily: POPPINS_BOLD,
    marginLeft: 10,
  },
  uploadBox: {
    width: '100%',
  },
  docDiv: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: GRAY,
    borderStyle: 'dashed',
  },
  lebalStyle: {
    color: GRAY,
    fontFamily: POPPINS_REGULAR,
    fontSize: 14,
    marginBottom: 5,
  },
});
