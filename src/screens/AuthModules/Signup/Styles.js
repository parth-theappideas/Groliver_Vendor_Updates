import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts/fonts';
import { fs, hs, screenHeight, screenWidth, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: hs( 5 )
    },
    img1: {
        width: hs( 120 ),
        height: vs( 120 ),
        borderRadius: 60
        // resizeMode: 'contain',
    },
    Clickimg: {
        width: hs( 120 ),
        height: vs( 120 ),
        borderRadius: 60
    },
    img2: {
        width: hs( 30 ),
        height: vs( 30 ),
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    container2: {
        marginTop: vs( 20 ),
        marginHorizontal: hs( 10 )
    },
    text1: {
        fontSize: fs( 15 ),
        color: '#000',
        marginTop: vs( 10 ),
        fontFamily: Fonts.regular
    },
    text2: {
        fontSize: fs( 15 ),
        color: '#000',
        marginTop: vs( 20 ),
        fontFamily: Fonts.regular
    },
    text3: {
        fontSize: fs( 15 ),
        color: '#000',
        marginTop: vs( 20 ),
        fontFamily: Fonts.regular
    },
    text4: {
        fontSize: fs( 15 ),
        color: '#000',
        marginTop: vs( 20 ),
        fontFamily: Fonts.regular
    },
    container3: {
        marginTop: vs( 20 ),
        alignItems: 'center',
        // marginHorizontal:hs(10)
    },
    container4: {
        flexDirection: 'row',
    },
    text5: {
        fontSize: fs( 13 ),
        fontFamily: Fonts.regular
    },
    text6: {
        fontSize: fs( 13 ),
        marginLeft: hs( 3 ),
        fontFamily: Fonts.regular,
        color: '#FF7900'
    },
    container5: {
        flexDirection: 'row',
        marginTop: vs( 5 )
    },
    text7: {
        fontSize: fs( 13 ),
        fontFamily: Fonts.regular
    },
    text8: {
        fontSize: fs( 13 ),
        marginLeft: hs( 3 ),
        fontFamily: Fonts.regular,
        color: '#FF7900'
    },
    name_input: {
        width: screenWidth * 0.92,
        backgroundColor: '#f2f2f2',
        borderColor: '#F2F2F2',
        marginTop: vs( 10 )
    },
    email_input: {
        width: screenWidth * 0.92,
        backgroundColor: '#f2f2f2',
        borderColor: '#F2F2F2',
        marginTop: vs( 10 )
    },
    password_input: {
        width: screenWidth * 0.92,
        backgroundColor: '#f2f2f2',
        borderColor: '#F2F2F2',
        marginTop: vs( 10 )
    },
    country_input: {
        width: screenWidth * 0.92,
        backgroundColor: '#f2f2f2',
        borderColor: '#F2F2F2',
        marginTop: vs( 10 )
    },
    mobileno_input: {
        width: screenWidth * 0.92,
        backgroundColor: '#f2f2f2',
        borderColor: '#F2F2F2',
        marginTop: vs( 10 )
    },
    continue_btn: {
        backgroundColor: '#009345',
        borderRadius: 5,
        justifyContent: 'center',
        width: screenWidth * 0.92,
        alignSelf: 'center',
        marginTop: vs( 20 ),
    },
    borderStyle: {
        borderWidth: 1,
        width: screenWidth * 0.92,
        height: vs( 50 ),
        marginTop: vs( 10 ),
        borderRadius: 5,
        borderColor: '#f2f2f2',
        backgroundColor:'#f2f2f2'
        // marginLeft: hs(5)
    },
    picker_style: {
        width: screenWidth * 0.90,
        height: vs( 50 ),
    },
    picker_item: {
        fontSize: fs( 14 ),
        fontFamily: Fonts.regular

    },
} );

export default styles;