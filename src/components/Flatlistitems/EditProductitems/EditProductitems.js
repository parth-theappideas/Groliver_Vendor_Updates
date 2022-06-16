import React, { useState, useEffect } from 'react'
import { Image, FlatList, Pressable, ToastAndroid } from 'react-native'
import Images from '../../../const/Images'
import { removeImageApi } from '../../../utils/apiServices'
import { vs } from '../../../utils/stylesUtils'
import Container from '../../container'
import styles from './styles'

const EditProductitems = ({ modalVisible, setModalVisible, picture, productDetails, image }) => {

    // const EditProductData = [
    //     {
    //         id: 1,
    //         add_img: require('../../../assets/images/plus.png'),
    //         del_img: require('../../../assets/images/delete2.png')
    //     }
    // ]

    // // const [Data, setData] = useState(EditProductData);

    // const handleRemove = () => {
    //     setData((prev) => prev.splice(1));
    // }

    // async function removeImage() {
    //     var formData = new FormData();
    //     formData.append("image_id");

    //     let response = await removeImageApi({ data: formData })
    //     console.log("Image response => ", response);

    //     if (response.status === 'Success') {
    //         ToastAndroid.show("Image remove Successfully", ToastAndroid.SHORT);
    //     } else {
    //         alert(response.message);
    //     }
    // }

    // return (
    //     <>
    //         {EditProductData.map((item, index) => {
    //             return (
    //                 <Container onPress={() => setModalVisible(!modalVisible)} key={index}>
    //                     <Container containerStyle={styles.Imgcontainer}>
    //                         <Image
    //                             source={picture ? { uri: picture } : { uri: imageData.image }}
    //                             style={picture ? styles.Clickimg : styles.add_img}
    //                         />

    //                         {imageData.image ?
    //                             <Pressable style={styles.pressableBtn} onPress={() => handleRemove()}>
    //                                 <Image
    //                                     source={item.del_img}
    //                                     style={styles.del_img}
    //                                 />
    //                             </Pressable>
    //                             : null}
    //                     </Container>
    //                 </Container>
    //             )
    //         })}
    //     </>
    // )

    return(
        <Container>
            <Container containerStyle={{ marginTop: vs(10) }} onPress={() => setModalVisible(!modalVisible)}>
                <Container containerStyle={styles.Imgcontainer}>
                    <Image
                        source={{ uri: picture || 'dummy' }}
                        style={picture ? styles.Clickimg : styles.add_img}
                    />
                    {image.image ?
                        <Pressable style={styles.pressableBtn}>
                            <Image
                                source={Images.del2}
                                style={styles.del_img}
                            />
                        </Pressable>
                        : null}
                </Container>
            </Container>
        </Container>
    )
}

export default EditProductitems;

