import React, { useState } from "react";
import { Image } from 'react-native'
import { vs } from "../../../utils/stylesUtils";
import Btn from "../../Btn";
import Container from "../../container";
import Label from "../../Label";
import styles from "./styles";

const SelectAccountitems = () => {

    const SelectAccountData = [
        {
            id: 1,
            value: '**** **** **** 1234',
            tick: require('../../../assets/images/tick.png'),
            master_card: require('../../../assets/images/master.png'),
        },
        {
            id: 2,
            value: '**** **** **** 5742',
            tick: require('../../../assets/images/tick.png'),
            master_card: require('../../../assets/images/master.png'),
        },
        {
            id: 3,
            value: '**** **** **** 1234',
            tick: require('../../../assets/images/tick.png'),
            master_card: require('../../../assets/images/master.png'),
        },
    ]

    const [select, setSelect] = useState(null);

    return (
        <>
            {
                SelectAccountData.map((item, index) => {
                    return (
                        <Container containerStyle={styles.container2} key={index}>
                            <Container onPress={() => setSelect(item.id)}>
                                <Container containerStyle={styles.container3}>
                                    <Container containerStyle={styles.container4}>
                                        <Container containerStyle={styles.container5}>
                                            <Image
                                                source={item.master_card}
                                                style={styles.select_img}
                                            />

                                            <Label style={styles.label}>{item.value}</Label>
                                        </Container>
                                        <Container containerStyle={styles.container5}>
                                            {item.id === select ?
                                                <Image
                                                    source={item.tick}
                                                    style={styles.select_img}
                                                />
                                                :
                                                null
                                            }
                                        </Container>
                                    </Container>
                                </Container>
                            </Container>
                        </Container>
                    )
                })
            }
            <Btn
                title="Processed"
                btnStyle={{
                    backgroundColor: '#009345',
                    borderRadius: 5,
                    justifyContent: 'center',
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: vs(20),
                }}
                btnHeight={50}
                textColor={'white'}
                textSize={14}
                onPress={() => SuccessRef.current.open()}
            />
        </>
    )
}

export default SelectAccountitems;