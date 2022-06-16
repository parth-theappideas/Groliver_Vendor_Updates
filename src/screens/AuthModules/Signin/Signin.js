import React, { useState } from "react";
import { Image, ScrollView, StatusBar, Pressable, ToastAndroid } from 'react-native'
import Images from "../../../const/Images";
import InputBox from "../../../components/InputBox";
import Btn from "../../../components/Btn";
import { hs, vs } from "../../../utils/stylesUtils";
import styles from "./Styles";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import { Formik } from 'formik'
import * as yup from 'yup'
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Globals from "../../../utils/Globals"
import { loginApi } from "../../../utils/apiServices";
import LoadingIndicator from "../../../components/LoadingIndicator";

const Signin = ({ navigation }) => {

    const [Loading, setLoading] = useState(false);

    const SigninSchema = yup.object({
        mobile_no: yup
            .number()
            .required("Phone number is Required *")
            .min(1999999999, "Not Valid Phone Number !")
            .max(9999999999, "Not Valid Phone Number !"),
        password: yup
            .string()
            .required("Password is Required *")
    })

    const SigninHandler = async (values) => {
        setLoading(true);
        console.log(values);

        var formData = new FormData();
        formData.append("mobile_no", values.mobile_no);
        formData.append("password", values.password);
        formData.append("fcm_token", "");

        try {
            let response = await loginApi({ data: formData })
            console.log("res", response);

            setLoading(false);

            if (response.status == 'Success') {
                Globals.api_token = response.data.token
                await AsyncStorage.setItem('@store1:User', JSON.stringify({ data: response.data }));
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Dashboard' }]
                })
                ToastAndroid.show("Signin Successfully", ToastAndroid.SHORT);
                console.log("response", response);
            }
            else {
                alert(response.message);
                ToastAndroid.show("Signin Unsuccessfull", ToastAndroid.SHORT);
            }
        } catch (error) {
            console.log("erros", error);
            setLoading(false);
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Container containerStyle={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Image
                    source={Images.logo}
                    style={styles.logo}
                />
                <Label style={styles.text1}>Sign In to Your Vendor Account</Label>

                <Formik
                    initialValues={{ mobile_no: '', password: '' }}
                    validationSchema={SigninSchema}
                    onSubmit={SigninHandler}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <InputBox
                                placeholder=" Phone number"
                                inputStyle={{
                                    maxWidth: '75%'
                                }}
                                containerStyle={styles.phoneno_input}
                                onChangeText={handleChange('mobile_no')}
                                onBlur={handleBlur('mobile_no')}
                                value={values.mobile_no}
                                keyboardType="numeric"
                                inputHeight={50}
                                textSize={14}
                            />
                            {errors.mobile_no && <Label style={{
                                color: 'red',
                                alignSelf: 'flex-start',
                                marginLeft: hs(17),
                                marginTop: vs(5)
                            }}>{errors.mobile_no}</Label>}

                            <InputBox
                                placeholder=" Password"
                                inputStyle={{
                                    maxWidth: '75%'
                                }}
                                secureTextEntry={true}
                                containerStyle={styles.password_input}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                inputHeight={50}
                                textSize={14}
                            />
                            {errors.password && <Label style={{
                                color: 'red',
                                alignSelf: 'flex-start',
                                marginLeft: hs(17),
                                marginTop: vs(5)
                            }}>{errors.password}</Label>}

                            <Btn
                                title="Sign in"
                                btnStyle={styles.signin_btn}
                                btnHeight={50}
                                textColor={'white'}
                                textSize={14}
                                onPress={handleSubmit}
                            />
                        </>
                    )}
                </Formik>

                <Container containerStyle={styles.container2}>
                    <Label style={styles.text2} onPress={() => navigation.navigate("ForgotPassword")}>Forgot Password?</Label>
                </Container>

                <Container containerStyle={styles.container3}>
                    <Label style={styles.text3}>Don't have an account?</Label>
                    <Label style={styles.text4} onPress={() => navigation.navigate("Signup")}>Sign up</Label>
                </Container>

                {/* <Container containerStyle={styles.container4}>
                    <Container containerStyle={styles.container5}>
                        <Pressable onPress={() => onGooglePress()}>
                            <Image
                                source={Images.google}
                                style={styles.googleimg}
                            />
                        </Pressable>

                        <Pressable onPress={() => OnFbLogin()}>
                            <Image
                                source={Images.fb}
                                style={styles.fbimg}
                            />
                        </Pressable>

                        <Pressable>
                            <Image
                                source={Images.twitter}
                                style={styles.twitterimg}
                            />
                        </Pressable>
                    </Container>
                </Container> */}
                {Loading ? <LoadingIndicator /> : null}
            </Container>
        </ScrollView>
    )

}

export default Signin;