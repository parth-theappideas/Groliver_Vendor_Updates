import React from 'react';
import { Image, View, FlatList } from 'react-native';
import { hs, vs } from '../../../utils/stylesUtils';
import Container from '../../container';
import styles from './styles';

const AddnewProductitems = ( { openModal, modalVisible, setModalVisible, picture, image } ) => {

    console.log( image );
    return (
        <FlatList
            data={ image }
            keyExtractor={ ( item ) => item.id }
            numColumns={ 3 }
            renderItem={ ( { item } ) => {
                return (
                    <Container onPress={ openModal }>
                        <Container containerStyle={ {
                            borderWidth: 1,
                            borderColor: '#f2f2f2',
                            width: hs( 100 ),
                            height: vs( 110 ),
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginHorizontal: hs( 4 ),
                            marginVertical: vs( 4 )
                        } }>
                            <Image
                                source={ item.isAddImage ? item.image : { uri: item.image } }
                                style={ item.isAddImage ? styles.add_img : styles.Clickimg }
                            />
                        </Container>
                    </Container>
                );
            } }
        />
    );
};

export default AddnewProductitems;


