import React, { useState } from "react";
import { Image, ToastAndroid, View, Pressable, Alert } from 'react-native';
import Container from "../../container";
import Label from "../../Label";
import styles from "./Styles";
import { useNavigation } from '@react-navigation/native';
import { removeProduct } from "../../../utils/apiServices";
import LoadingIndicator from "../../LoadingIndicator";
import { api_token } from "../../../utils/Globals";
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import Images from "../../../const/Images";

const Productsitems = ( { item } ) => {
    const navigation = useNavigation();

    const [ Loading, setLoading ] = useState( false );

    console.log( "items", item );

    console.log( "token from product items", api_token );

    const removeProductList = async () => {
        setLoading( true );
        var formData = new FormData();
        formData.append( "product_id", item.id );

        try {
            let result = await removeProduct( { data: formData } );
            console.log( "result", result );
            setLoading( false );

            if ( result.status === 'Success' ) {
                navigation.navigate( "Myproducts", {
                    fromRemoveProductList: true
                } );
                ToastAndroid.show( "Remove Successfully", ToastAndroid.SHORT );
            } else {
                alert( result.message );
            }
        } catch ( error ) {
            console.log( "errors", error );
            setLoading( false );
        }
    };

    const productDetails = async () => {
        navigation.navigate( "ProductDetail", {
            prod_id: item.id,
        } );
    };

    return (
        <>
            <Container containerStyle={ styles.container }>
                <Pressable onPress={ productDetails }>
                    <Image
                        source={ { uri: item.product_image[0].image } }
                        style={ styles.itemimg }
                    />
                </Pressable>

                <Container containerStyle={ styles.container2 }>
                    <Container onPress={ productDetails }>
                        <Label style={ styles.label }>{ item.name }</Label>
                        <Label style={ styles.label2 }>{ item.weight } { item.unit }</Label>
                    </Container>
                    <Label style={ styles.label3 } onPress={ () => removeProductList() }>Remove</Label>
                </Container>

                <Label style={ styles.label4 }>${ item.price }</Label>
            </Container>
            <View style={ {
                paddingTop: vs( 5 ),
            } }>
                <Container containerStyle={ styles.borderStyle } />
            </View>
            { Loading ? <LoadingIndicator /> : null }
        </>
    );
};

export default Productsitems;
