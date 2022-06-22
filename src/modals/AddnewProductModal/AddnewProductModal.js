import React, { useState,useRef,useEffect } from 'react'
import { Modal, Image } from 'react-native'
import Container from '../../components/container';
import Label from '../../components/Label';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import LoadingIndicator from '../../components/LoadingIndicator';
import styles from './styles';

const AddnewProductModal = ({ modalVisible, setModalVisible, setPicture }) => {

    const [Loading, setLoading] = useState(false);
    // const ref = useRef();

    // useEffect(()=>{
    //     const ClickedOutSide = (e) => {
    //         if(ref.current && !ref.current(e.target)){
    //             onClose()
    //         }
    //     }
    //    ClickedOutSide()
    // })

    const Camerafile = () => {
        let Options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchCamera(Options, (response) => {
            console.log('Response', response);
            if (response.didCancel) {
                console.log("Cancelled");
            } else if (response.errorCode) {
                console.log('Image error', response.errorCode);
            } else {
                console.log("response:",response);
                const ImageAccess = response.assets[0].uri
                setPicture(ImageAccess);
                setModalVisible(!modalVisible);
                console.log(response);
            }
        })
    }

    const Choosefile = () => {
        let Options = {
            // meadiaType: 'photo',
            // maxWidth: 300,
            // maxHeight: 550,
            // quality: 1,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(Options, (response) => {
            if (response.assets) {
                const ImageAccess = response.assets[0].uri
                setPicture(ImageAccess);
                setLoading(true);
                setModalVisible(!modalVisible);
                setLoading(false);
                console.log(response);
            }
        })
    }

    const onClose = () => {
        setModalVisible(!modalVisible);
    }

    return (
        <Container containerStyle={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={onClose}
                statusBarTranslucent={true}
            >
                <Container containerStyle={styles.container2}>
                    <Container containerStyle={styles.container3}>
                        <Container containerStyle={styles.container4}>
                            <Label style={styles.label}>Select Your Choise !!</Label>
                        </Container>

                        <Container containerStyle={styles.border} />

                        <Container onPress={() => Camerafile()}>
                            <Container containerStyle={styles.container5}>
                                <Container containerStyle={styles.container6}>
                                    <Label style={styles.labe2}>Take Picture</Label>
                                    <Image
                                        source={{ uri: 'https://cdn.pixabay.com/photo/2016/10/08/18/34/camera-1724286_1280.png' }}
                                        style={styles.cameraPicture}
                                    />
                                </Container>
                            </Container>
                        </Container>

                        <Container containerStyle={styles.border2} />

                        <Container onPress={() => Choosefile()}>
                            <Container containerStyle={styles.container7}>
                                <Container containerStyle={styles.contaier8}>
                                    <Label style={styles.label3}>Choose image</Label>
                                    <Image
                                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Icons8_flat_gallery.svg/1024px-Icons8_flat_gallery.svg.png' }}
                                        style={styles.libraryPicture}
                                    />
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Modal>
            {Loading ? <LoadingIndicator /> : null}
        </Container>
    )
}

export default AddnewProductModal;