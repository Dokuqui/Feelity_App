import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

interface CustomFooterButtonProps {
    onPress: () => void;
    title: string;
}

const CustomFooterButton: React.FC<CustomFooterButtonProps> = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.colors.primary100,
        borderRadius: 15,
        width: 45,
        height: 45,
        shadowColor: Colors.colors.primary500,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginLeft: 130,
    },
    buttonText: {
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 26,
        color: Colors.colors.primary300,
    },
});

export default CustomFooterButton;
