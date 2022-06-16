import React, { useState, useEffect, useRef } from "react";
import { ScrollView, StatusBar, ToastAndroid, Image, Pressable } from 'react-native'
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import { Picker } from '@react-native-picker/picker'
import Btn from "../../../components/Btn";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import styles from "./Styles";
import { Formik } from "formik";
import * as yup from 'yup'
import EditProductModal from "../../../modals/EditProductModal/EditProductModal";
import { catApi, subCatApi } from "../../../utils/apigetService";
import { editproductApi } from "../../../utils/apiServices";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { api_token } from "../../../utils/Globals";
import EditProductitems from "../../../components/Flatlistitems/EditProductitems/EditProductitems";
import PagerView from "react-native-pager-view";
import Images from "../../../const/Images";

const WeightValues = [
    {
        id: 1,
        wt_name: 'piece'
    },
    {
        id: 2,
        wt_name: 'kg'
    },
    {
        id: 3,
        wt_name: 'gm'
    },
    {
        id: 4,
        wt_name: 'ml'
    },
    {
        id: 5,
        wt_name: 'litre'
    }
];

const categoryValues = [
    {
        id: 1,
        category_name: 'Grocery'
    },
    {
        id: 2,
        category_name: 'Fashion'
    },
    {
        id: 3,
        category_name: 'Random'
    },
    {
        id: 4,
        category_name: 'Spices'
    },
    {
        id: 6,
        category_name: 'Dry Fruits'
    },
    {
        id: 7,
        category_name: 'Fruits & Vegetables'
    }
];

const EditProduct = ({ navigation, route }) => {
    const viewPagerRef = useRef(null);
    const { ...productDetails } = route.params;
    const { image } = route.params;

    console.log("token from edit product", api_token);
    console.log("product detais", productDetails);

    const [modalVisible, setModalVisible] = useState(false);
    const [picture, setPicture] = useState('');
    const [catData, setCatData] = useState(productDetails.category.name);
    const [subCatData, setSubCatData] = useState({});
    const [catList, setCatList] = useState([]);
    const [subCatList, setSubCatList] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [pagePosition, setPagePosition] = useState(0);
    const [weightData, setWeightData] = useState(productDetails.unit);

    console.log("select", productDetails.category.name);

    useEffect(() => {
        setPicture(image?.image || '');
    }, []);

    const EditProductSchema = yup.object({
        title: yup
            .string(),
        category: yup
            .string(),
        subCategory: yup
            .string(),
        description: yup
            .string(),
        price: yup
            .number(),
        weight: yup
            .number(),
        discount: yup
            .number()
            .max(1000, "Not Valid Number !"),
        stock: yup
            .number(),
    })

    async function EditProductHandler(values) {
        console.log(values);
        setLoading(true);

        var formData = new FormData();
        let file_name = picture?.substring(picture?.lastIndexOf('/') + 1);

        if (productDetails?.name != values.title) {
            formData.append("name", values.title);
        }
        if (productDetails?.price != values.price) {
            formData.append("price", values.price);
        }
        if (productDetails?.stock != values.stock) {
            formData.append("stock", values.stock);
        }
        if (productDetails?.weight != values.weight) {
            formData.append("weight", values.weight);
        }
        if (productDetails?.discount != values.discount) {
            formData.append("discount", values.discount);
        }
        if (productDetails?.description != values.description) {
            formData.append("description", values.description);
        }
        if (values.discount) {
            formData.append("offer_flag", "y");
        } else if (!values.discount) {
            formData.append("offer_flag", "");
        } else {
            console.log("Somthing Wrong");
        }
        if (image?.image != picture) {
            formData.append("image", {
                uri: picture,
                name: file_name,
                type: 'image/jpg'
            });
        }
        formData.append("cat_id", catData.id);
        formData.append("sub_cat_id", subCatData.id);
        formData.append("flag", "V");
        formData.append("unit", weightData);
        formData.append("product_id", route.params.prod_id);
        console.log("formdatas=>", formData);

        try {
            let response = await editproductApi({ data: formData })
            console.log("Edit response=>", response);
            setLoading(false);
            if (response.status === "Success") {
                console.log("response of edit product", response);
                navigation.navigate("Myproducts", {
                    fromEditProduct: true
                });
                ToastAndroid.show("Edit Successfully", ToastAndroid.SHORT);
            } else {
                console.log(response.message);
            }
        } catch (error) {
            console.log("errors", error);
            alert("Something Missing");
            setLoading(false);
        }
    }

    console.log("product_id", route.params.prod_id);
    console.log("units", productDetails.unit);

    async function categotyList() {
        let result = await catApi({ method: 'get' })
        console.log("Category result", result.data);
        if (result?.data) {
            setCatList(result.data);
        }
    }

    async function subCategotyList() {
        let result = await subCatApi({ method: 'get' })
        console.log("SubCategory result", result.data);
        if (result?.data) {
            setSubCatList(result.data);
        }
    }

    useEffect(() => {
        categotyList();
        subCategotyList();
    }, []);

    return (
        <ScrollView style={{
            backgroundColor: 'white'
        }} contentContainerStyle={{
            paddingBottom: vs(50)
        }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.container}>
                <PagerView
                    initialPage={pagePosition}
                    onPageSelected={(e) => {
                        setPagePosition(e.nativeEvent.position)
                    }}
                    ref={viewPagerRef}
                >
                    <EditProductitems
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        picture={picture}
                        setPicture={setPicture}
                        image={image}
                    />
                </PagerView>

                {/* <Container containerStyle={{ marginTop: vs(10) }} onPress={() => setModalVisible(!modalVisible)}>
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
                </Container> */}

                <Formik
                    initialValues={{
                        title: `${productDetails.name}`,
                        category: `${productDetails.category}`,
                        subCategory: `${productDetails.subCategory}`,
                        description: `${productDetails.description}`,
                        price: `${productDetails.price.toString()}`,
                        weight: `${productDetails.weight}`,
                        discount: `${productDetails.discount.toString()}`,
                        stock: `${productDetails.stock.toString()}`,
                    }}
                    validationSchema={EditProductSchema}
                    onSubmit={EditProductHandler}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <>
                            <Container containerStyle={styles.container2}>
                                <Label style={styles.label}>Category</Label>
                                <Container containerStyle={styles.container3}>
                                    <Picker
                                        style={styles.picker_style}
                                        selectedValue={catData}
                                        onValueChange={(itemValue) => setCatData(itemValue)}
                                    >
                                        {
                                            catList.map((item, index) => {
                                                return (
                                                    <Picker.Item
                                                        label={item.name}
                                                        key={index}
                                                        style={styles.picker_item}
                                                        value={item}
                                                    />
                                                )
                                            })
                                        }
                                    </Picker>
                                </Container>

                                <Label style={[styles.label, styles.extraLabel]}>Sub-categories</Label>
                                <Container containerStyle={styles.container3}>
                                    <Picker
                                        style={styles.picker_style}
                                        selectedValue={subCatData}
                                        onValueChange={(itemValue) => setSubCatData(itemValue)}
                                    >
                                        {
                                            subCatList.map((item, index) => {
                                                return (
                                                    <Picker.Item
                                                        label={item.name}
                                                        key={index}
                                                        style={styles.picker_item}
                                                        value={item}
                                                    />
                                                )
                                            })
                                        }
                                    </Picker>
                                </Container>
                            </Container>

                            <Container containerStyle={styles.container2}>
                                <Label style={styles.label}>Title</Label>
                                <InputBox
                                    placeholder="Select"
                                    inputStyle={{
                                        maxWidth: '75%'
                                    }}
                                    containerStyle={styles.title_input}
                                    onChangeText={handleChange('title')}
                                    onBlur={handleBlur('title')}
                                    value={values.title}
                                    inputHeight={50}
                                    textSize={14}
                                />
                            </Container>

                            <Container containerStyle={styles.container2}>
                                <Label style={styles.label}>Description</Label>
                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={{
                                        maxWidth: "90%",
                                    }}
                                    placeholderStyle={{
                                        position: 'absolute',
                                        top: 0,
                                    }}
                                    containerStyle={styles.description_input}
                                    onChangeText={handleChange('description')}
                                    onBlur={handleBlur('description')}
                                    value={values.description}
                                    inputHeight={80}
                                    textSize={14}
                                />
                            </Container>

                            <Container containerStyle={styles.container4}>
                                <Label style={styles.label4}>Price</Label>
                                <Label style={styles.label5}>Weight</Label>
                            </Container>

                            <Container containerStyle={styles.container5}>
                                <InputBox
                                    placeholder="Price"
                                    inputStyle={{
                                        maxWidth: '75%',
                                    }}
                                    keyboardType="numeric"
                                    containerStyle={styles.price_input}
                                    onChangeText={handleChange('price')}
                                    onBlur={handleBlur('price')}
                                    value={values.price}
                                    inputHeight={50}
                                    textSize={14}
                                />
                                <InputBox
                                    placeholder="Weight"
                                    inputStyle={{
                                        maxWidth: '75%',
                                    }}
                                    keyboardType="numeric"
                                    containerStyle={styles.weight_input}
                                    onChangeText={handleChange('weight')}
                                    onBlur={handleBlur('weight')}
                                    value={values.weight}
                                    inputHeight={50}
                                    textSize={14}
                                />
                                <Container containerStyle={styles.container6}>
                                    <Picker
                                        style={styles.picker_wt}
                                        selectedValue={weightData}
                                        onValueChange={(itemValue) => setWeightData(itemValue)}
                                    >
                                        {WeightValues.map((item, index) => {
                                            return (
                                                <Picker.Item
                                                    label={item.wt_name}
                                                    style={styles.picker_item}
                                                    value={item.wt_name}
                                                    key={index} />
                                            )
                                        })}
                                    </Picker>
                                </Container>
                            </Container>

                            <Container containerStyle={styles.container7}>
                                <Label style={styles.label2}>Discount</Label>
                                <Label style={styles.label3}>Stock</Label>
                            </Container>

                            <Container containerStyle={styles.container8}>
                                <InputBox
                                    placeholder="Discount"
                                    inputStyle={{
                                        maxWidth: '75%'
                                    }}
                                    keyboardType="numeric"
                                    containerStyle={styles.discount_input}
                                    onChangeText={handleChange('discount')}
                                    onBlur={handleBlur('discount')}
                                    value={values.discount}
                                    inputHeight={50}
                                    textSize={14}
                                />
                                <InputBox
                                    placeholder="Stock"
                                    inputStyle={{
                                        maxWidth: '75%'
                                    }}
                                    keyboardType="numeric"
                                    containerStyle={styles.stock_input}
                                    onChangeText={handleChange('stock')}
                                    onBlur={handleBlur('stock')}
                                    value={values.stock}
                                    inputHeight={50}
                                    textSize={14}
                                />
                            </Container>
                            <Btn
                                title="Save"
                                btnStyle={styles.save_btn}
                                btnHeight={50}
                                textColor={'white'}
                                textSize={14}
                                onPress={handleSubmit}
                            />
                        </>
                    )}
                </Formik>
            </Container>
            <EditProductModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setPicture={setPicture}
            />
            {Loading ? <LoadingIndicator /> : null}
        </ScrollView>
    )
}

export default EditProduct;