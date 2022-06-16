import React from 'react'
import { Modal, Image, StyleSheet } from 'react-native'
import Btn from '../../components/Btn';
import Container from '../../components/container';
import Label from '../../components/Label';
import Images from '../../const/Images';
import { vs, hs, fs } from '../../utils/stylesUtils';
import styles from './styles';

const VerificationModal = ({ modalVisible, setModalVisible, navigation }) => {
    return (
        <Container containerStyle={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                statusBarTranslucent={true}
            >
                <Container containerStyle={styles.container2}>
                    <Container containerStyle={styles.container3}>
                        <Image
                            source={Images.success}
                            style={styles.successImg}
                        />

                        <Container containerStyle={styles.container4}>
                            <Label onPress={() => setModalVisible(!modalVisible)} style={styles.label}>Welcome!!!</Label>
                            <Label onPress={() => setModalVisible(!modalVisible)} style={styles.label2}>Your account has been verified</Label>
                        </Container>

                        <Btn
                            title="Go to dashboard"
                            btnStyle={styles.dashboard_btn}
                            btnHeight={50}
                            textColor={'#fff'}
                            labelStyle={{
                                fontWeight: 'bold'
                            }}
                            textSize={14}
                            onPress={() => navigation.navigate("Dashboard")}
                        />
                    </Container>
                </Container>
            </Modal>
        </Container>
    )
}

export default VerificationModal;