import React, { useState } from 'react'
import { Image } from 'react-native'
import { vs } from '../../../utils/stylesUtils';
import Btn from '../../Btn';
import Container from '../../container';
import Label from '../../Label';
import styles from './styles';

const ProductDetailModalitems = () => {

    const discountData = [
        {
            id: 1,
            value: '5%',
            unselect: require('../../../assets/images/unselect.png'),
            select: require('../../../assets/images/select.png'),
        },
        {
            id: 2,
            value: '10%',
            unselect: require('../../../assets/images/unselect.png'),
            select: require('../../../assets/images/select.png'),
        },
        {
            id: 3,
            value: '15%',
            unselect: require('../../../assets/images/unselect.png'),
            select: require('../../../assets/images/select.png')
        },
    ];

    const [select, setSelect] = useState(null);

    return (
        <>
            {
                discountData.map((item, index) => {
                    console.log("items =>", item);
                    console.log("index =>", index);
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
                })
            }
            <Btn
                title="Add"
                btnStyle={{
                    backgroundColor: '#009345',
                    borderRadius: 5,
                    justifyContent: 'center',
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: vs(22),
                    bottom: vs(5)
                }}
                btnHeight={50}
                textColor={'white'}
                textSize={14}
            />
        </>
    )
}

export default ProductDetailModalitems;