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

const Login = ({navigation}) => {
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
              <Text style={styles.heading}>Login</Text>
              <Text style={styles.subHeading}>
                Don’t have an account?{' '}
                <Text
                  style={styles.signupText}
                  onPress={() => navigation.navigate('Register')}>
                  Sign Up
                </Text>
              </Text>
              <View style={styles.signupContainer}>
                <Input
                  placeholder="Email"
                  lebal={'Email'}
                  keyboardType={'email-address'}
                  value={email}
                  onChangeText={setEmail}
                />
                <Input
                  placeholder="Password"
                  lebal={'Password'}
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
              <View style={styles.box}>
                <Checkbox
                  options={[{label: 'Remember me', value: '1'}]}
                  selectedValues={selectedOptions}
                  onChange={setSelectedOptions}
                />
                <TouchableOpacity>
                  <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <Button
                title={'Login'}
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

export default Login;

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
  subHeading: {
    color: GRAY,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: POPPINS_REGULAR,
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
    marginTop: 20,
  },
  box: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  rememberText: {
    color: GRAY,
    fontSize: 14,
    fontFamily: POPPINS_REGULAR,
  },
  forgotText: {
    color: THEME_COLOR,
    fontSize: 14,
    fontFamily: POPPINS_BOLD,
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
});
