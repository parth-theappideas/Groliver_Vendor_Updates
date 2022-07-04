import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { hs, vs, fs, screenWidth } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: hs(20),
        marginTop: vs(10)
    },
    container2: {
        marginTop: vs(20),
    },
    label: {
        fontSize: fs(15),
        fontFamily: Fonts.regular,
        color: '#000'
    },
    extraLabel: {
        fontSize: fs(15),
        marginTop: vs(15),
        fontFamily: Fonts.regular,
        color: '#000'
    },
    container3: {
        borderWidth: 1,
        marginTop: vs(10),
        borderRadius: 5,
        borderColor: '#f2f2f2',
    },
    label2: {
        // position: 'absolute',
        // left: 0,
        fontSize: fs(15),
        fontFamily:Fonts.regular,
        color: '#000',
        left: hs(3)
    },
    label3: {
        marginRight: hs(30),
        paddingRight: hs(34),
        fontSize: fs(15),
        fontFamily:Fonts.regular,
        color: '#000'
    },
    container4: {
        marginTop: vs(20),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    label4: {
        fontSize: fs(15),
        fontFamily:Fonts.regular,
        position: 'absolute',
        left: hs(2),
    },
    label5: {
        fontSize: fs(15),
        fontFamily:Fonts.regular,
        marginRight: hs(24)
    },
    container5: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container6: {
        borderWidth: 1,
        width: screenWidth * 0.35,
        height: vs(50),
        marginTop: vs(10),
        borderRadius: 5,
        borderColor: '#f2f2f2',
        marginLeft: hs(5)
    },
    container7: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: vs(20),
    },
    container8: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    picker_style: {
        width: screenWidth * 0.90,
        height: vs(50),
    },
    picker_wt: {
        width: screenWidth * 0.35,
        height: vs(50),
    },
    picker_item: {
        fontSize: fs(15),
        fontFamily:Fonts.regular
    },
    title_input: {
        width: screenWidth * 0.90,
        backgroundColor: '#fff',
        borderColor: '#Fff',
        borderColor: '#F2f2f2',
        marginTop: vs(10),
        alignSelf: 'center'
    },
    description_input: {
        width: screenWidth * 0.90,
        backgroundColor: '#fff',
        borderColor: '#F2f2f2',
        marginTop: vs(10),
        alignSelf: 'center',
    },
    price_input: {
        width: screenWidth * 0.27,
        backgroundColor: '#fff',
        borderColor: '#F2f2f2',
        marginTop: vs(10),
        marginRight: hs(25)
    },
    weight_input: {
        width: "20%",
        backgroundColor: '#fff',
        borderColor: '#F2f2f2',
        marginTop: vs(10),
        marginLeft: hs(5)
    },
    discount_input: {
        width: screenWidth * 0.28,
        backgroundColor: '#fff',
        borderColor: '#F2f2f2',
        marginTop: vs(10),
    },
    stock_input: {
        width: screenWidth * 0.28,
        backgroundColor: '#fff',
        borderColor: '#F2f2f2',
        marginTop: vs(10),
    },
    save_btn: {
        backgroundColor: '#009345',
        borderRadius: 5,
        justifyContent: 'center',
        width: screenWidth * 0.90,
        alignSelf: 'center',
        marginTop: vs(20),
    },
    Imgcontainer: {
        // borderWidth: 1,
        width: screenWidth * 0.28,
        height: vs(120),
        borderColor: '#f2f2f2',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    add_img: {
        width: hs(100),
        height: vs(120),
        // resizeMode: 'contain'
    },
    Clickimg: {
        width: hs(100),
        height: vs(120),
    },
    pressableBtn: {
        position: 'absolute',
        top: 0,
        right: 0,
        marginHorizontal: hs(5),
        marginTop: vs(5)
    },
    del_img: {
        width: hs(15),
        height: hs(15),
        resizeMode: 'contain',
    }
})

export default styles;