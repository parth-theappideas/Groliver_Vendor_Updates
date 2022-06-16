import React, { useState, useEffect } from "react";
import { ToastAndroid, StatusBar } from 'react-native'
import Productdetailitems from "../../../components/Flatlistitems/ProductDetailitems/Productdetailitems";
import Btn from "../../../components/Btn";
import Container from "../../../components/container";
import styles from "./Styles";
import { productDetailsApi } from "../../../utils/apigetService";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { removeProduct } from "../../../utils/apiServices";
import { api_token } from '../../../utils/Globals'

const ProductDetail = ({ navigation, route }) => {

    const [Loading, setLoading] = useState(false);
    const [productDetails, setProductDetails] = useState({});
    const [image, setImage] = useState({});

    console.log("token of ProductDetails =====>", api_token);

    const myProductDetails = async () => {
        setLoading(true);
        try {
            let response = await productDetailsApi({ id: route.params.prod_id })
            console.log("response", response);
            setLoading(false);
            if (response.status === "Success") {
                console.log("response of product details", response);
                setProductDetails(response.data[0]);
                let obj = {}
                obj.image = response.data[0].product_image[0].image;
                setImage(obj);
            }
        } catch (error) {
            console.log("errors", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        myProductDetails();
    }, [])

    useEffect(() => {
        if (route.params?.fromEditProduct) {
            myProductDetails();
        }
    }, [route.params]);

    console.log("prod", productDetails);

    const removeProductList = async () => {
        setLoading(true);
        var formData = new FormData();
        formData.append("product_id", route.params.prod_id);

        try {
            let result = await removeProduct({ data: formData })
            console.log("result", result);
            setLoading(false);

            if (result.status === 'Success') {
                navigation.navigate("Myproducts", {
                    fromRemoveProdDetails: true
                })
                ToastAndroid.show("Remove Successfully", ToastAndroid.SHORT);
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.log("errors", error);
            setLoading(false);
        }
    }

    return (
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Productdetailitems
                item={productDetails}
                imageData={image}
            />
            <Container containerStyle={styles.container6}>
                <Btn
                    title="Delete"
                    btnStyle={styles.del_btn}
                    btnHeight={50}
                    textColor={'red'}
                    textSize={14}
                    onPress={() => removeProductList()}
                />
                <Btn
                    title="Edit"
                    btnStyle={styles.edit_btn}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                    onPress={() => navigation.navigate("EditProduct", { ...productDetails, image, prod_id: route.params.prod_id })}
                />
            </Container>
            {Loading ? <LoadingIndicator /> : null}
        </Container>
    )
}

export default ProductDetail;