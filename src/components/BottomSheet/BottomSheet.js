import React, {useRef, useEffect} from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  PanResponder,
  Animated,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
  Dimensions,
} from 'react-native';

const MyBottomSheet = ({
  openSheet,
  closeSheet,
  children,
  scrollEnabled = true,
  height = '80%',
  backgroundColor = '#fff',
  borderRadius = 25,
}) => {
  const panY = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  const windowHeight = Dimensions.get('screen').height;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      e => {
        setKeyboardHeight(e.endCoordinates.height);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => setKeyboardHeight(0),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => keyboardHeight === 0,
    onMoveShouldSetPanResponder: () => keyboardHeight === 0,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 0 && keyboardHeight === 0) {
        panY.setValue(gestureState.dy);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > 100 && keyboardHeight === 0) {
        closeSheet();
      }
      Animated.spring(panY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    },
  });

  const sheetHeight =
    typeof height === 'string'
      ? (parseInt(height) / 100) * windowHeight
      : height;

  const dynamicHeight =
    keyboardHeight > 0
      ? Math.min(sheetHeight, windowHeight - keyboardHeight - 20)
      : sheetHeight;

  return (
    <Modal
      visible={openSheet}
      transparent
      animationType="slide"
      onRequestClose={closeSheet}>
      <TouchableWithoutFeedback onPress={closeSheet}>
        <View style={styles.overlay}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={styles.keyboardAvoidingView}>
            <Animated.View
              style={[
                styles.sheet,
                {
                  height: dynamicHeight,
                  backgroundColor,
                  borderTopLeftRadius: borderRadius,
                  borderTopRightRadius: borderRadius,
                  // transform: [{ translateY: panY }],
                },
              ]}
              {...panResponder.panHandlers}>
              <ScrollView
                ref={scrollViewRef}
                scrollEnabled={scrollEnabled}
                contentContainerStyle={styles.content}
                keyboardShouldPersistTaps="handled"
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}>
                {children}
              </ScrollView>
            </Animated.View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  // keyboardAvoidingView: {
  //   width: '100%',
  // },
  sheet: {
    width: '100%',
    paddingTop: 10,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default MyBottomSheet;
