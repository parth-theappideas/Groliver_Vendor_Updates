import React from 'react';
import { Image, View, FlatList } from 'react-native';
import Container from '../../container';
import styles from './styles';

const AddnewProductitems = ( { modalVisible, setModalVisible, picture } ) => {

    const AddProductData = [
        {
            id: 1,
            add_img: require( '../../../assets/images/plus.png' ),
        },
        {
            id: 2,
            add_img: require( '../../../assets/images/plus.png' ),
        },
        {
            id: 3,
            add_img: require( '../../../assets/images/plus.png' ),
        },
        {
            id: 4,
            add_img: require( '../../../assets/images/plus.png' ),
        },
        {
            id: 5,
            add_img: require( '../../../assets/images/plus.png' ),
        },
    ];

    return (
        <>
            {/* { AddProductData.map( ( item, index ) => {
                return (
                    <Container key={index}>
                        <Container onPress={ () => setModalVisible( !modalVisible ) }>
                            <Container containerStyle={ styles.container }>
                                <Container containerStyle={ styles.container2 }>
                                    <Image
                                        source={ picture ? { uri: picture || 'dummy' } : item.add_img}
                                        style={ picture ? styles.Clickimg : styles.add_img }
                                    />
                                </Container>
                            </Container>
                        </Container>
                     </Container>
                );
            } ) } */}

            <FlatList
                keyExtractor={ ( item ) => item.id }
                data={ AddProductData }
                numColumns={ 3 }
                renderItem={ ( { item } ) => (
                    <Container onPress={ () => setModalVisible( !modalVisible ) }>
                        <Container containerStyle={ styles.container }>
                            <Container containerStyle={ styles.container2 }>
                                <Image
                                    source={ picture ? { uri: picture || 'dummy' } : item.add_img }
                                    style={ picture ? styles.Clickimg : styles.add_img }
                                />
                            </Container>
                        </Container>
                    </Container>
                ) }
            />

        </>
    );
};

export default AddnewProductitems;


