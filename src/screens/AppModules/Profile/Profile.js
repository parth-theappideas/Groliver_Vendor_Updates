import React, { useState, useEffect } from "react";
import { Image, ToastAndroid, StatusBar } from 'react-native'
import Container from "../../../components/container";
import Label from "../../../components/Label";
import Images from "../../../const/Images";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Styles";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { profileApi } from "../../../utils/apigetService";
import { api_token } from '../../../utils/Globals'

const Profile = ({ route, navigation }) => {

    const [Loading, setLoading] = useState(false);
    const [profileDetails, setProfileDetails] = useState({});

    console.log("token of profile ==>", api_token);

    const Logout = async () => {
        setLoading(true);
        try {
            const Data = await AsyncStorage.removeItem('@store1:User');
            if (Data) {
                setLoading(false);
                navigation.replace("Signin");
                ToastAndroid.show("Logout Successfully", ToastAndroid.SHORT);
            } else {
                console.log("Successfull Delete", Data);
            }
        }
        catch (e) {
            console.log("error", e);
            setLoading(false);
        }
        navigation.reset({
            index: 0,
            routes: [{ name: 'Signin' }]
        })
    }

    useEffect(() => {
        ProfileHandler();
    }, [])

    const ProfileHandler = async () => {
        setLoading(true);
        try {
            let response = await profileApi({})
            console.log("--->response", response);
            setLoading(false);
            if (response.status == 'Success') {
                setProfileDetails(response.data);
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.log("errors", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (route.params?.fromEditProfile) {
            ProfileHandler();
        }
    }, [route.params])

    console.log("profile data", profileDetails.store_image);

    return (
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container onPress={() => navigation.navigate("Editprofile", { ...profileDetails })}>
                <Container containerStyle={styles.mainContainer}>
                    <Container containerStyle={styles.profileimgBorder}>
                        <Image
                            source={{ uri: profileDetails.store_image }}
                            style={styles.profileimg}
                        />
                    </Container>
                    <Container>
                        <Container containerStyle={styles.container2}>
                            <Label style={styles.text}>{profileDetails.name}</Label>
                            <Image
                                source={Images.edit}
                                style={styles.editimg}
                            />
                        </Container>

                        <Container containerStyle={styles.container3}>
                            <Label style={styles.text2}>{profileDetails.email}</Label>
                        </Container>
                    </Container>
                </Container>
            </Container>

            <Container containerStyle={styles.container4}>
                <Container onPress={() => navigation.navigate("Notification")}>
                    <Container containerStyle={styles.container5}>
                        <Container containerStyle={styles.container6}>
                            <Image
                                source={Images.notification}
                                style={styles.notificationimg}
                            />
                            <Label style={styles.text3} onPress={() => navigation.navigate("Notification")}>Notification</Label>
                        </Container>
                        <Image
                            source={Images.right}
                            style={styles.rightimg}
                        />
                    </Container>
                </Container>
            </Container>

            <Container containerStyle={styles.borderView} />

            <Container containerStyle={styles.container7}>
                <Container onPress={() => navigation.navigate("Help")}>
                    <Container containerStyle={styles.container8}>
                        <Container containerStyle={styles.container9}>
                            <Image
                                source={Images.help}
                                style={styles.helpimg}
                            />
                            <Label style={styles.text4} onPress={() => navigation.navigate("Help")}>Help</Label>
                        </Container>

                        <Image
                            source={Images.right}
                            style={styles.rightimg}
                        />
                    </Container>
                </Container>
            </Container>

            <Container containerStyle={styles.borderView} />

            <Container containerStyle={styles.container10}>
                <Container onPress={() => Logout()}>
                    <Container containerStyle={styles.container11}>
                        <Container containerStyle={styles.container12}>
                            <Image
                                source={Images.logout_pic}
                                style={styles.logoutimg}
                            />
                            <Label style={styles.text5}>Logout</Label>
                        </Container>

                        <Image
                            source={Images.right}
                            style={styles.rightimg}
                        />
                    </Container>
                </Container>
            </Container>
            {Loading ? <LoadingIndicator /> : null}
        </Container>
    )
}

export default Profile;