import React, { useCallback, useEffect, useState } from "react";
import { Image, FlatList, StatusBar, Text, View, RefreshControl, ScrollView } from 'react-native';
import Productsitems from "../../../components/Flatlistitems/Productsitems/Productsitems";
import InputBox from '../../../components/InputBox';
import Images from "../../../const/Images";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import Container from "../../../components/container";
import styles from "./Styles";
import Addnewitems from "./Addnewitems";
import { myProductApi } from "../../../utils/apigetService";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { api_token } from '../../../utils/Globals';
import Label from "../../../components/Label";

const Myproducts = ( { route, navigation } ) => {
    const [ productList, setProductList ] = useState( [] );
    const [ Loading, setLoading ] = useState( false );
    const [ refreshing, setRefreshing ] = useState( false );

    console.log( "Api token =====>", api_token );

    const getProductList = async () => {
        setLoading( true );
        try {
            let response = await myProductApi( {} );
            console.log( 'response --> *', response.data );
            setLoading( false );
            if ( response.status === 'Success' ) {
                setProductList( response.data );
            } else {
                alert( response.message );
            }
        } catch ( error ) {
            console.log( 'error', error );
            setLoading( false );
        }
        console.log( "ProductList", productList );
    };

    useEffect( () => {
        getProductList();
    }, [] );

    useEffect( () => {
        if ( route.params?.fromAddProduct ) {
            getProductList();
        } else if ( route.params?.fromRemoveProductList ) {
            getProductList();
        } else if ( route.params?.fromRemoveProdDetails ) {
            getProductList();
        } else if ( route.params?.fromEditProduct ) {
            getProductList();
        } else {
            console.log( "Anything" );
        }
    }, [ route.params ] );

    const renderProductitems = ( { item } ) => {
        return (
            <Productsitems
                item={ item }
            />
        );
    };

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2,0,"Lemon","Kiwi");
    console.log("fruits",fruits);

    const arr = [1,2,3,4,5,6,7];
    const greaterFive = arr.some((num) => num > 5);
    console.log("greaterFive",greaterFive);

    const lessnine = arr.some((num) => num < 9);
    console.log("lessnine",lessnine);
    
    const arr2 = [1,2,3,4,5,6,7];
    console.log("includes",arr2.includes(2));
    console.log("includes",arr2.includes(7));

    const alphabets = ["G","O","D"];
    console.log(alphabets.join(''));

    const redu = [1,2,3,4,5,6];
    const reduced = redu.reduce((total,current) => total + current);
    console.log("reduced",reduced);

    const FI = ["abc","xyz","poi","jkl"];
    const indexFinder = FI.findIndex((elem) => elem === "xyz");
    console.log("indexfinder",indexFinder);

    const IO = ["abc","xyz","poi","jkl"];
    const IndexHandler = IO.indexOf("poi");
    console.log("indexhandler",IndexHandler);

    const fru = ["apple","orange"];
    fru.shift();
    console.log("fru",fru);

    let skills = ["python","reactnative","node"];
    skills.forEach((val,index,arr) => {
        console.log("val",val);
        console.log("index",index);
        console.log("arr",arr);
    })

    const filted = ['asia','africa','australia','america','india'];
    filted.filter((filts)=>  filts.startsWith('I'));
    console.log("filted",);

    var countryList = [ 'India', 'China', 'Bhutan'];
    var commacountryList = countryList.toString().split(',');
    console.log("commacountrylist",commacountryList);


    const wait = ( timeout ) => {
        return new Promise( resolve => setTimeout( resolve, timeout ) );
    };

    const onRefresh = useCallback( () => {
        setRefreshing( true );
        wait( 2000 ).then( () => setRefreshing( false ) );
    }, [] );

    return (
        <ScrollView contentContainerStyle={ {
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center'
        } }
            refreshControl={
                <RefreshControl
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }
                    colors={ [ '#006400' ] }
                />
            }
        >
            <Container containerStyle={ styles.container }>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Container containerStyle={ styles.search_input }>
                    <Container
                        onPress={ () => navigation.navigate( "SearchComponent" ) }
                        leftIcon={ () => <Image source={ Images.search_2 } style={ styles.search_img } /> }
                        leftLabel={ () =>
                            <Label style={ {
                                position: 'absolute',
                                left: hs( 40 ),
                                fontSize: fs( 13 ),
                                top: vs( 14 ),
                                color: 'grey'
                            } }>Search</Label> }
                    />
                </Container>
                <View style={ {
                    marginHorizontal: hs( 2 )
                } }>
                    <FlatList
                        data={ productList }
                        renderItem={ renderProductitems }
                        scrollEnabled={ true }
                        keyExtractor={ ( item ) => item.id }
                        contentContainerStyle={ {
                            paddingBottom: vs( 5 )
                        } }
                    />
                </View>
                <Addnewitems />
                { Loading ? <LoadingIndicator /> : null }
            </Container>
        </ScrollView>
    );
};

export default Myproducts;