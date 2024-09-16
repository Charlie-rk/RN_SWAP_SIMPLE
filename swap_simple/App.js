import { StatusBar } from "expo-status-bar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  Button,
  ImageBackground,
  TextInput,
  View,
  Dimensions,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MyButton from "./components/MyButton";
import { useState } from "react";
import PnrCard from "./components/PnrCard";

const { width, height } = Dimensions.get("window"); // Get screen dimensions

function HomeScreen({ navigation }) {
  const handlePress = () => {
    console.log("Hii i am preeseed");
    // navigation.navigate("Notifications");
  };
  const [pressed, setPressed] = useState(false);

  const isUserLoggedIn = false; 
  return (
    <>
    <PnrCard/>
  
   
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: height * 0.3, // Adjust image height
    width: width, // Full width of the screen
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  inputWrapper: {
    padding: 0,
    borderRadius: 10,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: "#374151",
    backgroundColor: "#374151",
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    textAlign: "center",
    height: 50,
    color:"white",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e293b", // Dark background
  },
  card: {
    backgroundColor: "#4f46e5",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: "center",
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical:10,
    // paddingHorizontal:6,
  },
  pressedButtonContainer: {
    borderWidth: 0,
    borderColor: '#8A2BE2',
    // paddingHorizontal:6,
  },
  gradientButton: {
    paddingVertical: 0,
    paddingHorizontal:6,
    borderRadius: 0,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  pressedButtonText: {
    paddingVertical: 0,
    paddingHorizontal:6,
    borderRadius: 0,
    textAlign: 'center',
    color: '#8A2BE2',
    fontSize: 16,
    backgroundColor: 'white',
  },
});

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
