import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useState } from "react";
import LottieView from "lottie-react-native";

export default function App() {
  const [isPressedSubmit, setIsPressedSubmit] = useState(false);
  const [isPressedGoogle, setIsPressedGoogle] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
        <FontAwesome5 name="hand-holding-heart" size={40} color="#10172a" />
          <Text style={styles.headerText}>Welcome !!  </Text>
          <Text style={styles.headerText}>Please Sign In </Text>
        </View>
        <LottieView
          source={require("./assets/welcome.json")} // Your animation JSON file
          style={styles.animation}
          autoPlay
          loop
        />
      </View>

      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            {/* Email Input */}
            <InputField
              icon={<Fontisto name="email" size={24} color="grey" />}
              placeholder="Enter your email"
            />

            {/* Name Input */}
            <InputField
              icon={<AntDesign name="user" size={24} color="grey" />}
              placeholder="Enter your name"
            />

            {/* Password Input */}
            <InputField
              icon={<EvilIcons name="lock" size={30} color="red" />}
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>

          {/* Submit Button */}
          <Pressable
            onPressIn={() => setIsPressedSubmit(true)}
            onPressOut={() => setIsPressedSubmit(false)}
            style={[
              styles.buttonContainer,
              isPressedSubmit && styles.pressedButtonContainer,
            ]}
          >
            {!isPressedSubmit ? (
              <LinearGradient
                colors={['#8A2BE2', '#FF1493']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientButton}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.pressedButtonText}>Submit</Text>
            )}
          </Pressable>

          {/* Continue with Google Button */}
          <Pressable
            onPressIn={() => setIsPressedGoogle(true)}
            onPressOut={() => setIsPressedGoogle(false)}
            style={[
              styles.buttonContainer,
              isPressedGoogle && styles.pressedButtonContainer,
            ]}
          >
            {isPressedGoogle ? (
              <LinearGradient
                colors={['#FF69B4', '#FF6347']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientButton}
              >
                <Text style={styles.buttonText}>Continue with Google</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.pressedButtonText}>Continue with Google</Text>
            )}
          </Pressable>

             {/* Footer with Social Icons */}
        <View style={styles}>
          <Text style={styles.footerTitle}>Follow Us</Text>
          <View className="flex-row">
          <View style={styles.iconRow}>
            <AntDesign name="linkedin-square" size={24} color="white" />
            <AntDesign name="facebook-square" size={24} color="white" />
            <AntDesign name="instagram" size={24} color="white" />
            <AntDesign name="github" size={24} color="white" />
          </View>
          <Text style={styles.copyright}>
            &copy; {new Date().getFullYear()} Sangam & Rustam
          </Text>
          </View>
        </View> 


        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

// Reusable Input Field component
const InputField = ({ icon, placeholder, secureTextEntry = false }) => (
  <View style={styles.inputField}>
    {icon}
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.textInput}
    />
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flex: 1/2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 50,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerText: {
    color: "black",
    fontSize: 20,
    fontWeight:"bold"
  },
  animation: {
    width: 200,
    height: 200,
  },
  footer: {
    flex: 1,
    backgroundColor: '#10172a',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 0,
    shadowColor: 'red',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  
  },
  inputContainer: {
    flexDirection: "column",
    marginVertical: 20,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 18,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical:10,
  },
  pressedButtonContainer: {
    borderWidth: 0,
    borderColor: '#8A2BE2',
  },
  gradientButton: {
    paddingVertical: 10,
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
    fontSize: 18,
  },
  pressedButtonText: {
    paddingVertical: 10,
    borderRadius: 10,
    textAlign: 'center',
    color: '#8A2BE2',
    fontSize: 18,
    backgroundColor: 'white',
  },
  footerTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '40%',
    marginVertical: 0,
  },
  copyright: {
    color: 'white',
    marginTop: 0,
  },
});
