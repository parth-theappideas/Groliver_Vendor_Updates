import React from "react";
import { Image } from 'react-native'
import Btn from "../../components/Btn";
import { Modalize } from 'react-native-modalize'
import { vs } from "../../utils/stylesUtils";
import Images from "../../const/Images";
import Container from "../../components/container";
import Label from "../../components/Label";
import styles from "./styles";

const Success = ({ SuccessRef, onCloseModal }) => {
    const RenderSuccess = () => {
        return (
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2}>
                    <Image
                        source={Images.success}
                        style={styles.successimg}
                    />
                    <Label style={styles.label}>Success!!!</Label>
                    <Label style={styles.label2}>Money withdraw successfully</Label>
                </Container>

                <Btn
                    title="Done"
                    btnStyle={styles.done_btn}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                    onPress={() => onCloseModal()}
                />
            </Container>
        )
    }
    return (
        <Modalize ref={SuccessRef}
            adjustToContentHeight={true}
            withHandle={false}
            handlePosition="inside"
            modalStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            }}
            panGestureEnabled={true}
            closeOnOverlayTap={true}
        >
            {RenderSuccess()}
        </Modalize>
    )
}

export default Success;