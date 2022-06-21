import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { fs, hs, screenWidth, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    resetpswimg: {
        // width: screenWidth * 0.45,
        height: vs(140),
        width: hs(140),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginLeft: hs(20)
    },
    text1: {
        fontSize: fs(16),
        color: '#000',
        marginTop: vs(15),
        fontFamily: Fonts.regular
    },
    newpsw_input:{
        width: '92%',
        backgroundColor: '#f2f2f2',
        borderColor: '#F2F2F2',
        marginTop: vs(20)
    },
    confirmpsw_input:{
        width: '92%',
        backgroundColor: '#f2f2f2',
        borderColor: '#F2F2F2',
        marginTop: vs(10)
    },
    reset_btn:{
        backgroundColor: '#009345',
        borderRadius: 5,
        justifyContent: 'center',
        width: '92%',
        alignSelf: 'center',
        marginTop: vs(20),
    },
    backlogin_btn:{
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