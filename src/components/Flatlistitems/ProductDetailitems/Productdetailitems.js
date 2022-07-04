import React, { useState, useEffect } from "react";
import { Image, ScrollView, View, FlatList } from 'react-native';
import { hs, vs } from "../../../utils/stylesUtils";
import Container from "../../container";
import Label from "../../Label";
import styles from "./Styles";

const Productdetailitems = ( { item, image } ) => {

    console.log( "imageHandler", image );
    console.log( "item", item.product_image );

    const handler = () => {
        const imageData = image.map( ( item ) => item.image );
    };

    return (
        <ScrollView contentContainerStyle={ {
            paddingBottom: vs( 20 )
        } }>
            <Container containerStyle={ styles.container }>
                <Container containerStyle={ styles.container3 }>
                    <FlatList
                        keyExtractor={ ( item ) => item.id }
                        data={ image }
                        numColumns={ 3 }
                        renderItem={ ( { item } ) => {
                            console.log( "items of product of details", item );
                            return (
                                <View style={{
                                    marginHorizontal:hs(3.5)
                                }}>
                                    <Image
                                        source={ { uri: item.image } }
                                        style={ styles.itemimg }
                                    />
                                </View>
                            );
                        } }
                    />
                </Container>
                <Container containerStyle={ styles.container2 }>
                    <Label style={ styles.label1 }>{ item?.name }</Label>
                </Container>

                <Container containerStyle={ styles.container3 }>
                    <Label style={ styles.label2 }>Category name : </Label>
                    <Label style={ styles.label3 }>{ item.category?.name }</Label>
                </Container>

                <Container containerStyle={ styles.container3 }>
                    <Label style={ styles.label2 }>Sub-Category name : </Label>
                    <Label style={ styles.label3 }>{ item.sub_category?.name }</Label>
                </Container>

                <Container containerStyle={ styles.container4 }>
                    <Label style={ styles.label4 }>Weight : </Label>
                    <Label style={ styles.label5 }>{ item.weight }</Label>
                    <Label style={ styles.label5 }> { item.unit }</Label>
                </Container>

                <Container containerStyle={ styles.container5 }>
                    <Label style={ styles.label6 }>Price : </Label>
                    <Label style={ styles.label7 }>${ item.price }</Label>
                </Container>

                <Container containerStyle={ styles.container5 }>
                    <Label style={ styles.label6 }>Offer discount : </Label>
                    <Label style={ styles.label7 }>{ item.discount }%</Label>
                </Container>

                <Container containerStyle={ styles.container5 }>
                    <Label style={ styles.label6 }>Stock : </Label>
                    <Label style={ styles.label7 }>{ item.stock }</Label>
                </Container>

                <Container containerStyle={ styles.container7 }>
                    <Label style={ styles.label8 }>Product description</Label>
                    <Label style={ styles.label9 }>{ item.description }</Label>
                </Container>
            </Container>
        </ScrollView>
    );
};

export default Productdetailitems;


