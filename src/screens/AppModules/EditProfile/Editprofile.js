import React, { useState, useEffect } from "react";
import { Image, ScrollView, ToastAndroid, StatusBar } from 'react-native'
import Images from "../../../const/Images";
import { vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import Btn from "../../../components/Btn";
import Container from "../../../components/container";
import styles from "./Styles";
import Label from "../../../components/Label";
import { Formik } from 'formik'
import * as yup from 'yup'
import { editprofileApi } from "../../../utils/apiServices";
import EditprofileModal from "../../../modals/EditProfileModal/EditProfileModal";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { api_token } from "../../../utils/Globals";

const Editprofile = ({ navigation, route }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [picture, setPicture] = useState('');
    const [Loading, setLoading] = useState(false);
    const { ...profileDetails } = route.params;

    useEffect(() => {
        setPicture(profileDetails?.store_image || '');
    }, [])

    console.log("details", profileDetails.store_image);
    console.log("token of edit profile", api_token);

    const EditprofileSchema = yup.object({
        name: yup
            .string(),
        email: yup
            .string()
            .email("Email is invalid"),
        country_code: yup
            .number()
            .min(+12, "Not Valid Country Code"),
        mobile_no: yup
            .number()
            .min(1999999999, "Not Valid Phone Number !")
            .max(9999999999, "Not Valid Phone Number !"),
    })

    async function EditprofileHandler(values) {
        console.log(values);
        setLoading(true);

        var formData = new FormData();
        let file_name = picture?.substring(picture?.lastIndexOf('/') + 1);
        formData.append("name", values.name);
        if (profileDetails?.store_image != picture) {
            formData.append("image", {
                uri: picture,
                name: file_name,
                type: 'image/jpg'
            });
        }
        console.log("formdata-->", formData);

        try {
            let response = await editprofileApi({ data: formData })
            console.log("response", response);
            setLoading(false);
            if (response.status === 'Success') {
                navigation.navigate("Profile", {
                    fromEditProfile: true
                });
                ToastAndroid.show("Profile Updated Successfully", ToastAndroid.SHORT);
                console.log("response", response);
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.log("erros", error);
            setLoading(false);
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={{
            paddingBottom: vs(50)
        }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2} onPress={() => setModalVisible(!modalVisible)}>
                    <Container containerStyle={styles.profileimgBorder}>
                        <Image
                            source={{ uri: picture || 'dummy' }}
                            style={picture ? styles.Clickimg : styles.profileimg}
                        />
                        <Image
                            source={Images.change}
                            style={styles.changeimg}
                        />
                    </Container>
                </Container>

                <Formik
                    initialValues={{
                        name: profileDetails.name,
                        email: profileDetails.email,
                        mobile_no: profileDetails.mobile_no,
                        country_code: profileDetails.country_code
                    }}
                    validationSchema={EditprofileSchema}
                    onSubmit={EditprofileHandler}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <Container containerStyle={styles.container3}>
                                <Label style={styles.label}>Company Name</Label>
                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={{
                                        maxWidth: '99%'
                                    }}
                                    containerStyle={styles.name_input}
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
                                    inputHeight={50}
                                    textSize={14}
                                />
                                {errors.name && <Label style={{
                                    color: 'red',
                                    marginTop: vs(5)
                                }}>{errors.name}</Label>}

                                <Label style={[styles.label, styles.extraContainer]}>Email Address</Label>
                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={{
                                        maxWidth: '99%'
                                    }}
                                    editable={false}
                                    containerStyle={styles.email_input}
                                    // onChangeText={handleChange('email')}
                                    // onBlur={handleBlur('email')}
                                    value={values.email}
                                    inputHeight={50}
                                    textSize={14}
                                />
                                {errors.email && <Label style={{
                                    color: 'red',
                                    marginTop: vs(5)
                                }}>{errors.email}</Label>}

                                <Label style={[styles.label, styles.extraContainer]}>Country Code</Label>
                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={{
                                        maxWidth: '99%'
                                    }}
                                    containerStyle={styles.countrycode_input}
                                    // onChangeText={handleChange('country_code')}
                                    // onBlur={handleBlur('country_code')}
                                    value={values.country_code}
                                    inputHeight={50}
                                    textSize={14}
                                />
                                {errors.mobile_no && <Label style={{
                                    color: 'red',
                                    marginTop: vs(5)
                                }}>{errors.mobile_no}</Label>}

                                <Label style={[styles.label, styles.extraContainer]}>Mobile Number</Label>
                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={{
                                        maxWidth: '99%'
                                    }}
                                    containerStyle={styles.mobileno_input}
                                    // onChangeText={handleChange('mobile_no')}
                                    // onBlur={handleBlur('mobile_no')}
                                    value={values.mobile_no}
                                    inputHeight={50}
                                    textSize={14}
                                />
                                {errors.mobile_no && <Label style={{
                                    color: 'red',
                                    marginTop: vs(5)
                                }}>{errors.mobile_no}</Label>}
                            </Container>
                            <Btn
                                title="Update"
                                btnStyle={styles.update_btn}
                                btnHeight={50}
                                textColor={'white'}
                                textSize={14}
                                onPress={handleSubmit}
                            />
                        </>
                    )}
                </Formik>
            </Container>
            <EditprofileModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setPicture={setPicture}
            />
            {Loading ? <LoadingIndicator /> : null}
        </ScrollView>
    )
}

export default Editprofile;