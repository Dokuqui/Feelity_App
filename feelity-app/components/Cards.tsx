import { View, Image, StyleSheet, Platform } from "react-native";
import { Colors } from "../constants/Colors";

interface SwipableCardProps {
    image: any
}

const SwipableCard: React.FC<SwipableCardProps> = ({ image }) => {
    return (
        <View>
            <View style={styles.card}>
                <Image source={image} style={styles.image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 310,
        height: 315,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: Colors.colors.primary100,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 25,
        ...Platform.select({
            ios: {
                shadowColor: Colors.colors.primary500,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 6,
            },
            android: {
                elevation: 20,
            },
        }),
    },
    image: {
        width: 296,
        height: 272,
    },
});

export default SwipableCard;
