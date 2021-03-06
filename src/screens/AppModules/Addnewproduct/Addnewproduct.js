import React, { useState, useEffect } from "react";
import { ScrollView, ToastAndroid, StatusBar, View } from 'react-native';
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import { Picker } from '@react-native-picker/picker';
import Btn from "../../../components/Btn";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import styles from "./Styles";
import { Formik } from "formik";
import * as yup from 'yup';
import { addnewproductApi } from "../../../utils/apiServices";
import AddnewProductModal from "../../../modals/AddnewProductModal/AddnewProductModal";
import AddnewProductitems from "../../../components/Flatlistitems/AddnewProductitems/AddnewProductitems";
import { catApi, subCatApi } from "../../../utils/apigetService";
import LoadingIndicator from "../../../components/LoadingIndicator";
import ModalLoadingIndicator from "../../../components/ModalLoadingIndicator";

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

const Addnewproduct = ( { navigation } ) => {

    const [ modalVisible, setModalVisible ] = useState( false );
    const [ catData, setCatData ] = useState( {} );
    const [ catList, setCatList ] = useState( [] );
    const [ subCatData, setSubCatData ] = useState();
    const [ subCatList, setSubCatList ] = useState( [] );
    const [ weightData, setWeightData ] = useState( WeightValues[ 0 ].wt_name );
    const [ Loading, setLoading ] = useState( false );
    const [ image, setImage ] = useState( [
        {
            id: 1,
            isAddImage: true,
            image: require( '../../../assets/images/plus.png' ),
        }
    ] );

    console.log( "catdata", catData );
    console.log( "catlist", catList );
    console.log( "subcat", subCatData );

    const AddnewproductSchema = yup.object( {
        title: yup
            .string()
            .required( "Required *" ),
        description: yup
            .string(),
        price: yup
            .number()
            .required( "Required *" ),
        weight: yup
            .number()
            .required( "Required *" ),
        discount: yup
            .number()
            .max( 100, "Not Valid Number !" ),
        stock: yup
            .number()
            .required( "Required *" ),
    } );
    console.log( "ids", image );

    async function AddnewproductHandler ( values ) {
        console.log( "values==>", values );
        setLoading( true );

        var formData = new FormData();
        formData.append( "name", values.title );
        formData.append( "price", values.price );
        formData.append( "weight", values.weight );
        formData.append( "cat_id", catData.id );
        formData.append( "sub_cat_id", subCatData.id );
        formData.append( "stock", values.stock );
        formData.append( "flag", "v" );
        formData.append( "description", values.description );
        formData.append( "discount", values.discount );
        if ( values.discount ) {
            formData.append( "offer_flag", "y" );
        } else if ( !values.discount ) {
            formData.append( "offer_flag", "" );
        } else {
            console.log( "Something wrong" );
        }
        formData.append( "unit", weightData );

        image.map( ( item ) => {
            if ( !item.isAddImage ) {
                let file_name = item.image?.substring( item.image?.lastIndexOf( '/' ) + 1 );
                return formData.append( "image[]",
                    {
                        uri: item.image,
                        name: file_name,
                        type: 'image/jpg'
                    } );
            }else {
                console.log("something ");
            }
        } );
        console.log( "Formdata=>", JSON.stringify(formData) );
        console.log("image",image);

        try {
            let response = await addnewproductApi( { data: formData } );
            console.log( "response", response );
            setLoading( false );
            if ( response.status == 'Success' ) {
                navigation.navigate( "Myproducts", {
                    fromAddProduct: true,
                } );
                ToastAndroid.show( "Products add Successfully", ToastAndroid.SHORT );
            } else {
                alert( response.message );
            }
        } catch ( error ) {
            alert( "You are miss something image uploading or input field", error );
            setLoading( false );
        }
    }

    useEffect( () => {
        categotyList();
    }, [] );

    async function categotyList () {
        let result = await catApi( { method: 'get' } );
        console.log( "result", result.data );
        if ( result?.data ) {
            setCatList( result.data );
        }
    }

    const SelectCategory = async ( itemValue ) => {
        console.log( "itemvalues", itemValue );
        setCatData( itemValue );
        let result = await subCatApi( { id: itemValue.id } );
        console.log( "response", result );
        setSubCatList( result.data );
    };

    // const clickHendler = ( image ) => {
    //     setImage( ( prevImg ) => {
    //         console.log( "previmag", prevImg );
    //         return [
    //             ...prevImg,
    //             { image: image }
    //         ];
    //     } );
    // };

    // async function subCategotyList () {
    //     let result = await subCatApi( { method: 'get' } );
    //     console.log( "result sub_cat", result.data );
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
                <AddnewProductitems
                    modalVisible={ modalVisible }
                    image={ image }
                    openModal={ () => {
                        setModalVisible( true );
                    } }
                />
                <Formik
                    initialValues={ {
                        title: '',
                        description: '',
                        price: '',
                        weight: '',
                        weight_unit: '',
                        discount: '',
                        stock: ''
                    } }
                    validationSchema={ AddnewproductSchema }
                    onSubmit={ AddnewproductHandler }
                >
                    { ( { handleChange, handleBlur, handleSubmit, values, errors, touched } ) => (
                        <>
                            <Container containerStyle={ styles.container4 }>
                                <Label style={ styles.label }>Category</Label>
                                <Container containerStyle={ styles.container5 }>
                                    <Picker
                                        style={ styles.picker_style }
                                        selectedValue={ catData }
                                        onValueChange={ SelectCategory }
                                    >
                                        {
                                            catList.map( ( item, index ) => {
                                                return (
                                                    <Picker.Item label={ item.name } key={ index }
                                                        style={ styles.picker_item } value={ item } />
                                                );
                                            } )
                                        }
                                    </Picker>
                                </Container>

                                <Label style={ [ styles.label, styles.extraLabel ] }>Sub-Categories</Label>
                                <Container containerStyle={ styles.container5 }>
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

                            <Container containerStyle={ styles.container4 }>
                                <Label style={ styles.label }>Title</Label>
                                <InputBox
                                    placeholder="Type here..."
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
                                { touched.title && errors.title ? ( <Label style={ {
                                    color: 'red',
                                    fontSize: fs( 12 ),
                                    marginTop: vs( 5 ),
                                    marginLeft: hs( 2 )
                                } }>{ errors.title }</Label> ) : null }
                            </Container>

                            <Container containerStyle={ styles.container4 }>
                                <Label style={ styles.label }>Description</Label>
                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={ {
                                        maxWidth: '75%',
                                    } }
                                    placeholderStyle={ {
                                        position: 'absolute',
                                        top: 0,
                                    } }
                                    multiline={ true }
                                    containerStyle={ styles.description_input }
                                    onChangeText={ handleChange( 'description' ) }
                                    onBlur={ handleBlur( 'description' ) }
                                    value={ values.description }
                                    inputHeight={ 80 }
                                    textSize={ 14 }
                                />
                            </Container>

                            <Container containerStyle={ styles.container6 }>
                                <Label style={ styles.label6 }>Price</Label>
                                <Label style={ styles.label7 }>Weight</Label>
                            </Container>

                            <Container containerStyle={ styles.container7 }>
                                <InputBox
                                    placeholder="Price"
                                    inputStyle={ {
                                        maxWidth: '75%',
                                    } }
                                    containerStyle={ styles.price_input }
                                    onChangeText={ handleChange( 'price' ) }
                                    onBlur={ handleBlur( 'price' ) }
                                    value={ values.price }
                                    keyboardType="numeric"
                                    inputHeight={ 50 }
                                    textSize={ 14 }
                                />
                                <InputBox
                                    placeholder="Weight"
                                    inputStyle={ {
                                        maxWidth: '75%',
                                    } }
                                    containerStyle={ styles.weight_input }
                                    onChangeText={ handleChange( 'weight' ) }
                                    onBlur={ handleBlur( 'weight' ) }
                                    value={ values.weight }
                                    keyboardType="numeric"
                                    inputHeight={ 50 }
                                    textSize={ 14 }
                                />
                                <Container containerStyle={ styles.container8 }>
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
                                        } )
                                        }
                                    </Picker>
                                </Container>
                            </Container>

                            <Container containerStyle={ {
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            } }>
                                { touched.price && errors.price ? ( <Label style={ {
                                    color: 'red',
                                    fontSize: fs( 12 ),
                                    marginTop: vs( 5 ),
                                    marginLeft: hs( 4 ),
                                    position: 'absolute',
                                    left: 0
                                } }>{ errors.price }</Label> ) : null }

                                { touched.weight && errors.weight ? ( <Label style={ {
                                    color: 'red',
                                    fontSize: fs( 12 ),
                                    marginTop: vs( 5 ),
                                    marginRight: hs( 15 ),
                                } }>{ errors.weight }</Label> ) : null }
                            </Container>

                            <Container containerStyle={ styles.container9 }>
                                <Label style={ styles.label4 }>Discount</Label>
                                <Label style={ styles.label5 }>Stock</Label>
                            </Container>

                            <Container containerStyle={ styles.container10 }>
                                <InputBox
                                    placeholder="Discount"
                                    inputStyle={ {
                                        maxWidth: '75%'
                                    } }
                                    containerStyle={ styles.discount_input }
                                    onChangeText={ handleChange( 'discount' ) }
                                    onBlur={ handleBlur( 'discount' ) }
                                    value={ values.discount }
                                    keyboardType="numeric"
                                    inputHeight={ 50 }
                                    textSize={ 14 }
                                />
                                <InputBox
                                    placeholder="Stock"
                                    inputStyle={ {
                                        maxWidth: '75%'
                                    } }
                                    containerStyle={ styles.stock_input }
                                    onChangeText={ handleChange( 'stock' ) }
                                    onBlur={ handleBlur( 'stock' ) }
                                    value={ values.stock }
                                    keyboardType="numeric"
                                    inputHeight={ 50 }
                                    textSize={ 14 }
                                />
                            </Container>

                            <Container containerStyle={ {
                                marginTop: vs( 5 ),
                                // flexDirection: 'row',
                                // justifyContent: 'space-between'
                            } }>
                                {/* { touched.discount && errors.discount ? ( <Label style={ {
                                    color: 'red',
                                    fontSize: fs( 12 ),
                                    position: 'absolute',
                                    left: 0
                                } }>{ errors.discount }</Label> ) : null } */}

                                { touched.stock && errors.stock ? ( <Label style={ {
                                    color: 'red',
                                    fontSize: fs( 12 ),
                                    position: 'absolute',
                                    right: 0,
                                } }>{ errors.stock }</Label> ) : null }
                            </Container>
                            <Btn
                                title="Add"
                                btnStyle={ styles.add_btn }
                                btnHeight={ 50 }
                                textColor={ 'white' }
                                textSize={ 15 }
                                onPress={ handleSubmit }
                            />
                        </>
                    ) }
                </Formik>
            </Container>

            <AddnewProductModal
                modalVisible={ modalVisible }
                setImageHandler={ ( imagefile ) => {
                    console.log( 'value', imagefile );
                    setModalVisible( false );
                    let imageArray = [ ...image ];
                    imageArray.unshift( { image: imagefile } );
                    setImage( imageArray );
                } }
                onClose={ () => setModalVisible( false ) }
            />
            { Loading ? <ModalLoadingIndicator /> : null }
        </ScrollView>
    );
};

export default Addnewproduct;
