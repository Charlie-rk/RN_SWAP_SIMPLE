// MainNavigation.js

import React from 'react';
import { Pressable, Switch, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
// import Toast from 'react-native-toast-message';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Home from '../Screens/Home';


import Signin from '../Screens/sigin';
import Signup from '../Screens/signup';
// import toastConfig from '../toastConfig';
import SeatSelection from '../components/SeatSelection';
import SwapResults from '../Screens/SwapResults';
import All_request from '../Screens/All_request';

import About from '../Screens/About';
import Help from '../Screens/Help';
import Profile from '../Screens/Profile';
// import Signin from '../Screens/Sigin';
import { useDispatch, useSelector } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import NotificationPage from '../Screens/NotificationPage';
import { useNavigation } from '@react-navigation/native';
import { toggleTheme } from '../redux/theme/themeSlice';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';



const darkTheme = {
  backgroundColor: '#1e293b',
  textColor: 'white',
  iconColor: 'white',
};

function ProfileScreen() {
  const { theme } = useSelector((state) => state.theme);
  const darkTheme = {
    backgroundColor: theme === 'dark' ? '#1e293b' : '#f9f9f9',
    textColor: theme === 'dark' ? 'white' : 'black',
    iconColor: theme === 'dark' ? 'white' : 'black',
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: '', backgroundColor: darkTheme.backgroundColor }}>
      <Profile />
    </View>
  );
}

function AboutScreen() {
  const { theme } = useSelector((state) => state.theme);
  const darkTheme = {
    backgroundColor: theme === 'dark' ? '#1e293b' : '#f9f9f9',
    textColor: theme === 'dark' ? 'white' : 'black',
    iconColor: theme === 'dark' ? 'white' : 'black',
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: darkTheme.backgroundColor }}>
      <About />
    </View>
  );
}

function LoginScreen() {
  const { theme } = useSelector((state) => state.theme);
  const darkTheme = {
    backgroundColor: theme === 'dark' ? '#1e293b' : '#f9f9f9',
    textColor: theme === 'dark' ? 'white' : 'black',
    iconColor: theme === 'dark' ? 'white' : 'black',
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: darkTheme.backgroundColor }}>
      <Signin />
      {/* <Toast config={toastConfig} /> */}
    </View>
  );
}

function SignupScreen() {
  const { theme } = useSelector((state) => state.theme);
  const darkTheme = {
    backgroundColor: theme === 'dark' ? '#1e293b' : '#f9f9f9',
    textColor: theme === 'dark' ? 'white' : 'black',
    iconColor: theme === 'dark' ? 'white' : 'black',
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: darkTheme.backgroundColor }}>
      <Signup />
      {/* <Toast config={toastConfig} /> */}
    </View>
  );
}

function HomeScreen({ navigation }) {
  const { theme } = useSelector((state) => state.theme);
  const darkTheme = {
    backgroundColor: theme === 'dark' ? '#1e293b' : '#f9f9f9',
    textColor: theme === 'dark' ? 'white' : 'black',
    iconColor: theme === 'dark' ? 'white' : 'black',
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: darkTheme.backgroundColor }}>
      <Home />
    </View>
  );
}

function SeatSelectionScreen() {
  const { theme } = useSelector((state) => state.theme);
  const darkTheme = {
    backgroundColor: theme === 'dark' ? '#1e293b' : '#f9f9f9',
    textColor: theme === 'dark' ? 'white' : 'black',
    iconColor: theme === 'dark' ? 'white' : 'black',
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: '', backgroundColor: darkTheme.backgroundColor }}>
      <SeatSelection />
    </View>
  );
}

function SwapResultsScreen() {
  const { theme } = useSelector((state) => state.theme);
  const darkTheme = {
    backgroundColor: theme === 'dark' ? '#1e293b' : '#f9f9f9',
    textColor: theme === 'dark' ? 'white' : 'black',
    iconColor: theme === 'dark' ? 'white' : 'black',
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: '', backgroundColor: darkTheme.backgroundColor }}>
      <SwapResults />
    </View>
  );
}



function AllRequestsScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const darkTheme = {
    backgroundColor: theme === 'dark' ? '#1e293b' : '#f9f9f9',
    textColor: theme === 'dark' ? 'white' : 'black',
    iconColor: theme === 'dark' ? 'white' : 'black',
  };
  return (

  

    <View style={{ flex: 1, justifyContent: 'center', alignItems: '', backgroundColor: "#1e293b" }}>
      {!currentUser?<Home/>:<All_request/>}
      {/* <All_request /> */}

    </View>
  );
}

function HelpScreen() {
  const { theme } = useSelector((state) => state.theme);
  const darkTheme = {
    backgroundColor: theme === 'dark' ? '#1e293b' : '#1e293b',
    textColor: theme === 'dark' ? 'white' : 'black',
    iconColor: theme === 'dark' ? 'white' : 'black',
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: '', backgroundColor: darkTheme.backgroundColor }}>
      <Help />
      {/* <NotificationPage/> */}
    </View>
  );
}
function NotificationScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const darkTheme = {
    backgroundColor: theme === 'dark' ? '#1e293b' : '#f9f9f9',
    textColor: theme === 'dark' ? 'white' : 'black',
    iconColor: theme === 'dark' ? 'white' : 'black',
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: '', backgroundColor: darkTheme.backgroundColor }}>
      {/* <Help /> */}
      {!currentUser?<Home/>:<NotificationPage/>}
      {/* <NotificationPage/> */}
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  const { theme } = useSelector((state) => state.theme);
  const darkTheme = {
    backgroundColor: theme === 'dark' ? '#1e293b' : '#f9f9f9',
    textColor: theme === 'dark' ? 'white' : 'black',
    iconColor: theme === 'dark' ? 'white' : 'black',
  };
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: darkTheme.backgroundColor },
        headerTintColor: darkTheme.textColor,
        headerRight: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
          <Switch
            value={theme === 'dark'}
            onValueChange={handleThemeToggle}
            thumbColor={theme === 'dark' ? 'white' : 'black'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
          <Ionicons
            name="notifications"
            size={25}
            color={darkTheme.iconColor}
            style={{ marginLeft: 10 }}
            onPress={() => alert('Notifications clicked!')}
          />
        </View>
        ),
      }}
    >
      <HomeStack.Screen name="HomeStackMain" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="SeatSelection" component={SeatSelectionScreen} options={{ headerShown: false }} />

      <HomeStack.Screen name="SwapResults" component={SwapResultsScreen} options={{ headerShown: false }} />

      <HomeStack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }} />

    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const darkTheme = {
    backgroundColor: theme === 'dark' ? '#1e293b' : '#f9f9f9',
    textColor: theme === 'dark' ? 'white' : 'black',
    iconColor: theme === 'dark' ? 'white' : 'black',
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'AllRequests') {
            iconName = 'list';
          } else if (route.name === 'Help') {
            iconName = 'help-circle';
          }else if(route.name==='Profile'){
            iconName='person'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: darkTheme.iconColor,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: darkTheme.backgroundColor },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="AllRequests"
        component={AllRequestsScreen}
        options={{ title: 'All Requests' }}
      />
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{ title: 'Help' }}
      />
      {currentUser?<Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />:<></>}
      {/* if(currentUser){
        
      } */}
      
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const darkTheme = {
    backgroundColor: theme === 'dark' ? '#1e293b' : '#f9f9f9',
    textColor: theme === 'dark' ? 'white' : 'black',
    iconColor: theme === 'dark' ? 'white' : 'black',
  };
  const dispatch = useDispatch();
  const navigation=useNavigation();
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleSignout = async () => {
    console.log("Sign off");
    try {
      const res = await fetch(`http://10.10.92.56:3000/api/user/signout`, { method: "POST" });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Drawer.Navigator
      initialRouteName="SwapSimple" 
      screenOptions={{
        
        headerRight: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
    <Pressable onPress={handleThemeToggle}>
      {theme === 'dark' ? (
          <MaterialIcons name="sunny" size={24} color="black" />
      
      ) : (
        <Entypo name="moon" size={24} color="black" />
       
      )}
    </Pressable>
    <Pressable onPress={() => navigation.navigate('Notification')}>
      <FontAwesome name="bell" size={20} color="#660000" style={{ marginLeft: 10 }} />
    </Pressable>
  </View>
        ),
        drawerStyle: {
          backgroundColor: darkTheme.backgroundColor,
        },
        drawerLabelStyle: {
          color: darkTheme.textColor,
        },
        drawerActiveTintColor: darkTheme.iconColor,
        drawerInactiveTintColor: 'gray',
      }}
    >
      <Drawer.Screen
        name="SwapSimple"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="train-sharp" size={24} color={color} />
          ),
          title: 'Swap-Simple',
        }}
      />
      {currentUser ? (
        <>
          
        
        </>
      ) : (
        <>
          <Drawer.Screen
            name="Login"
            component={LoginScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="log-in" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="log-in" size={size} color={color} />
              ),
            }}
          />
        </>
      )}
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }}
      />
       <Drawer.Screen
        name="Switch Theme"
        component={HomeScreen} // Dummy component, not actually used
        options={{
          drawerIcon: () => (
            <Switch
              value={theme === 'dark'}
              onValueChange={handleThemeToggle}
              thumbColor={theme === 'dark' ? 'white' : 'black'}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
            />
          ),
          drawerLabel: () => <Text style={{ color: darkTheme.textColor }}>Switch Theme</Text>,
        }}
      />
    </Drawer.Navigator>
    
  );
}

   