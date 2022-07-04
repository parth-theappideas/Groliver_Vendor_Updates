import React, { useState, useEffect } from 'react';
import { Image, FlatList, Pressable, View, ToastAndroid } from 'react-native';
import Images from '../../../const/Images';
import { removeImageApi } from '../../../utils/apiServices';
import { hs, vs } from '../../../utils/stylesUtils';
import Container from '../../container';
import AddnewProductitems from '../AddnewProductitems/AddnewProductitems';
import styles from './styles';

const EditProductitems = ( { modalVisible, setModalVisible, picture, image } ) => {

    // async function RemoveImage ( values ) {
    //     console.log( "values", values );

    //     var formData = new FormData();
    //     formData.append( "image_id", image[ 0 ].id );
    //     console.log( "formData", formData );

    //     try {
    //         let response = await removeImageApi( { data: formData } );
    //         console.log( "response of remove image", response );

    //         if ( response.status === "Success" ) {
    //             ToastAndroid.show( "Removed Image", ToastAndroid.SHORT );
    //         } else {
    //             alert( response.message );
    //         }
    //     } catch ( error ) {
    //         alert( "Something is wrong" );
    //     }
    // }

    return (
        <FlatList
            keyExtractor={ ( item ) => item.id }
            data={ image }
            numColumns={ 3 }
            renderItem={ ( { item } ) => {
                console.log( "items of edit product", item );
                return (
                    <Container containerStyle={ styles.Imgcontainer }>
                        <Container onPress={ () => setModalVisible( !modalVisible ) }>
                            <Image
                                source={ item.image ? { uri: item.image } : { uri: picture || 'dummy' } }
                                style={ picture ? styles.Clickimg : styles.add_img }
                            />
                        </Container>
                        { item.image ?
                            <Pressable style={ styles.pressableBtn } onPress={ () => RemoveImage() }>
                                <Image
                                    source={ Images.del2 }
                                    style={ styles.del_img }
                                />
                            </Pressable>
                            : null }
                    </Container>
                );
            } }
        />
    );
};

export default EditProductitems;

