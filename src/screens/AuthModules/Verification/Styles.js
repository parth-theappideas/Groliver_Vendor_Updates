import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { fs, hs, screenWidth, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    emaillogo: {
        // width: screenWidth * 0.50,
        width: hs(140),
        height: vs(140),
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    text1: {
        fontSize: fs(16),
        color: '#000',
        // marginTop: vs(10),
        fontFamily: Fonts.regular
    },
    container2: {
        marginTop: vs(20),
        marginHorizontal: hs(10)
    },
    text2: {
        fontSize: fs(14),
        color: '#000',
        fontWeight: 'bold',
        fontFamily: Fonts.regular
    },
    // text3: {
    //     fontSize: fs(70),
    //     fontFamily: Fonts.regular,
    //     alignSelf: 'center',
    //     marginTop: vs(10),
    //     color: '#000'
    // },
    root: {
        padding: vs(20),
        margin: vs(25),
        bottom: vs(5)
    },
    rootStyle: {
        marginTop: vs(20)
    },
    cell: {
        width: hs(40),
        // height: vs(40),
        // lineHeight: hs(30),
        fontSize: fs(20),
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#009345',
        textAlign: "center",
        marginRight: hs(5),
    },
    focusCell: {
        borderColor: '#000',
    },
    container3:{
        flex: 1,
        alignItems: 'center'
    },
    verify_Btn:{
        backgroundColor: '#009345',
        borderRadius: 5,
        justifyContent: 'center',
        width: '120%',
        alignSelf: 'center',
        marginTop: vs(30),
    },
    resendOTP_Btn:{
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        width: '120%',
        borderColor: '#fff',
        alignSelf: 'center',
        marginTop: vs(20),
    }
})

export default styles;