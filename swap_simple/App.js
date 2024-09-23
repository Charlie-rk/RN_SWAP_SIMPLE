// App.js

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as SplashScreen from 'expo-splash-screen';
import * as Notifications from 'expo-notifications';
import { store, persistor } from './redux/store';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Notification handler
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });

    // Handle notifications when they are received
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notification received:', notification);
      // Here, you could navigate to a specific screen based on the notification content
    });

    // Clean up the notification listener on unmount
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        const response = await fetch('https://backend-swap-simple.onrender.com/');
        console.log(response.status);
        const data = await response.text();
        if (response.status === 200) {
          setIsReady(true);
          await SplashScreen.hideAsync(); // Hide the splash screen once the backend responds
        }
      } catch (error) {
        console.log('Error fetching from backend:', error);
      }
    };
    checkBackendStatus();
  }, []);

  if (!isReady) {
    return null; // Still showing the splash screen while waiting for backend response
  }

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
}
