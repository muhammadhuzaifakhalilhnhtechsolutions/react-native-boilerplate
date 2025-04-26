import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import {BACKGROUND_COLOR} from '../../utils/Colors';
import {PoppinsRegular} from '../../utils/Fonts';

const Dropdown = ({options, value, onChange}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSelect = selectedValue => {
    onChange(selectedValue);
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setIsVisible(!isVisible)}>
        <Text style={styles.dropdownText}>
          {value ? value.label : 'Select an option'}
        </Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isVisible}
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsVisible(false)}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item)}>
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dropdown: {
    borderRadius: 5,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 10,
    backgroundColor: BACKGROUND_COLOR,
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
    fontFamily: PoppinsRegular,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    maxHeight: '60%',
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 14,
    color: '#333',
    fontFamily: PoppinsRegular,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
