import React from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { fs, hs, vs } from '../../utils/stylesUtils'
import Container from '../../components/container'
import Label from '../../components/Label'
import ProductDetailModalitems from '../../components/Flatlistitems/ProductDetailModalitems.js/ProductDetailModalitems'

const ProductdetailModal = ({ modalizeRef, onClose }) => {
    return (
        <Modalize ref={modalizeRef}
            adjustToContentHeight={true}
            withHandle={false}
            handlePosition="inside"
            modalStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                paddingBottom: vs(10)
            }}
            panGestureEnabled={true}
            closeOnOverlayTap={true}
            HeaderComponent={()=> {
                return(
                    <Container>
                        <Container containerStyle={styles.container}>
                            <Label style={styles.header}>Add offer discount</Label>
                            <Pressable onPress={() => onClose()}>
                                <Image
                                    source={{
                                        uri: "https://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Cancel-icon.png"
                                    }}
                                    style={styles.cancel_img}
                                />
                            </Pressable>
                        </Container>
                        <Container containerStyle={styles.border_styles} />
                    </Container>
                )
            }}
        >
            <ProductDetailModalitems />
        </Modalize>
    )
}
export default ProductdetailModal;

const styles = StyleSheet.create({
    container: {
        marginTop: vs(20),
        marginHorizontal: hs(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header: {
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold'
    },
    cancel_img: {
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain',
        tintColor: '#000'
    },
    border_styles: {
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: '#f2f2f2'
    },
})