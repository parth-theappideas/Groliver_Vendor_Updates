import React from "react";
import { View, Image } from 'react-native'
import { hs, vs } from "../../../utils/stylesUtils";
import Container from "../../container";
import Label from "../../Label";
import styles from "./Styles";

const NotificationItems = ({ item }) => {
    return (
        <Container containerStyle={styles.mainContainer}>
            <Container containerStyle={styles.container}>
                <Image
                    source={item.image}
                    style={styles.itemimg}
                />

                <Container containerStyle={styles.container2}>
                    <Label style={styles.label}>{item.text}</Label>
                    <Label style={styles.label}>{item.text2}</Label>
                    <Label style={styles.label2}>{item.time}</Label>
                </Container>
            </Container>
            <Container containerStyle={styles.borderStyle} />
        </Container>
    )
}

export default NotificationItems;