import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { vs, hs, fs, screenWidth } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    container2: {
        marginTop: vs(10)
    },
    profileimgBorder: {
        borderWidth: 1,
        borderRadius: 60,
        borderColor: '#f2f2f2'
    },
    profileimg: {
        width: hs(120),
        height: vs(120),
        // resizeMode: 'contain',
        borderRadius: 60
    },
    Clickimg: {
        width: hs(120),
        height: vs(120),
        borderRadius: 60
    },
    changeimg: {
        width: hs(25),
        height: vs(25),
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    container3: {
        marginTop: vs(20),
        marginHorizontal: hs(10)
    },
    label: {
        fontSize: fs(14),
        color: '#000',
        marginTop: vs(10),
        fontFamily: Fonts.regular
    },
    extraContainer: {
        marginTop: vs(10)
    },
    container4: {
        borderWidth: 1,
        marginTop: vs(10),
        borderRadius: 5,
        borderColor: '#f2f2f2',
    },
    LoadingIndicator: {
        marginLeft: hs(15),
        position: "absolute",
        bottom: 0,
        top: 0
    },
    name_input: {
        width: screenWidth * 0.92,
        backgroundColor: '#fff',
        borderColor: '#F2F2F2',
        marginTop: vs(10)
    },
    email_input: {
        width: screenWidth * 0.92,
        backgroundColor: '#fff',
        borderColor: '#F2F2F2',
        marginTop: vs(10)
    },
    countrycode_input: {
        width: screenWidth * 0.92,
        backgroundColor: '#fff',
        borderColor: '#F2F2F2',
        marginTop: vs(10)
    },
    mobileno_input: {
        width: screenWidth * 0.92,
        backgroundColor: '#fff',
        borderColor: '#F2F2F2',
        marginTop: vs(10)
    },
    update_btn: {
        backgroundColor: '#009345',
        borderRadius: 5,
        justifyContent: 'center',
        width: screenWidth * 0.92,
        alignSelf: 'center',
        marginTop: vs(20),
    }
})

export default styles;