import React from "react";
import { TextInput, Pressable, StyleProp, ViewStyle } from 'react-native'
import { mpStyle, vs, hs, fs } from '../utils/stylesUtils'
import Container from "./container";

const InputBox = ({
    onPress,
    inputHeight,
    radius = 5,
    textSize,
    leftIcon,
    rightIcon,
    mpInput,
    mpContainer,
    containerStyle,
    editable,
    inputStyle,
    touched,
    errors,
    placeholderStyle,
    multiline,
    ...restProps
}) => {
    return (
        <>
            <Pressable style={[{
                height: inputHeight && vs(inputHeight),
                borderWidth: 1,
                borderColor: 'grey',
                ...mpStyle({ ...mpContainer }),
                borderRadius: radius,
                flexDirection: 'row',
                alignItems: 'center'
            }, containerStyle]}

                onPress={onPress}>

                {leftIcon && leftIcon()}
                <TextInput
                    style={[{
                        width: '85%',
                        height: vs(40),
                        ...mpStyle({ mpInput }),
                        fontSize: fs(textSize || 14),
                        paddingVertical: 0
                    }, inputStyle, editable, placeholderStyle, multiline]}

                    {...restProps}
                />
                {rightIcon && rightIcon()}
            </Pressable>

            {touched && errors &&
                <Container mpContainer={{
                    mh: 25, mt: 5
                }}>
                </Container>

            }
        </>
    )
}

export default InputBox;