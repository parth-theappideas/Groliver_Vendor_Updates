import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from "../screens/AuthModules/Splash/Splash";
import MyPager from "../screens/AuthModules/Introduction/Introduction";
import MySecondPage from "../screens/AuthModules/Introduction/IntroductionPage2";
import MyThirdPage from "../screens/AuthModules/Introduction/IntroductionPage3";
import Signin from "../screens/AuthModules/Signin/Signin";
import ForgotPassword from "../screens/AuthModules/ForgotPassword/ForgotPassword";
import ResetPassword from "../screens/AuthModules/ResetPassword/ResetPassword";
import Signup from "../screens/AuthModules/Signup/Signup";
import Terms from "../screens/AuthModules/TermsandConditions/Terms";
import Privacy from "../screens/AuthModules/PrivacyPolicy/Privacy";
import Editprofile from "../screens/AppModules/EditProfile/Editprofile";
import Notification from "../screens/AppModules/Notification/Notification";
import OrderDetail from "../screens/AppModules/OrderDetail/OrderDetail";
import Help from "../screens/AppModules/Help/Help";
import Verification from "../screens/AuthModules/Verification/Verification";
import ProductDetail from "../screens/AppModules/ProductDetail/ProductDetail";
import Addnewproduct from "../screens/AppModules/Addnewproduct/Addnewproduct";
import EditProduct from "../screens/AppModules/Editproduct/Editproduct";
import Dashboard from "./tab";
import UploadDocs from "../screens/AuthModules/UploadDocuments/UploadDocs";
import AddressProff from "../screens/AuthModules/AddressProff/AddressProof";
import IdProff from "../screens/AuthModules/IdProof/IdProof";
import OrdermanageLists from "../screens/AppModules/OrdermanageList/OrdermanageLists";
import messaging from '@react-native-firebase/messaging';
import SearchComponent from "../screens/AppModules/SearchComponent/SearchComponent";

const Stack = createNativeStackNavigator();

const Navigation = ({ navigation }) => {
    const [initialRoute, setInitialRoute] = useState('');
    const getToken = async () => {
        const token = await messaging().getToken();
        console.log("...", token);
    }

    useEffect(() => {
        getToken();
        messaging().onMessage(async remoteMessage => {
            console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });

        messaging().onNotificationOpenedApp * (remoteMessage => {
            console.log("onNotificationOpenedApp:", JSON.stringify(remoteMessage));
            navigation.replace(remoteMessage.data.type);
        });

        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                if (remoteMessage) {
                    console.log('Notification caused app to open from quit state:', JSON.stringify(remoteMessage),);
                    setInitialRoute(remoteMessage.data.type);
                }
            });
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRoute}>
                <Stack.Screen name="Splash" component={Splash} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="MyPager" component={MyPager} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="MySecondPage" component={MySecondPage} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="MyThirdPage" component={MyThirdPage} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="Signin" component={Signin} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: ''
                }} />

                <Stack.Screen name="Verification" component={Verification} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: ''
                }} />

                <Stack.Screen name="ResetPassword" component={ResetPassword} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: ''
                }} />

                <Stack.Screen name="Signup" component={Signup} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Signup'
                }} />

                <Stack.Screen name="Terms" component={Terms} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Terms and conditions'
                }} />

                <Stack.Screen name="Privacy" component={Privacy} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Privacy policy'
                }} />

                <Stack.Screen name="Dashboard" component={Dashboard} options={{
                    headerShown: false,
                    headerShadowVisible: false,
                    headerTitle: ''
                }} />

                <Stack.Screen name="Editprofile" component={Editprofile} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Edit profile'
                }} />

                <Stack.Screen name="Notification" component={Notification} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Notifications'
                }} />

                <Stack.Screen name="OrdermanageLists" component={OrdermanageLists} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Order Manage'
                }} />

                <Stack.Screen name="OrderDetail" component={OrderDetail} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Order Detail'
                }} />

                <Stack.Screen name="Help" component={Help} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Help'
                }} />

                <Stack.Screen name="ProductDetail" component={ProductDetail} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Product detail',
                }} />

                <Stack.Screen name="Addnewproduct" component={Addnewproduct} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Add new product'
                }} />

                <Stack.Screen name="EditProduct" component={EditProduct} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Edit product'
                }} />

                <Stack.Screen name="UploadDocs" component={UploadDocs} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Upload Document'
                }} />

                <Stack.Screen name="AddressProff" component={AddressProff} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Address Proff'
                }} />

                <Stack.Screen name="IdProff" component={IdProff} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'ID Proff'
                }} />

                <Stack.Screen name="SearchComponent" component={SearchComponent} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Search'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;