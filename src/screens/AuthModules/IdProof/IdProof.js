import React, { useState } from "react";
import { Image, Pressable, StatusBar } from 'react-native'
import styles from "./styles";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import Btn from "../../../components/Btn";
import IdProofFrontModal from "../../../modals/IDProofFrontModal";
import IdProofBackModal from "../../../modals/IDProofBackModal";
import { idproofApi } from "../../../utils/apiServices";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { api_token } from '../../../utils/Globals'

const IdProff = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [picture, setPicture] = useState('');
    const [pictureback, setPictureBack] = useState('');
    const [Loading, setLoading] = useState(false);

    async function IdProffhandler() {
        setLoading(true);
        var formData = new FormData();
        let file_name = picture?.substring(picture?.lastIndexOf('/') + 1);
        let file_name2 = pictureback?.substring(pictureback?.lastIndexOf('/') + 1);

        formData.append('id_proof', {
            uri: picture,
            name: file_name,
            type: 'image/jpeg'
        });

        formData.append('id_proof', {
            uri: pictureback,
            name: file_name2,
            type: 'image/jpeg'
        })

        try {
            let response = await idproofApi({ data: formData });
            console.log("response", response);
            setLoading(false);
            if (response.status == "Success") {
                console.log('response', response);
                navigation.navigate("UploadDocs",{
                    fromIDProof:true,
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
                <Container containerStyle={styles.container3}>
                    <Label style={styles.label}>ID front imager*</Label>
                    <Container onPress={() => setModalVisible2(!modalVisible2)}>
                        <Container containerStyle={styles.container4}>
                            <Pressable onPress={() => setModalVisible2(!modalVisible2)}>
                                <Image
                                    source={picture ? { uri: picture } : require('../../../assets/images/addpics.png')}
                                    style={picture ? styles.Libraryimg : styles.addimg}
                                />
                            </Pressable>
                        </Container>
                    </Container>
                </Container>

                <Container containerStyle={styles.container5}>
                    <Label style={styles.label}>ID back imager*</Label>
                    <Container onPress={() => setModalVisible(!modalVisible)}>
                        <Container containerStyle={styles.container4}>
                            <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                <Image
                                    source={pictureback ? { uri: pictureback } : require('../../../assets/images/addpics.png')}
                                    style={pictureback ? styles.Libraryimg : styles.addimg}
                                />
                            </Pressable>
                        </Container>
                    </Container>
                </Container>
                <Btn
                    title="Save"
                    btnStyle={styles.save_btn}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                    onPress={() => IdProffhandler()}
                />
            </Container>

            <IdProofFrontModal
                modalVisible2={modalVisible2}
                setModalVisible2={setModalVisible2}
                setPicture={setPicture}
            />

            <IdProofBackModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setPictureBack={setPictureBack}
            />
            {Loading ? <LoadingIndicator /> : null}
        </Container>
    )
}

export default IdProff;