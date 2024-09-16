import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable } from 'react-native';
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.innerContainer}>
        {/* Background Image */}
        <LottieView
        source={require("./assets/train.json")}
        // ref={animation}
        style={{
          height: 260,
          width: 300,
          alignSelf: "center",
          marginTop: 40,
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome </Text>
          <Text style={styles.headerText}>Please SignIn </Text>
        </View>

        {/* Footer */}
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
                colors={['#8A2BE2', '#FF1493']} // Purple to Pink
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
                colors={['#FF69B4', '#FF6347']} // Pink to Orange gradient
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
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </KeyboardAvoidingView>
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
    backgroundColor: 'transparent', // Ensure background is transparent to see the image
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: -1, // Place the image behind other components
    resizeMode: "contain"
  },
  header: {
    flex: 1 / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: "blue",
    fontSize: 24,
  },
  footer: {
    flex: 2 / 3,
    backgroundColor: '#10172a',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 20,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    paddingVertical: 20,
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
  },
  pressedButtonContainer: {
    borderWidth: 2,
    borderColor: '#8A2BE2',
  },
  gradientButton: {
    paddingVertical: 10,
    borderRadius: 10,
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
});
