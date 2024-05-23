import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

interface CustomHeaderButtonProps {
  onPress: () => void;
  title: string;
}

const CustomHeaderButton: React.FC<CustomHeaderButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.colors.primary600,
    borderRadius: 15,
    width: 45,
    height: 45,
    shadowColor: Colors.colors.primary500,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 26,
    color: Colors.colors.primary100,
  },
});

export default CustomHeaderButton;
