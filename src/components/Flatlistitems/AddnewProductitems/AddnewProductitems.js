import React from 'react'
import { Image, View } from 'react-native'
import Container from '../../container'
import styles from './styles'

const AddnewProductitems = ({ modalVisible, setModalVisible, picture }) => {

    const AddProductData = [
        {
            id: 1,
            add_img: require('../../../assets/images/plus.png'),
        },
    ]

    return (
        <>
            {AddProductData.map((item, index) => {
                return (
                    <Container Container onPress={() => setModalVisible(!modalVisible)} key={index}>
                        <Container containerStyle={styles.container}>
                            <Container containerStyle={styles.container2}>
                                <Image
                                    source={picture ? { uri: picture || 'dummy' } : item.add_img}
                                    style={picture ? styles.Clickimg : styles.add_img}
                                />
                            </Container>
                        </Container>
                    </Container>
                )
            })}
        </>
    )
}

export default AddnewProductitems;


// stages 
// 1 blank image 
// 2 image upload 
// 3 blank image change position 
// 4 repeat

