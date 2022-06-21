import React, { useState } from "react";
import { View, Text, Image, ScrollView, StatusBar, ToastAndroid } from 'react-native';
import Images from "../../../const/Images";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import Btn from "../../../components/Btn";
import styles from "./Styles";
import Container from "../../../components/container";
import { Formik } from 'formik';
import * as yup from 'yup';
import Label from "../../../components/Label";
import { resetpasswordApi } from "../../../utils/apiServices";
import LoadingIndicator from "../../../components/LoadingIndicator";
import ModalLoadingIndicator from "../../../components/ModalLoadingIndicator";

const ResetPassword = ( { navigation, route } ) => {

    const [ Loading, setLoading ] = useState( false );

    const ResetPasswordSchema = yup.object( {
        Newpassword: yup.string()
            .required( 'Required' ),
        Confirmpassword: yup.string()
            .required( 'Required' )
            .oneOf( [ yup.ref( 'Newpassword' ), null ], 'Passwords must match' )
    } );

    async function ResetPasswordHandler ( values ) {
        setLoading( true );
        console.log( values );

        var formData = new FormData();
        formData.append( "mobile_no", route.params.mobile_no );
        formData.append( "password", values.Newpassword );
        console.log( "formdata", formData );

        let response = await resetpasswordApi( { data: formData } );
        console.log( "response", response );

        if ( response.status == 'Success' ) {
            setLoading( true );
            navigation.navigate( "Signin" );
            setLoading( false );
            ToastAndroid.show( "Reset Password Successfully", ToastAndroid.SHORT );
            console.log( "response", response );
        } else {
            alert( response.message );
            setLoading( false );
        }
    }

    return (
        <ScrollView style={ { backgroundColor: 'white' } }>
            <Container containerStyle={ styles.container }>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Image
                    source={ Images.reset }
                    style={ styles.resetpswimg }
                />
                <Label style={ styles.text1 }>Reset your password</Label>
                <Formik
                    initialValues={ { Newpassword: '', Confirmpassword: '' } }
                    validationSchema={ ResetPasswordSchema }
                    onSubmit={ ResetPasswordHandler }
                >
                    { ( { handleChange, handleBlur, handleSubmit, values, errors, touched } ) => (
                        <>
                            <InputBox
                                placeholder="New password"
                                inputStyle={ {
                                    maxWidth: '75%'
                                } }
                                secureTextEntry={ true }
                                containerStyle={ styles.newpsw_input }
                                onChangeText={ handleChange( 'Newpassword' ) }
                                onBlur={ handleBlur( 'Newpassword' ) }
                                value={ values.Newpassword }
                                inputHeight={ 50 }
                                textSize={ 14 }
                            />
                            { errors.Newpassword && touched.Newpassword ? ( <Label style={ {
                                color: 'red',
                                alignSelf: 'flex-start',
                                marginLeft: hs( 17 ),
                                marginTop: vs( 5 )
                            } }>{ errors.Newpassword }</Label> ) : null }

                            <InputBox
                                placeholder="Confirm password"
                                inputStyle={ {
                                    maxWidth: '75%'
                                } }
                                secureTextEntry={ true }
                                containerStyle={ styles.confirmpsw_input }
                                onChangeText={ handleChange( 'Confirmpassword' ) }
                                onBlur={ handleBlur( 'Confirmpassword' ) }
                                value={ values.Confirmpassword }
                                inputHeight={ 50 }
                                textSize={ 14 }
                            />
                            { errors.Confirmpassword !== "Required" && touched.Confirmpassword ? ( <Label style={ {
                                color: 'red',
                                alignSelf: 'flex-start',
                                marginLeft: hs( 17 ),
                                marginTop: vs( 5 )
                            } }>{ errors.Confirmpassword }</Label> ) : null }

                            <Btn
                                title="Reset"
                                btnStyle={ styles.reset_btn }
                                btnHeight={ 50 }
                                textColor={ 'white' }
                                textSize={ 14 }
                                onPress={ handleSubmit }
                            />
                        </>
                    ) }
                </Formik>

                <Btn
                    title="Back to login"
                    btnStyle={ styles.backlogin_btn }
                    btnHeight={ 50 }
                    textColor={ '#000' }
                    labelStyle={ {
                        fontWeight: 'bold'
                    } }
                    textSize={ 14 }
                    onPress={ () => navigation.navigate( "Signin" ) }
                />
            </Container>
            { Loading ? <ModalLoadingIndicator /> : null }

        </ScrollView>
    );
};

export default ResetPassword;