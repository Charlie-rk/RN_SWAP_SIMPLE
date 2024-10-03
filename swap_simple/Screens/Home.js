import { StatusBar } from "expo-status-bar";
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
  ActivityIndicator,
  LogBox,
  Alert,
  ScrollView,
  RefreshControl,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PnrCard from './../components/PnrCard';
import { setTravelID } from "../redux/user/userSlice";
import baseUrl from "../Services/constant";

LogBox.ignoreAllLogs();

const { width, height } = Dimensions.get("window");

const Home = () => {
  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  const [pnr, setPnr] = useState('');
  const [success, setSuccess] = useState(false);
  const [travel, setTravel] = useState({});
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false); // State for pull-to-refresh
  const dispatch = useDispatch();

  const fetchTravelDetails = async () => {
    setLoading(true);
    setSuccess(false);
    try {
      const res = await fetch(`${baseUrl}/api/pnr/${pnr}?userId=${currentUser._id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        const data = await res.json();
        setTravel(data.travel);
        dispatch(setTravelID({ travel__Id: data.travel._id }));
        setSuccess(true);
      } else {
        Alert.alert("Request failed! Enter Correct PNR.");
      }
    } catch (error) {
      Alert.alert("Request failed! Enter Correct PNR.");
    } finally {
      setLoading(false);
      setRefreshing(false); // Stop refresh control spinner
    }
  };

  const handleSubmit = () => {
    if (currentUser) {
      fetchTravelDetails();
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchTravelDetails();
  }, [pnr, currentUser]);

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          <View style={styles.imageContainer}>
            <ImageBackground
              source={require("../assets/home1.jpg")}
              style={styles.image}
              resizeMode="cover"
            >
              <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)']}
                style={styles.overlay}
              >
                <LinearGradient
                  colors={['black', 'rgba(0,0,0,0.6)', 'black']}
                  start={[0, 0]}
                  end={[1, 0]}
                  style={styles.inputWrapper}
                >
                  <TextInput
                    style={styles.input}
                    placeholder="PNR input..."
                    placeholderTextColor="#000"
                    value={pnr}
                    onChangeText={setPnr}
                  />
                  <Pressable
                    onPress={handleSubmit}
                    style={styles.buttonContainer}
                  >
                    <LinearGradient
                      colors={['grey', 'grey', 'grey']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.gradientButton}
                    >
                      <Text style={styles.buttonText}>
                        {currentUser ? "Know Your PNR Status" : "Please log in"}
                      </Text>
                    </LinearGradient>
                  </Pressable>
                </LinearGradient>
              </LinearGradient>
            </ImageBackground>
          </View>

          <View style={[styles.detailsContainer, { backgroundColor: theme === 'dark' ? '#1e293b' : '#d9d9d9' }]}>
            {loading && <ActivityIndicator size="large" color="#8A2BE2" />}
            {success && <PnrCard travel={travel} type='PnrConfirm' />}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: height * 0.3,
    width: width,
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
    backgroundColor: "#e6e6e6",
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    textAlign: "center",
    height: 50,
    color: "black",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 10,
  },
  gradientButton: {
    paddingVertical: 0,
    paddingHorizontal: 6,
    borderRadius: 0,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Home;
