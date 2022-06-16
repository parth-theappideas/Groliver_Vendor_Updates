import React, { useState } from 'react'
import { Image } from 'react-native'
import { screenWidth, vs } from '../../../utils/stylesUtils';
import Btn from '../../Btn';
import Container from '../../container';
import Label from '../../Label';
import styles from './styles';

const OrderDetailModalitems = () => {

    const OrderData = [
        {
            id: 1,
            value: 'Processing',
            unselect: require('../../../assets/images/unselect.png'),
            select: require('../../../assets/images/select.png'),
        },
        {
            id: 2,
            value: 'On the way',
            unselect: require('../../../assets/images/unselect.png'),
            select: require('../../../assets/images/select.png'),
        },
        {
            id: 3,
            value: 'Completed',
            unselect: require('../../../assets/images/unselect.png'),
            select: require('../../../assets/images/select.png'),
        },
    ]

    const [select, setSelect] = useState(null);

    return (
        <>
            {
                OrderData.map((item, index) => {
                    return (
                        <Container containerStyle={styles.container2} key={index}>
                            <Container onPress={() => setSelect(item.id)}>
                                <Container containerStyle={styles.container3}>
                                    <Container containerStyle={styles.container4}>
                                        {item.id === select ?
                                            <Image
                                                source={item.select}
                                                style={styles.img}
                                            />
                                            :
                                            <Image
                                                source={item.unselect}
                                                style={styles.img}
                                            />
                                        }
                                        <Label style={styles.label}>{item.value}</Label>
                                    </Container>
                                </Container>
                            </Container>
                        </Container>
                    )
                })}

            <Btn
                title="Apply"
                btnStyle={styles.apply_btn}
                btnHeight={50}
                textColor={'white'}
                textSize={14}
            />
        </>
    )
}

export default OrderDetailModalitems;