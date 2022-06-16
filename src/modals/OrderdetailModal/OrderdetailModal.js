import React from "react";
import { Image, Pressable } from 'react-native'
import { vs } from "../../utils/stylesUtils";
import { Modalize } from 'react-native-modalize'
import Container from "../../components/container";
import Label from "../../components/Label";
import styles from "./styles";
import OrderDetailModalitems from "../../components/Flatlistitems/OrderDetailModalitems/OrderDetailModalitems";

const OrderDetailModal = ({ modalizeRef, onClose }) => {
    return (
        <Modalize ref={modalizeRef}
            adjustToContentHeight={true}
            withHandle={false}
            handlePosition="inside"
            modalStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                paddingBottom: vs(5)
            }}
            panGestureEnabled={true}
            closeOnOverlayTap={true}
            HeaderComponent={() => {
                return (
                    <Container>
                        <Container containerStyle={styles.container1}>
                            <Label style={styles.header}>Action</Label>
                            <Pressable onPress={() => onClose()}>
                                <Image
                                    source={{
                                        uri: "https://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Cancel-icon.png"
                                    }}
                                    style={styles.cancel_img}
                                />
                            </Pressable>
                        </Container>
                        <Container containerStyle={styles.border_styles} />
                    </Container>
                )
            }}
        >
            <OrderDetailModalitems />
        </Modalize>
    )
}
export default OrderDetailModal;