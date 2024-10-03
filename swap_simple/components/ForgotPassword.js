import { useState } from "react";
import { Text, View, TextInput, Pressable, Alert } from "react-native";
import axios from "axios";
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const navigation = useNavigation(); // Use navigation hook

  // Send OTP request
  const handleSendOtp = async () => {
    if (!email) {
      Alert.alert("Please enter your email");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/api/auth/send-reset-otp`, { email });
      Alert.alert(response.data.message);
      setOtpSent(true);
    } catch (error) {
      Alert.alert("Error sending OTP:", error.response?.data.message);
    }
  };

  // Verify OTP and Reset Password
  const handleResetPassword = async () => {
    if (!otp || !newPassword) {
      Alert.alert("Please fill in OTP and new password");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/api/auth/reset-password`, {
        email,
        otp,
        newPassword,
      });
      Alert.alert(response.data.message);
      setIsVerified(true);

      // Navigate back to SignIn screen after password reset
      navigation.navigate("SignIn"); // Navigate to SignIn screen
    } catch (error) {
      Alert.alert("Error resetting password:", error.response?.data.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {!otpSent ? (
        <>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            style={{ borderBottomWidth: 1, marginBottom: 20 }}
          />
          <Pressable onPress={handleSendOtp}>
            <Text>Send OTP</Text>
          </Pressable>
        </>
      ) : !isVerified ? (
        <>
          <Text>Enter the OTP sent to your email</Text>
          <OTPInputView
            style={{ width: '80%', height: 100 }}
            pinCount={6}
            code={otp}
            onCodeChanged={setOtp}
            autoFocusOnLoad
            codeInputFieldStyle={{ borderWidth: 1, borderColor: 'gray' }}
          />
          <TextInput
            placeholder="Enter new password"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
            style={{ borderBottomWidth: 1, marginVertical: 20 }}
          />
          <Pressable onPress={handleResetPassword}>
            <Text>Reset Password</Text>
          </Pressable>
        </>
      ) : (
        <Text>Password reset successful! Redirecting to Sign In...</Text>
      )}
    </View>
  );
};

export default ForgotPassword;
