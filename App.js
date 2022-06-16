import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from "./src/navigators/navigation";
import messaging from '@react-native-firebase/messaging';

const App = ({ navigation }) => {

  // const getToken = async () => {
  //   const token = await messaging().getToken();
  //   console.log("...", token);  
  // }

  // useEffect(() => {
  //   getToken();
  //   messaging().onMessage(async remoteMessage => {
  //     console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   messaging().onNotificationOpenedApp * (remoteMessage => {
  //     console.log("onNotificationOpenedApp:", JSON.stringify(remoteMessage));
  //   });

  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log('Notification caused app to open from quit state:',JSON.stringify(remoteMessage),);
  //       }
  //     });
  // }, []);

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )
}

export default App;