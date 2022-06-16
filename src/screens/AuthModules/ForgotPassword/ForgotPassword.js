import React, { useState } from "react";
import { View, Image, ScrollView, StatusBar, ToastAndroid } from 'react-native'
import Images from "../../../const/Images";
import { hs, vs } from "../../../utils/stylesUtils";
import Btn from "../../../components/Btn";
import InputBox from "../../../components/InputBox";
import styles from "./Styles";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import { Formik } from 'formik'
import * as yup from 'yup'
import LoadingIndicator from "../../../components/LoadingIndicator";
import { forgotpasswordApi } from "../../../utils/apiServices";

const ForgotPassword = ({ navigation }) => {

    const [Loading, setLoading] = useState(false);

    const ForgotPasswordSchema = yup.object({
        mobile_no: yup
            .number()
            .required("Phone number is Required *")
            .min(1999999999, "Not Valid Phone Number !")
            .max(9999999999, "Not Valid Phone Number !"),
    })

    async function ForgotPasswordHandler(values) {
        setLoading(true);
        console.log(values);

        var formData = new FormData();
        formData.append("mobile_no", values.mobile_no);
        formData.append("fcm_token", '');

        try {
            let response = await forgotpasswordApi({ data: formData })
            console.log("response", response.data.otp);
            setLoading(false);
            if (response.status === 'Success') {
                navigation.navigate("Verification", {
                    mobile_no: values.mobile_no,
                    fromForgot:true,
                    ForgotOTP:response.data.otp
                })
                ToastAndroid.show("Forgot Password Successfully", ToastAndroid.SHORT);
                console.log("response", response);
            }
            else {
                alert("This mobile number is not register , please try with another mobile number");
            }
        } catch (error) {
            console.log("erros",error);
            setLoading(false);
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Image
                    source={Images.vector}
                    style={styles.forgotpswimg}
                />
                <Label style={styles.text1}>Forgot your password</Label>
                <Container containerStyle={styles.container2}>
                    <Label style={styles.text2}>Enter your mobile number below and we will</Label>
                    <Label style={styles.text3}>send you a verification code</Label>
                </Container>

                <Formik
                    initialValues={{ mobile_no: '' }}
                    validationSchema={ForgotPasswordSchema}
                    onSubmit={ForgotPasswordHandler}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <InputBox
                                placeholder=" Phone number"
                                inputStyle={{
                                    maxWidth: '75%'
                                }}
                                containerStyle={styles.phno_input}
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

                            <Btn
                                title="Send"
                                btnStyle={styles.send_btn}
                                btnHeight={50}
                                textColor={'white'}
                                textSize={14}
                                onPress={handleSubmit}
                            />
                        </>
                    )}
                </Formik>

                <Btn
                    title="Back to login"
                    btnStyle={styles.back_login_Btn}
                    btnHeight={50}
                    textColor={'#000'}
                    textSize={14}
                    labelStyle={{
                        fontWeight: 'bold'
                    }}
                    onPress={() => navigation.navigate("Signin")}
                />
            </Container>

            {Loading ?
                <View style={{
                    marginLeft: hs(13),
                    position:'absolute',
                    top:0,
                    bottom:0
                }}>
                    <LoadingIndicator />
                </View>
                : null}

        </ScrollView>
    )
}

export default ForgotPassword;