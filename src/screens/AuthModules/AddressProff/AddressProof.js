import React, { useState } from "react";
import { Image, Pressable, StatusBar } from 'react-native'
import Container from "../../../components/container";
import Label from "../../../components/Label";
import styles from "./styles";
import Btn from "../../../components/Btn";
import { addressproofApi } from "../../../utils/apiServices";
import LoadingIndicator from "../../../components/LoadingIndicator";
import AddressProofModal from "../../../modals/AddressProofModal";
import { api_token } from "../../../utils/Globals";

const AddressProff = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [picture, setPicture] = useState('');
    const [Loading, setLoading] = useState(false);

    console.log("token of addressproof->", api_token);

    async function AddressProffhandler() {
        setLoading(true);
        var formData = new FormData();
        let fileName = picture?.substring(picture?.lastIndexOf('/') + 1);
        formData.append('address_proof', {
            uri: picture,
            name: fileName,
            type: 'image/jpg'
        });

        try {
            let response = await addressproofApi({ data: formData });
            console.log("response", response);
            setLoading(false);
            if (response.status === "Success") {
                console.log('response', response);
                navigation.navigate("UploadDocs", {
                    fromAddressProof: true,
                    picture: picture
                });
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.log("erros", error);
            setLoading(false);
        }
    }

    return (
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.container2}>
                <Label style={styles.label}>Address Proff*</Label>
                <Container containerStyle={styles.container4}>
                    <Container onPress={() => setModalVisible(!modalVisible)}>
                        <Container containerStyle={styles.container3}>
                            <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                <Image
                                    source={picture ? { uri: picture } : require('../../../assets/images/addpics.png')}
                                    style={picture ? styles.Clickimg : styles.addimg}
                                />
                            </Pressable>
                        </Container>
                    </Container>
                    <Btn
                        title="Save"
                        btnStyle={styles.saveBtn}
                        btnHeight={50}
                        textColor={'white'}
                        textSize={14}
                        onPress={() => AddressProffhandler()}
                    />
                </Container>
            </Container>

            <AddressProofModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setPicture={setPicture}
            />
            {Loading ? <LoadingIndicator /> : null}
        </Container>
    )
}

export default AddressProff;