import React from "react";
import { View, StatusBar, StyleSheet, Image } from 'react-native'
import Container from "../../../components/container";
import InputBox from "../../../components/InputBox";
import Images from "../../../const/Images";
import { hs, screenWidth, vs } from "../../../utils/stylesUtils";

const SearchComponent = () => {
    return (
        <View style={{
            flex: 1,
            // justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff'
        }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <InputBox
                placeholder="Search"
                inputStyle={{
                    maxWidth: '75%'
                }}
                containerStyle={styles.search_input}
                inputHeight={45}
                textSize={14}
                leftIcon={() => <Image source={Images.search_2} style={styles.search_img} />}
            />
        </View>
    )
}

export default SearchComponent;

const styles = StyleSheet.create({
    search_input: {
        width: screenWidth * 0.91,
        backgroundColor: '#F2F2F2',
        borderColor: '#F2F2F2',
        elevation: 1,
        marginTop: vs(10),
        alignSelf: 'center'
    },
    search_img: {
        width: hs(20),
        height: vs(20),
        marginHorizontal: hs(10),
    }
})