import {StyleSheet, View, TouchableOpacity, Text, Platform} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GRAY, THEME_COLOR, THEME_ORANGE, WHITE} from '../utils/Colors';
import {POPPINS_BOLD, POPPINS_SEMI_BOLD} from '../utils/Fonts';
import {useDispatch} from 'react-redux';
import {show} from '../ReduxRtk/Slice/DashboardState/DashboardState';

const UserTabs = ({descriptors, customStyles, state, navigation, ...props}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions?.tabBarStyle?.display == 'none') {
    return null;
  }
  const dispatch = useDispatch();

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={styles.tabBtn}
        onPress={() => navigation.navigate('Home')}>
        {state.index === 0 ? (
          <>
            <Ionicons name="home-outline" size={28} color={THEME_ORANGE} />
            <Text style={styles.TextStyleActive}>Home</Text>
          </>
        ) : (
          <>
            <Ionicons name="home-outline" size={28} color={GRAY} />
            <Text style={styles.TextStyle}>Home</Text>
          </>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabBtn}
        onPress={() => navigation.navigate('Profile')}>
        {state.index === 1 ? (
          <>
            <Ionicons name="people-outline" size={28} color={THEME_ORANGE} />
            <Text style={styles.TextStyleActive}>Clients</Text>
          </>
        ) : (
          <>
            <Ionicons name="people-outline" size={28} color={GRAY} />
            <Text style={styles.TextStyle}>Clients</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default UserTabs;

const styles = StyleSheet.create({
  tabContainer: {
    height: 70,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabBtn: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: Platform.OS === 'ios' && 20,
  },
  TextStyleActive: {
    fontSize: 13,
    color: THEME_ORANGE,
    fontFamily: POPPINS_BOLD,
    marginTop: 2,
  },
  TextStyle: {
    fontSize: 13,
    color: GRAY,
    fontFamily: POPPINS_SEMI_BOLD,
    marginTop: 2,
  },
  thirdBtn: {
    height: 60,
    width: 60,
    backgroundColor: THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 360,
    marginBottom: 60,
    borderWidth: 2,
    borderColor: '#fff',
  },
});
