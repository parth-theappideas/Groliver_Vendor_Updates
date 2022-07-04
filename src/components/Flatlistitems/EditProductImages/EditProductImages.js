import React from 'react';
import { Image, Pressable, FlatList } from 'react-native';
import Images from '../../../const/Images';
import { hs, vs } from '../../../utils/stylesUtils';
import Container from '../../container';
import styles from './Styles';

const EditProductImages = ( { openModal, image } ) => {

    console.log( image );

    return (
        <FlatList
            data={ image }
            keyExtractor={ ( item ) => item.id }
            numColumns={ 3 }
            renderItem={ ( { item } ) => {
                return (
                    <Container containerStyle={ styles.Imgcontainer }>
                        <Container onPress={ openModal }>
                            <Image
                                source={ item.isEditImage ? item.image : { uri: item.image } }
                                style={ item.isEditImage ? styles.Clickimg : styles.add_img }
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

export default EditProductImages;


