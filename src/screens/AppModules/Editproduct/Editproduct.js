import React, { useState, useEffect, useRef } from "react";
import { ScrollView, StatusBar, ToastAndroid, Image, Pressable, View } from 'react-native';
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import { Picker } from '@react-native-picker/picker';
import Btn from "../../../components/Btn";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import styles from "./Styles";
import { Formik } from "formik";
import * as yup from 'yup';
import EditProductModal from "../../../modals/EditProductModal/EditProductModal";
import { catApi, subCatApi } from "../../../utils/apigetService";
import { editproductApi } from "../../../utils/apiServices";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { api_token } from "../../../utils/Globals";
import EditProductitems from "../../../components/Flatlistitems/EditProductitems/EditProductitems";
import PagerView from "react-native-pager-view";
import Images from "../../../const/Images";
import ModalLoadingIndicator from "../../../components/ModalLoadingIndicator";
import AddnewProductitems from "../../../components/Flatlistitems/AddnewProductitems/AddnewProductitems";
import EditProductImages from "../../../components/Flatlistitems/EditProductImages/EditProductImages";

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

let users = [
    { firstName: "Susan", age: 14 },
    { firstName: "Daniel", age: 16 },
    { firstName: "Bruno", age: 56 },
    { firstName: "Jacob", age: 15 },
    { firstName: "Sam", age: 64 },
    { firstName: "Dave", age: 56 },
    { firstName: "Neils", age: 65 }
  ];

const EditProduct = ( { navigation, route } ) => {
    const { ...productDetails } = route.params;
    const { imageRendering } = route.params;

    console.log( "token from edit product", api_token );
    console.log( "product detais", productDetails );

    const [ modalVisible, setModalVisible ] = useState( false );
    const [ picture, setPicture ] = useState( '' );
    const [ catData, setCatData ] = useState( {} );
    const [ subCatData, setSubCatData ] = useState( {} );
    const [ catList, setCatList ] = useState( [] );
    const [ subCatList, setSubCatList ] = useState( [] );
    const [ Loading, setLoading ] = useState( false );
    const [ weightData, setWeightData ] = useState( productDetails.unit );
    const [ editImage, setEditImage ] = useState( [
        {
            id: 1,
            isEditImage: true,
            image: require( '../../../assets/images/plus.png' ),
        }
    ] );

    console.log( "selec", productDetails );

    const youngPeople = users.filter((person)=>{
        return person.age <= 15;
    })

    const srPeople = users.filter((person) => {
        return person.age >= 50;
    })

    console.log("youngpeople",youngPeople);
    console.log("srPeople",srPeople);

    const Bruno = users.find((person) => person.firstName == "Bruno");
    console.log("Bruno",Bruno);

    useEffect( () => {
        setPicture( imageRendering?.image || '' );
    }, [] );

    console.log( "sub", productDetails.sub_category.name );

    const EditProductSchema = yup.object( {
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
            .max( 100, "Not Valid Number !" ),
        stock: yup
            .number(),
    } );

    async function EditProductHandler ( values ) {
        console.log( values );
        setLoading( true );

        var formData = new FormData();
        let file_name = picture?.substring( picture?.lastIndexOf( '/' ) + 1 );

        if ( productDetails?.name != values.title ) {
            formData.append( "name", values.title );
        }
        if ( productDetails?.price != values.price ) {
            formData.append( "price", values.price );
        }
        if ( productDetails?.stock != values.stock ) {
            formData.append( "stock", values.stock );
        }
        if ( productDetails?.weight != values.weight ) {
            formData.append( "weight", values.weight );
        }
        if ( productDetails?.discount != values.discount ) {
            formData.append( "discount", values.discount );
        }
        if ( productDetails?.description != values.description ) {
            formData.append( "description", values.description );
        }
        if ( values.discount ) {
            formData.append( "offer_flag", "y" );
        } else if ( !values.discount ) {
            formData.append( "offer_flag", "" );
        } else {
            console.log( "Somthing Wrong" );
        }
       
        if ( imageRendering?.image != picture ) {
            formData.append( "image[]", {
                uri: picture,
                name: file_name,
                type: 'image/jpg'
            } );
        }else {
            editImage.map((item)=> {
                if(!item.isEditImage){
                    let file_name = item.image?.substring( item.image?.lastIndexOf( '/' ) + 1 );
                    return formData.append("image[]",
                    {
                        uri: item.image,
                        name: file_name,
                        type: 'image/jpg'
                    })
                } else{
                    console.log("Something");
                }
            })
        }

        formData.append( "cat_id", catData.id );
        formData.append( "sub_cat_id", subCatData.id );
        formData.append( "flag", "V" );
        formData.append( "unit", weightData );
        formData.append( "product_id", route.params.prod_id );
        console.log( "formdatas of edit product=>", formData );

        try {
            let response = await editproductApi( { data: formData } );
            console.log( "Edit response=>", response );
            setLoading( false );
            if ( response.status === "Success" ) {
                console.log( "response of edit product", response );
                navigation.navigate( "Myproducts", {
                    fromEditProduct: true
                } );
                ToastAndroid.show( "Edit Successfully", ToastAndroid.SHORT );
            } else {
                console.log( response.message );
            }
        } catch ( error ) {
            console.log( "errors", error );
            setLoading( false );
        }
    }

    console.log( "product_id", route.params.prod_id );
    console.log( "units", productDetails.unit );

    useEffect( () => {
        categotyList();
    }, [] );

    async function categotyList () {
        let result = await catApi( {} );
        console.log( "Category result", result.data );
        if ( result?.data ) {
            setCatList( result.data );
            const categoryData = result?.data?.find( ( item ) => item?.id == productDetails?.cat_id );
            console.log( 'categoryData', categoryData );
            if ( categoryData ) SelectCategoryHandler( categoryData );
            // setCatData( categoryData );
        }
    }

    // const selectedValueHandler = ( item ) => {
    //     console.log( "items:", item );
    //     setCatData( item );
    //     // let result = await catApi( { id: item.id } );
    //     // console.log( "results:", result );
    //     // setCatList(result.data);
    // };

    const SelectCategoryHandler = async ( itemValue ) => {
        console.log( "itemvalues", itemValue );
        setCatData( itemValue );
        let result = await subCatApi( { id: itemValue.id } );
        console.log( "response:", result );
        setSubCatList( result.data );
        const subCatData = result?.data?.find( ( item ) => item?.id == productDetails?.sub_cat_id );
        console.log( 'subCatData', subCatData );
        if ( subCatData ) setSubCatData( subCatData );

    };

    // async function subCategotyList () {
    //     let result = await subCatApi( { method: 'get' } );
    //     console.log( "SubCategory result", result.data );
    //     if ( result?.data ) {
    //         setSubCatList( result.data );
    //     }
    // }

    return (
        <ScrollView style={ {
            backgroundColor: 'white'
        } } contentContainerStyle={ {
            paddingBottom: vs( 50 )
        } }>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={ styles.container }>
                <EditProductitems
                    modalVisible={ modalVisible }
                    image={ imageRendering }
                    setModalVisible={ setModalVisible }
                    picture={ picture }
                    setPicture={ setPicture }
                />
                <EditProductImages
                    modalVisible={modalVisible}
                    image={editImage}
                    openModal={()=>{
                        setModalVisible(true);
                    }}
                />

                <Formik
                    initialValues={ {
                        title: `${ productDetails.name }`,
                        category: `${ productDetails.category }`,
                        subCategory: `${ productDetails.subCategory }`,
                        description: `${ productDetails.description }`,
                        price: `${ productDetails.price.toString() }`,
                        weight: `${ productDetails.weight }`,
                        discount: `${ productDetails.discount.toString() }`,
                        stock: `${ productDetails.stock.toString() }`,
                    } }
                    validationSchema={ EditProductSchema }
                    onSubmit={ EditProductHandler }
                >
                    { ( { handleChange, handleBlur, handleSubmit, values, errors } ) => (
                        <>
                            <Container containerStyle={ styles.container2 }>
                                <Label style={ styles.label }>Category</Label>
                                <Container containerStyle={ styles.container3 }>
                                    <Picker
                                        style={ styles.picker_style }
                                        selectedValue={ catData }
                                        onValueChange={ SelectCategoryHandler }
                                    >
                                        {
                                            catList.map( ( item, index ) => {
                                                return (
                                                    <Picker.Item
                                                        label={ item.name }
                                                        key={ index }
                                                        style={ styles.picker_item }
                                                        value={ item }
                                                    />
                                                );
                                            } )
                                        }
                                    </Picker>
                                </Container>

                                <Label style={ [ styles.label, styles.extraLabel ] }>Sub-categories</Label>
                                <Container containerStyle={ styles.container3 }>
                                    <Picker
                                        style={ styles.picker_style }
                                        selectedValue={ subCatData }
                                        onValueChange={ ( itemValue ) => setSubCatData( itemValue ) }
                                    >
                                        {
                                            subCatList.map( ( item, index ) => {
                                                return (
                                                    <Picker.Item
                                                        label={ item.name }
                                                        key={ index }
                                                        style={ styles.picker_item }
                                                        value={ item }
                                                    />
                                                );
                                            } )
                                        }
                                    </Picker>
                                </Container>
                            </Container>

                            <Container containerStyle={ styles.container2 }>
                                <Label style={ styles.label }>Title</Label>
                                <InputBox
                                    placeholder="Select"
                                    inputStyle={ {
                                        maxWidth: '75%'
                                    } }
                                    containerStyle={ styles.title_input }
                                    onChangeText={ handleChange( 'title' ) }
                                    onBlur={ handleBlur( 'title' ) }
                                    value={ values.title }
                                    inputHeight={ 50 }
                                    textSize={ 14 }
                                />
                            </Container>

                            <Container containerStyle={ styles.container2 }>
                                <Label style={ styles.label }>Description</Label>
                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={ {
                                        maxWidth: "90%",
                                    } }
                                    placeholderStyle={ {
                                        position: 'absolute',
                                        top: 0,
                                    } }
                                    containerStyle={ styles.description_input }
                                    onChangeText={ handleChange( 'description' ) }
                                    onBlur={ handleBlur( 'description' ) }
                                    value={ values.description }
                                    inputHeight={ 80 }
                                    textSize={ 14 }
                                />
                            </Container>

                            <Container containerStyle={ styles.container4 }>
                                <Label style={ styles.label4 }>Price</Label>
                                <Label style={ styles.label5 }>Weight</Label>
                            </Container>

                            <Container containerStyle={ styles.container5 }>
                                <InputBox
                                    placeholder="Price"
                                    inputStyle={ {
                                        maxWidth: '75%',
                                    } }
                                    keyboardType="numeric"
                                    containerStyle={ styles.price_input }
                                    onChangeText={ handleChange( 'price' ) }
                                    onBlur={ handleBlur( 'price' ) }
                                    value={ values.price }
                                    inputHeight={ 50 }
                                    textSize={ 14 }
                                />
                                <InputBox
                                    placeholder="Weight"
                                    inputStyle={ {
                                        maxWidth: '75%',
                                    } }
                                    keyboardType="numeric"
                                    containerStyle={ styles.weight_input }
                                    onChangeText={ handleChange( 'weight' ) }
                                    onBlur={ handleBlur( 'weight' ) }
                                    value={ values.weight }
                                    inputHeight={ 50 }
                                    textSize={ 14 }
                                />
                                <Container containerStyle={ styles.container6 }>
                                    <Picker
                                        style={ styles.picker_wt }
                                        selectedValue={ weightData }
                                        onValueChange={ ( itemValue ) => setWeightData( itemValue ) }
                                    >
                                        { WeightValues.map( ( item, index ) => {
                                            return (
                                                <Picker.Item
                                                    label={ item.wt_name }
                                                    style={ styles.picker_item }
                                                    value={ item.wt_name }
                                                    key={ index } />
                                            );
                                        } ) }
                                    </Picker>
                                </Container>
                            </Container>

                            <Container containerStyle={ styles.container7 }>
                                <Label style={ styles.label2 }>Discount</Label>
                                <Label style={ styles.label3 }>Stock</Label>
                            </Container>

                            <Container containerStyle={ styles.container8 }>
                                <InputBox
                                    placeholder="Discount"
                                    inputStyle={ {
                                        maxWidth: '75%'
                                    } }
                                    keyboardType="numeric"
                                    containerStyle={ styles.discount_input }
                                    onChangeText={ handleChange( 'discount' ) }
                                    onBlur={ handleBlur( 'discount' ) }
                                    value={ values.discount }
                                    inputHeight={ 50 }
                                    textSize={ 14 }
                                />
                                <InputBox
                                    placeholder="Stock"
                                    inputStyle={ {
                                        maxWidth: '75%'
                                    } }
                                    keyboardType="numeric"
                                    containerStyle={ styles.stock_input }
                                    onChangeText={ handleChange( 'stock' ) }
                                    onBlur={ handleBlur( 'stock' ) }
                                    value={ values.stock }
                                    inputHeight={ 50 }
                                    textSize={ 14 }
                                />
                            </Container>
                            <Btn
                                title="Save"
                                btnStyle={ styles.save_btn }
                                btnHeight={ 50 }
                                textColor={ 'white' }
                                textSize={ 14 }
                                onPress={ handleSubmit }
                            />
                        </>
                    ) }
                </Formik>
            </Container>
            <EditProductModal
                    // modalVisible={ modalVisible }
                    // setModalVisible={ setModalVisible }
                    // setPicture={ setPicture }
                    modalVisible={modalVisible}
                    setImageHandler={(imageFile)=>{
                        console.log("imagefile",imageFile);
                        setModalVisible(false);
                        let imageArray = [...editImage];
                        imageArray.unshift({ image:imageFile })
                        setEditImage(imageArray);
                    }}
                    onClose={()=> setModalVisible(false)}
                />
            { Loading ? <ModalLoadingIndicator /> : null }
        </ScrollView>
    );
};

export default EditProduct;