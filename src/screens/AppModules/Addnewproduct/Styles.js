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
    container4: {
        marginTop: vs(20),
    },
    label: {
        fontSize: fs(14),
        fontFamily: Fonts.regular,
        color: '#000'
    },
    extraLabel:{
        fontSize: fs(14),
        marginTop:vs(15),
        fontFamily: Fonts.regular,
        color: '#000'
    },
    container5: {
        borderWidth: 1,
        marginTop: vs(10),
        borderRadius: 5,
        borderColor: '#f2f2f2',
    },
    label4: {
        // position: 'absolute',
        // left: 0,
        fontSize: fs(14),
        color: '#000',
        marginLeft:hs(3),
        marginTop:vs(5)
    },
    label5: {
        marginRight: hs(33),
        paddingRight: hs(30),
        fontSize: fs(14),
        color: '#000',
        marginTop: vs(5)
    },
    container6:{
        marginTop: vs(20),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    label6:{
        fontSize: fs(14),
        position: 'absolute',
        left: hs(2)
    },
    label7:{
        fontSize: fs(14),
        marginRight: hs(31)
    },
    container7:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container8:{
        borderWidth: 1,
        width: screenWidth * 0.32,
        height: vs(50),
        marginTop: vs(10),
        borderRadius: 5,
        borderColor: '#f2f2f2',
        marginLeft:hs(5)
    },
    container9:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: vs(20),
    },
    container10:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    picker_style:{
        width: screenWidth * 0.90,
        height: vs(50),
    },
    picker_wt:{
        width: screenWidth * 0.35,
        height: vs(50),
    },
    picker_item:{
        fontSize: fs(14)
    },
    title_input:{
        width: screenWidth * 0.90,
        backgroundColor: '#fff',
        borderColor: '#Fff',
        borderColor: '#F2f2f2',
        marginTop: vs(10),
        alignSelf: 'center'
    },
    description_input:{
        width: screenWidth * 0.90,
        backgroundColor: '#fff',
        borderColor: '#F2f2f2',
        marginTop: vs(10),
        alignSelf: 'center',
        lineHeight: 23,
    },
    price_input:{
        width: screenWidth * 0.25,
        backgroundColor: '#fff',
        borderColor: '#F2f2f2',
        marginTop: vs(10),
        marginRight: hs(25)
    },
    weight_input:{
        width: "25%",
        backgroundColor: '#fff',
        borderColor: '#F2f2f2',
        marginTop: vs(10),
        marginLeft: hs(5)
    },
    discount_input:{
        width: screenWidth * 0.28,
        backgroundColor: '#fff',
        borderColor: '#F2f2f2',
        marginTop: vs(10),
    },
    stock_input:{
        width: screenWidth * 0.28,
        backgroundColor: '#fff',
        borderColor: '#F2f2f2',
        marginTop: vs(10),
    },
    add_btn:{
        backgroundColor: '#009345',
        borderRadius: 5,
        justifyContent: 'center',
        width: screenWidth * 0.90,
        alignSelf: 'center',
        marginTop: vs(25),
    }
})

export default styles;