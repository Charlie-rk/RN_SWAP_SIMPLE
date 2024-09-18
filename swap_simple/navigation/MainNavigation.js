// MainNavigation.js

import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Home from '../Screens/Home';
import Signin from '../Screens/Sigin';
import Signup from '../Screens/Signup';
import toastConfig from '../toastConfig';
import SeatSelection from '../components/SeatSelection';

const darkTheme = {
  backgroundColor: '#1e293b',
  textColor: 'white',
  iconColor: 'white',
};

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: darkTheme.backgroundColor }}>
      <Text style={{ color: darkTheme.textColor }}>Profile Screen</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: darkTheme.backgroundColor }}>
      <Text style={{ color: darkTheme.textColor }}>About Screen</Text>
    </View>
  );
}

function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: darkTheme.backgroundColor }}>
      <Signin />
      <Toast config={toastConfig} />
    </View>
  );
}

function SignupScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: darkTheme.backgroundColor }}>
      <Signup />
      <Toast config={toastConfig} />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: darkTheme.backgroundColor }}>
      <Home />
    </View>
  );
}

function SeatSelectionScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: '', backgroundColor: darkTheme.backgroundColor }}>
      {/* <Text style={{ color: darkTheme.textColor }}>Seat Selection Screen</Text>
       */}
       <SeatSelection/>
    </View>
  );
}

function AllRequestsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: darkTheme.backgroundColor }}>
      <Text style={{ color: darkTheme.textColor }}>All Requests Screen</Text>
    </View>
  );
}

function HelpScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: darkTheme.backgroundColor }}>
      <Text style={{ color: darkTheme.textColor }}>Help Screen</Text>
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: darkTheme.backgroundColor },
        headerTintColor: darkTheme.textColor,
        headerRight: () => (
          <Ionicons
            name="notifications"
            size={25}
            color={darkTheme.iconColor}
            style={{ marginRight: 15 }}
            onPress={() => alert('Notifications clicked!')}
          />
        ),
      }}
    >
      <HomeStack.Screen name="HomeStackMain" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="SeatSelection" component={SeatSelectionScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
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
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="SwapSimple"
      screenOptions={{
        headerRight: () => (
          <FontAwesome name="bell" size={24} color="#660000" style={{ marginRight: 15 }} onPress={() => alert('Notifications clicked!')} />
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
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
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
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
