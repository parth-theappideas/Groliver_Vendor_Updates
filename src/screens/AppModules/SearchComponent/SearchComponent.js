import React, { useState } from "react";
import { View, StatusBar, StyleSheet, Text, FlatList } from 'react-native';
import Container from "../../../components/container";
import InputBox from "../../../components/InputBox";
import Images from "../../../const/Images";
import { hs, screenWidth, vs } from "../../../utils/stylesUtils";
import AddTodo from "./Additem";
import Todoitem from "./Todoitem";

const SearchComponent = () => {

    const [ todos, setTodos ] = useState( [
        {
            id: 1,
            text: 'buy coffee'
        },
        {
            id: 2,
            text: 'create app'
        },
        {
            id: 3,
            text: 'play on the switch'
        }
    ] );

    const clickHendler = ( id ) => {
        setTodos( ( prevTodos ) => {
            return prevTodos.filter( todo => todo.id != id );
        } );
    };

    const submitHandler = ( text ) => {
        setTodos( ( prevTodos ) => {
            return [
                { text: text, id: Math.random().toString() },
                ...prevTodos
            ];
        } );
    };

    return (
        <View style={ {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#fff'
        } }>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            {/* <InputBox
                placeholder="Search"
                inputStyle={{
                    maxWidth: '75%'
                }}
                containerStyle={styles.search_input}
                inputHeight={45}
                textSize={14}
                leftIcon={() => <Image source={Images.search_2} style={styles.search_img} />}
            /> */}

            <View style={ styles.content }>
                <AddTodo 
                    submitHandler={submitHandler}
                />
                <View style={ styles.list }>
                    <FlatList
                        data={ todos }
                        renderItem={ ( { item } ) => (
                            <Todoitem
                                item={ item }
                                clickHendler={ clickHendler }
                            />
                        ) }
                    />
                </View>
            </View>
        </View>
    );
};

export default SearchComponent;

const styles = StyleSheet.create( {
    search_input: {
        width: screenWidth * 0.91,
        backgroundColor: '#F2F2F2',
        borderColor: '#F2F2F2',
        elevation: 1,
        marginTop: vs( 10 ),
        alignSelf: 'center'
    },
    search_img: {
        width: hs( 20 ),
        height: vs( 20 ),
        marginHorizontal: hs( 10 ),
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,

    }
} );