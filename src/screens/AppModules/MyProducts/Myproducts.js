import React, { useEffect, useState } from "react";
import { Image, FlatList, StatusBar, Text } from 'react-native'
import Productsitems from "../../../components/Flatlistitems/Productsitems/Productsitems";
import InputBox from '../../../components/InputBox'
import Images from "../../../const/Images";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import Container from "../../../components/container";
import styles from "./Styles";
import Addnewitems from "./Addnewitems";
import { myProductApi } from "../../../utils/apigetService";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { api_token } from '../../../utils/Globals'
import Label from "../../../components/Label";

const Myproducts = ({ route, navigation }) => {
    const [productList, setProductList] = useState([]);
    const [Loading, setLoading] = useState(false);

    console.log("Api token =====>", api_token);

    const getProductList = async () => {
        setLoading(true);
        try {
            let response = await myProductApi({})
            console.log('response --> *', response.data);
            setLoading(false);
            if (response.status === 'Success') {
                setProductList(response.data);
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.log('error', error)
            setLoading(false);
        }
        console.log("ProductList", productList);
    }

    useEffect(() => {
        getProductList();
    }, []);

    useEffect(() => {
        if (route.params?.fromAddProduct) {
            getProductList();
        } else if (route.params?.fromRemoveProductList) {
            getProductList();
        } else if (route.params?.fromRemoveProdDetails) {
            getProductList();
        } else if (route.params?.fromEditProduct) {
            getProductList();
        } else {

        }
    }, [route.params]);

    const renderProductitems = ({ item }) => {
        return (
            <Productsitems
                item={item}
            />
        )
    }

    return (
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.search_input}>
                <Container
                    onPress={() => navigation.navigate("SearchComponent")}
                    leftIcon={() => <Image source={Images.search_2} style={styles.search_img} />}
                    leftLabel={() =>
                        <Label style={{
                            position: 'absolute',
                            left: hs(40),
                            fontSize: fs(13),
                            top: vs(14),
                            color: 'grey'
                        }}>Search</Label>}
                />
            </Container>
            <FlatList
                data={productList}
                renderItem={renderProductitems}
                scrollEnabled={true}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                    paddingBottom: vs(5)
                }}
            />
            <Addnewitems />
            {Loading ? <LoadingIndicator /> : null}
        </Container>
    )
}

export default Myproducts;