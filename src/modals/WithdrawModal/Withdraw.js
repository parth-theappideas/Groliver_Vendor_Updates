import React from "react";
import { Image, Pressable, StyleSheet } from 'react-native'
import Btn from "../../components/Btn";
import InputBox from '../../components/InputBox'
import { Modalize } from 'react-native-modalize'
import Container from "../../components/container";
import Label from "../../components/Label";
import styles from "./styles";


const Withdraw = ({ WithdrawRef, onClose }) => {

    const RenderWithdraw = () => {
        return (
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2}>
                    <Label style={styles.label}>Withdraw</Label>
                    <Pressable onPress={() => onClose()}>
                        <Image
                            source={{
                                uri: "https://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Cancel-icon.png"
                            }}
                            style={styles.closeimg}
                        />
                    </Pressable>
                </Container>

                <Container containerStyle={styles.container3} />
                <Container containerStyle={styles.container4}>
                    <InputBox
                        placeholder="Enter amount"
                        inputStyle={{
                            maxWidth: '99%'
                        }}
                        containerStyle={styles.enterAmount_input}
                        inputHeight={50}
                        textSize={14}
                        keyboardType="numeric"
                    />
                </Container>
                <Btn
                    title="Processed"
                    btnStyle={styles.processed_btn}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                />
            </Container>
        )
    }
    return (
        <Modalize ref={WithdrawRef}
            adjustToContentHeight={true}
            withHandle={false}
            handlePosition="inside"
            modalStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
            }}
            panGestureEnabled={true}
            closeOnOverlayTap={true}
        >
            {RenderWithdraw()}
        </Modalize>
    )
}

export default Withdraw;