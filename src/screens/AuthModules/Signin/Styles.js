import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { fs, hs, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#fff'
    },
    logo: {
        width: hs(140),
        height: vs(140),
        resizeMode: 'contain',
        marginTop: vs(60),
    },
    text1: {
        fontSize: fs(16),
        fontFamily:Fonts.regular,
        color: '#000',
        marginTop: vs(20)
    },
    container2: {
        marginTop: vs(25)
    },
    text2: {
        fontSize: fs(15),
        fontFamily:Fonts.regular,
        textDecorationLine: 'underline',
        color: '#000'
    },
    container3: {
        marginTop: vs(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text3: {
        fontSize: fs(14),
        fontFamily: Fonts.regular
    },
    text4: {
        fontSize: fs(14),
        fontFamily:Fonts.regular,
        color: '#009345',
        fontWeight: 'bold',
        marginLeft: hs(5)
    },
    container4: {
        marginTop: vs(40)
    },
    container5: {
        flexDirection: 'row',
    },
    googleimg: {
        width: hs(50),
        height: vs(50),
        resizeMode: 'contain'
    },
    fbimg: {
        width: hs(50),
        height: vs(50),
        marginLeft: hs(10),
        resizeMode: 'contain'
    },
    twitterimg: {
        width: hs(50),
        height: vs(50),
        marginLeft: hs(10),
        resizeMode: 'contain'
    },
    phoneno_input:{
        width: '92%',
        backgroundColor: '#f2f2f2',
        borderColor: '#F2F2F2',
        marginTop: vs(20),
    },
    password_input:{
        width: '92%',
        backgroundColor: '#f2f2f2',
        borderColor: '#F2F2F2',
        marginTop: vs(10)
    },
    signin_btn:{
        backgroundColor: '#009345',
        borderRadius: 5,
        justifyContent: 'center',
        width: '92%',
        alignSelf: 'center',
        marginTop: vs(20),
    }
})

export default styles;