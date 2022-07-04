import React, { useState } from "react";
import { Image, StatusBar, ScrollView, ToastAndroid } from 'react-native';
import Images from "../../../const/Images";
import { vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import Btn from "../../../components/Btn";
import styles from "./Styles";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import { Formik } from 'formik';
import * as yup from 'yup';
import { registerApi } from "../../../utils/apiServices";
import LoadingIndicator from "../../../components/LoadingIndicator";
import SignupModal from "../../../modals/SignupModal/SignupModal";
import { Picker } from '@react-native-picker/picker';
import ModalLoadingIndicator from "../../../components/ModalLoadingIndicator";

const CountryCodeList = [
    {
        id: 1,
        Country_code: "Select"
    },
    {
        id: 2,
        Country_code: "+91  (India)"
    },
    {
        id: 3,
        Country_code: "+355  (Albania)"
    },
    {
        id: 4,
        Country_code: "+213  (Algeria)"
    },
    {
        id: 5,
        Country_code: "+376  (Andorra)"
    },
    {
        id: 6,
        Country_code: "+244  (Angola)"
    },
    {
        id: 7,
        Country_code: "+93  (Afghanistan)"
    },
    {
        id: 8,
        Country_code: "+61  (Australia)"
    },
    {
        id: 9,
        Country_code: "+1  (United States)"
    },
    {
        id: 10,
        Country_code: "+44  (United Kingdom)"
    },
    {
        id: 11,
        Country_code: "+49  (Germany)"
    }
];

const Signup = ( { navigation } ) => {

    const [ Loading, setLoading ] = useState( false );
    const [ modalVisible, setModalVisible ] = useState( false );
    const [ picture, setPicture ] = useState( '' );
    const [ code, setCode ] = useState( {} );

    const SignupSchema = yup.object( {
        name: yup
            .string()
            .required( "Name is Required *" ),
        email: yup
            .string()
            .required( "Email is Required *" )
            .email( "Email is invalid" ),
        country_code: yup
            .number(),
        mobile_no: yup
            .number()
            .min(1999999999, "Not Valid Phone Number !")
            .max(9999999999, "Not Valid Phone Number !")
            .required( "Phone number is Required *" ),
        password: yup
            .string()
            .required( "Password is Required *" )
    } );

    async function SignupHandler ( values ) {
        console.log( values );
        setLoading( true );

        var formData = new FormData();
        let file_name = picture?.substring( picture?.lastIndexOf( '/' ) + 1 );
        formData.append( "name", values.name );
        formData.append( "email", values.email );
        formData.append( "country_code", code );
        formData.append( "fcm_token", "" );
        formData.append( "mobile_no", values.mobile_no );
        formData.append( "password", values.password );
        formData.append( "image", {
            uri: picture,
            name: file_name,
            type: 'image/jpg'
        } );

        try {
            let response = await registerApi( { data: formData } );
            console.log( "response", response );
            setLoading( false );
            if ( response.status == 'Success' ) {
                console.log( "response -->", response.data.otp );
                navigation.navigate( "Verification", {
                    mobile_no: values.mobile_no,
                    otp: response.data.otp
                } );
                ToastAndroid.show( "Signup Successfully", ToastAndroid.SHORT );
                console.log( "response", response );
            }
            else {
                alert( response.message );
            }
        } catch ( error ) {
            console.log( "erros", error );
            if ( CountryCodeList ) {
                alert( "Please select Country code" );
            } else {
                alert( "You are miss something image uploading or input field", error );
            }
            setLoading( false );
        }
    }

    return (
        <ScrollView style={ { backgroundColor: 'white' } } contentContainerStyle={ {
            paddingBottom: vs( 50 )
        } }>
            <Container containerStyle={ styles.container }>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Container onPress={ () => setModalVisible( !modalVisible ) }>
                    <Image
                        source={ picture ? { uri: picture } : require( '../../../assets/images/placeholder.png' ) }
                        style={ picture ? styles.Clickimg : styles.img1 }
                    />
                    <Image
                        source={ Images.change }
                        style={ styles.img2 }
                    />
                </Container>

                <Formik
                    initialValues={ { name: '', email: '', mobile_no: '', password: '', country_code: '' } }
                    validationSchema={ SignupSchema }
                    onSubmit={ SignupHandler }
                >
                    { ( { handleChange, handleBlur, handleSubmit, values, errors, touched } ) => (
                        <>
                            <Container containerStyle={ styles.container2 }>
                                <Label style={ styles.text1 }>Company Name</Label>
                                <InputBox
                                    placeholder=" Type here..."
                                    inputStyle={ {
                                        maxWidth: '99%'
                                    } }
                                    containerStyle={ styles.name_input }
                                    onChangeText={ handleChange( 'name' ) }
                                    onBlur={ handleBlur( 'name' ) }
                                    value={ values.name }
                                    inputHeight={ 50 }
                                    textSize={ 14 }
                                />
                                {touched.name && errors.name ? ( <Label style={ {
                                    color: 'red',
                                    marginTop: vs( 5 )
                                } }>{ errors.name }</Label> ) : null }

                                <Label style={ styles.text2 }>Email Address</Label>
                                <InputBox
                                    placeholder=" Type here..."
                                    inputStyle={ {
                                        maxWidth: '99%'
                                    } }
                                    containerStyle={ styles.email_input }
                                    onChangeText={ handleChange( 'email' ) }
                                    onBlur={ handleBlur( 'email' ) }
                                    value={ values.email }
                                    inputHeight={ 50 }
                                    textSize={ 14 }
                                />
                                { touched.email && errors.email ? ( <Label style={ {
                                    color: 'red',
                                    marginTop: vs( 5 )
                                } }>{ errors.email }</Label> ) : null }

                                <Label style={ styles.text2 }>Password</Label>
                                <InputBox
                                    placeholder=" Type here..."
                                    inputStyle={ {
                                        maxWidth: '99%'
                                    } }
                                    secureTextEntry={ true }
                                    containerStyle={ styles.password_input }
                                    onChangeText={ handleChange( 'password' ) }
                                    onBlur={ handleBlur( 'password' ) }
                                    value={ values.password }
                                    inputHeight={ 50 }
                                    textSize={ 14 }
                                />
                                {touched.password && errors.password ? ( <Label style={ {
                                    color: 'red',
                                    marginTop: vs( 5 )
                                } }>{ errors.password }</Label> ) : null }

                                <Label style={ styles.text3 }>Country Code</Label>
                                <Container containerStyle={ styles.borderStyle }>
                                    <Picker
                                        style={ styles.picker_style }
                                        selectedValue={ code }
                                        onValueChange={ ( itemValue ) => setCode( itemValue ) }
                                    >
                                        {
                                            CountryCodeList.map( ( item, index ) => {
                                                return (
                                                    <Picker.Item
                                                        key={ index }
                                                        style={ styles.picker_item }
                                                        value={ item.Country_code }
                                                        label={ item.Country_code }
                                                    />
                                                );
                                            } )
                                        }
                                    </Picker>
                                </Container>

                                <Label style={ styles.text4 }>Mobile Number</Label>
                                <InputBox
                                    placeholder=" Type here..."
                                    inputStyle={ {
                                        maxWidth: '99%'
                                    } }
                                    keyboardType="numeric"
                                    containerStyle={ styles.mobileno_input }
                                    onChangeText={ handleChange( 'mobile_no' ) }
                                    onBlur={ handleBlur( 'mobile_no' ) }
                                    value={ values.mobile_no }
                                    inputHeight={ 50 }
                                    // textSize={ 14 }
                                />
                                {touched.mobile_no && errors.mobile_no ? ( <Label style={ {
                                    color: 'red',
                                    marginTop: vs( 5 )
                                } }>{ errors.mobile_no }</Label> ) : null }
                            </Container>
                            <Btn
                                title="Continue"
                                btnStyle={ styles.continue_btn }
                                btnHeight={ 50 }
                                textColor={ 'white' }
                                textSize={ 14 }
                                onPress={ handleSubmit }
                            />
                        </>
                    ) }
                </Formik>

                <Container containerStyle={ styles.container3 }>
                    <Container containerStyle={ styles.container4 }>
                        <Label style={ styles.text5 }>By continuing, you agree to our</Label>
                        <Label style={ styles.text6 } onPress={ () => navigation.navigate( "Terms" ) }>Terms and Conditions</Label>
                    </Container>

                    <Container containerStyle={ styles.container5 }>
                        <Label style={ styles.text7 }>and</Label>
                        <Label style={ styles.text8 } onPress={ () => navigation.navigate( "Privacy" ) }>Privacy Policy</Label>
                    </Container>
                </Container>
                { Loading ? <ModalLoadingIndicator /> : null }
                <SignupModal
                    modalVisible={ modalVisible }
                    setModalVisible={ setModalVisible }
                    setPicture={ setPicture }
                />
            </Container>
        </ScrollView>
    );
};

export default Signup; 