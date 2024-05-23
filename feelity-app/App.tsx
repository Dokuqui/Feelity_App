import { useState, useEffect, useRef } from 'react';
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { ActivityIndicator, Dimensions, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import SwipableCard from './components/Cards';
import { Colors } from './constants/Colors';
import CustomHeaderButton from './components/buttons/HeaderButton';
import CustomFooterButton from './components/buttons/FooterButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const images = [
  require('./assets/first.png'),
  require('./assets/second.png')
]

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          "roboto": require("./assets/fonts/Roboto-Black.ttf"),
          "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.blackBackground} />
      <View style={styles.whiteBackground} />
      <View style={styles.header}>
        <CustomHeaderButton title={"<"} onPress={() => console.log("Button back pressed")} />
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.servicesTitle}>Services</Text>
      <ScrollView
        horizontal
        pagingEnabled
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {images.map((image, index) => (
          <SwipableCard key={index} image={image} />
        ))}
      </ScrollView>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Articles</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas sit amet malesuada ex, consectetur convallis erat. Sed viverra id metus in eleifend.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.readText}>Commencer à lire</Text>
        <CustomFooterButton title={">"} onPress={() => console.log("Forward button pressed")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blackBackground: {
    position: 'absolute',
    backgroundColor: Colors.colors.primary200,
    width,
    height: height * 0.35,
    zIndex: -1,
  },
  whiteBackground: {
    position: 'absolute',
    backgroundColor: Colors.colors.primary100,
    width,
    height: height * 0.65,
    top: height * 0.35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: -1,
  },
  header: {
    paddingHorizontal: 19,
    paddingTop: 45,
    paddingBottom: 30,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.colors.primary200,
  },
  logo: {
    marginTop: 10,
    marginLeft: 65,
    width: 147.29,
    height: 30,
    resizeMode: 'contain',
  },
  servicesTitle: {
    fontSize: 42,
    fontFamily: "roboto-bold",
    color: Colors.colors.primary100,
    marginLeft: 20,
    marginTop: -10,
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
  },
  textContainer: {
    marginLeft: 19,
    marginTop: -10,
  },
  title: {
    fontSize: 42,
    fontFamily: "roboto-bold",
    color: Colors.colors.primary300,
  },
  description: {
    fontSize: 17,
    fontFamily: "roboto-bold",
    color: Colors.colors.primary300,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.colors.primary400,
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 35,
  },
  readText: {
    color: Colors.colors.primary300,
    fontFamily: "roboto-bold",
    fontSize: 18,
    marginRight: 10,
  },
})