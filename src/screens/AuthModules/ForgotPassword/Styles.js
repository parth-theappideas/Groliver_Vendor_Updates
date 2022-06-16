import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { fs, hs, screenWidth, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#fff'
    },
    forgotpswimg: {
        // width: screenWidth * 0.65,
        width: hs(140),
        height: vs(140),
        resizeMode: 'contain',
    },
    text1: {
        fontSize: fs(16),
        color: '#000',
        marginTop: vs(10),
        fontFamily: Fonts.regular
    },
    container2: {
        marginTop: vs(20),
        marginHorizontal: hs(10)
    },
    text2: {
        fontSize: fs(14),
        fontFamily: Fonts.regular
    },
    text3: {
        fontSize: fs(14),
        fontFamily: Fonts.regular,
        alignSelf: 'center'
    },
    LoadingIndicator: {
        marginLeft: hs(10)
    },
    phno_input:{
        width: '92%',
        backgroundColor: '#fff',
        borderColor: '#F2F2F2',
        marginTop: vs(20)
    },
    send_btn:{
        backgroundColor: '#009345',
        borderRadius: 5,
        justifyContent: 'center',
        width: '92%',
        alignSelf: 'center',
        marginTop: vs(20),
    },
    back_login_Btn:{
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        width: '92%',
        borderColor: '#fff',
        alignSelf: 'center',
        marginTop: vs(20),
    }
})

export default styles;