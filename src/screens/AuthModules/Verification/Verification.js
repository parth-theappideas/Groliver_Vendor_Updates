import React, { useState } from "react";
import { Text, ScrollView, Image, StatusBar, ToastAndroid } from 'react-native'
import Images from "../../../const/Images";
import Btn from "../../../components/Btn";
import styles from "./Styles";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Formik } from 'formik'
import * as yup from 'yup'
import { verificationApi } from "../../../utils/apiServices";
import LoadingIndicator from "../../../components/LoadingIndicator";
import VerificationModal from "../../../modals/VerificationModal/VerificationModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Globals from "../../../utils/Globals"
import { vs } from "../../../utils/stylesUtils";

const CELL_COUNT = 6;

const Verification = ({ navigation, route }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState('');
    const [Loading, setLoading] = useState(false);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [rest, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const VerificationSchema = yup.object({
        otp: yup.number()
            .required('')
    })

    const SignOTP = route.params.otp;
    const ForgotOTP = route.params.ForgotOTP

    const VerificationHandler = async (values) => {
        setLoading(true);
        console.log(values);

        var formData = new FormData();
        formData.append("mobile_no", route.params.mobile_no);
        formData.append("otp", values.otp);

        try {
            let response = await verificationApi({ data: formData })
            console.log("res", response);
            setLoading(false);

            if (!route.params.fromForgot) {
                if (response.status === "Success") {
                    Globals.api_token = response.data.token
                    await AsyncStorage.setItem('@store1:User', JSON.stringify({ data: response.data }));
                    console.log("response-->", response);
                    navigation.navigate("UploadDocs");
                    ToastAndroid.show("Verify Successfully", ToastAndroid.SHORT);
                } else {
                    console.log("OTP Mismatch", response.status === "Fail");
                    setLoading(false);
                }
            } else {
                setLoading(true);
                navigation.navigate("ResetPassword", {
                    mobile_no: route.params.mobile_no
                })
            }
        } catch (error) {
            console.log("errors", error);
            setLoading(false);
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Container containerStyle={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Image
                    source={Images.email}
                    style={styles.emaillogo}
                />
                <Label style={styles.text1}>Verify your SMS</Label>
                <Container containerStyle={styles.container2}>
                    <Label style={styles.text2}>Check your SMS for an OTP</Label>
                </Container>

                <Text style={{
                    color: 'black',
                    marginTop: vs(10)
                }}>SignupOTP : {SignOTP}</Text>

                <Text style={{
                    color: 'black',
                    marginTop: vs(10)
                }}>ForgotOTP : {ForgotOTP}</Text>

                <Container containerStyle={styles.root}>
                    <Container containerStyle={styles.container3}>
                        <Formik
                            initialValues={{ otp: '', mobile_no: '' }}
                            validationSchema={VerificationSchema}
                            onSubmit={VerificationHandler}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                                <>
                                    <CodeField
                                        ref={ref}
                                        {...rest}
                                        value={values.otp}
                                        onChangeText={handleChange('otp')}
                                        onBlur={handleBlur('otp')}
                                        cellCount={CELL_COUNT}
                                        // rootStyle={styles.rootStyle}
                                        keyboardType="number-pad"
                                        textContentType="oneTimeCode"
                                        renderCell={({ index, symbol, isFocused }) => (
                                            <Text
                                                key={index}
                                                style={[styles.cell, isFocused && styles.focusCell]}
                                                onLayout={getCellOnLayoutHandler(index)}>
                                                {symbol || (isFocused ? <Cursor /> : null)}
                                            </Text>
                                        )}
                                    />
                                    <Btn
                                        title="Verify"
                                        btnStyle={styles.verify_Btn}
                                        btnHeight={50}
                                        textColor={'white'}
                                        textSize={14}
                                        onPress={handleSubmit}
                                    />
                                    <Btn
                                        title="Resend OTP"
                                        btnStyle={styles.resendOTP_Btn}
                                        btnHeight={50}
                                        textColor={'#000'}
                                        labelStyle={{
                                            fontWeight: 'bold'
                                        }}
                                        textSize={14}
                                    />
                                </>
                            )}
                        </Formik>
                    </Container>
                </Container>
            </Container>
            <VerificationModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
            {Loading ? <LoadingIndicator /> : null}
        </ScrollView>
    )
}

export default Verification;