import React, { useRef } from "react";
import { Image, Pressable, StyleSheet } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { fs, hs, vs } from "../../utils/stylesUtils";
import Container from "../../components/container";
import Label from "../../components/Label";
import Success from "../SuccessModal/Success";
import SelectAccountitems from "../../components/Flatlistitems/SelectAccountitems/SelectAccpuntitems";

const Selectaccount = ({ SelectaccountRef, onClose }) => {
    const SuccessRef = useRef(null);

    const onCloseModal = () => {
        SuccessRef.current?.close();
    }

    return (
        <Modalize ref={SelectaccountRef}
            adjustToContentHeight={true}
            withHandle={false}
            handlePosition="inside"
            modalStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            }}
            panGestureEnabled={true}
            closeOnOverlayTap={true}
            HeaderComponent={() => {
                return (
                    <Container>
                        <Container containerStyle={styles.container2}>
                            <Label style={styles.label}>Select account</Label>

                            <Pressable onPress={() => onClose()}>
                                <Image
                                    source={{
                                        uri: "https://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Cancel-icon.png"
                                    }}
                                    style={styles.cancelimg}
                                />
                            </Pressable>
                        </Container>
                        <Container containerStyle={styles.container3} />
                    </Container>
                )
            }}
        >
            <SelectAccountitems/>

            <Success
                SuccessRef={SuccessRef}
                onCloseModal={onCloseModal}
            />

        </Modalize>
    )
}

export default Selectaccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: hs(20),
        marginTop: vs(20),
    },
    label: {
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold'
    },
    cancelimg: {
        width: hs(20),
        height: vs(20)
    },
    container3: {
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: '#f2f2f2'
    },
})