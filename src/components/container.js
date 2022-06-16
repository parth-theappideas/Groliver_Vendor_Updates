import React from "react";
import {StyleSheet,View,TouchableOpacity,StyleProp,ViewStyle,Text} from 'react-native'
import {fs, hs, mpStyle,vs} from '../utils/stylesUtils'

const Container = ({
    onPress,
    containerStyle,
    children,
    leftIcon,
    height,
    mpContainer,
    width,
    leftLabel
}) => {
    const styles = StyleSheet.create({
        containerStyle:{
            height:height && vs(height),
            width:width && hs(width),
            ...mpStyle({...mpContainer})
        }
    })

    if(onPress){
        return(
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPress}
                styles={[styles.containerStyle,containerStyle]}
            >
                {leftIcon && leftIcon()}
                {leftLabel && leftLabel()}
                {children}
            </TouchableOpacity>
        )
    }

    return(
        <View style={[styles.containerStyle,containerStyle]}>
            {children}
        </View>
    )
}

export default Container;