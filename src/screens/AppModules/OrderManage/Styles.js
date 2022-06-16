import {StyleSheet} from 'react-native'
import { fs, hs,screenHeight,screenWidth,vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // alignItems:'center',
        backgroundColor: 'white',
        marginHorizontal:hs(10),
    },
    rowContainer:{
        flexDirection: 'row',
        justifyContent:'space-around',
        // marginHorizontal: hs(10)
        marginVertical:vs(7)
    },
    container2:{
        marginTop: vs(30),
        marginHorizontal: hs(10)
    },
    borderView:{
        borderWidth: 1,
        // height: vs(175),
        height:screenHeight * 0.22,
        // height:'52%',
        width:screenWidth * 0.43,
        // width: hs(160),
        borderRadius: 15,
        // marginHorizontal:hs(10),
        backgroundColor: '#e9f5f0',
        borderColor: '#e9f5f0'
    },
    orderManageimg:{
        width: hs(60),
        height: vs(60),
        alignSelf: 'center',
        marginTop: vs(30),
        resizeMode: 'contain'
    },
    textView:{
        marginTop: vs(20),
        alignSelf: 'center'
    },
    text:{
        fontSize: fs(16),
        color: '#000',
    },
    container3:{
        marginTop: vs(30),
        marginHorizontal: hs(10)
    },
    borderView2:{
        borderWidth: 1,
        // height: vs(175),
        height: screenHeight * 0.22,
        // width: hs(160),
        // height: '52%',
        width: screenWidth * 0.43,
        borderRadius: 15,
        // marginHorizontal: hs(10),
        backgroundColor: '#feedff',
        borderColor: '#feedff'
    },
    myProductimg:{
        width: hs(60),
        height: vs(60),
        alignSelf: 'center',
        marginTop: vs(30),
        resizeMode: 'contain'
    },
    textView2:{
        marginTop: vs(20),
        alignSelf: 'center'
    },
    text2:{
        fontSize: fs(16),
        color: '#000'
    },
    rowContainer2:{
        justifyContent: 'space-around',
        flexDirection: 'row',
        // marginHorizontal: hs(10)
    },
    container4:{
        marginTop: vs(13),
        marginHorizontal: hs(10)
    },
    borderView3:{
        borderWidth: 1,
        // height: vs(170),
        height: screenHeight * 0.22,
        // width: hs(160),
        width: screenWidth * 0.43,
        borderRadius: 15,
        // marginHorizontal: hs(20),
        backgroundColor: '#feedff',
        borderColor: '#feedff'
    },
    walletimg:{
        width: hs(60),
        height: vs(60),
        alignSelf: 'center',
        marginTop: vs(30),
        resizeMode: 'contain'
    },
    textView3:{
        marginTop: vs(20),
        alignSelf: 'center'
    },
    text3:{
        fontSize: fs(16),
        color: '#000'
    },
    container5:{
        marginTop: vs(13),
        marginHorizontal: hs(10)
    },
    borderView4:{
        borderWidth: 1,
        // height: vs(170),
        height: screenHeight * 0.22,
        // width: hs(160),
        width: screenWidth * 0.43,
        borderRadius: 15,
        // marginHorizontal: hs(20),
        backgroundColor: '#fdffd9',
        borderColor: '#fdffd9'
    },
    transationsimg:{
        width: hs(60),
        height: vs(60),
        alignSelf: 'center',
        marginTop: vs(30),
        resizeMode: 'contain'
    },
    textView4:{
        marginTop: vs(20),
        alignSelf: 'center'
    },
    text4:{
        fontSize: fs(16),
        color: '#000'
    },
    rowContainer3:{
        justifyContent: 'space-around',
        flexDirection: 'row',
        // marginHorizontal: hs(10)
    },
    container6:{
        marginTop: vs(20),
        marginHorizontal: hs(10)
    },
    borderView5:{
        borderWidth: 1,
        // height: vs(170),
        height: screenHeight * 0.22,
        // width: hs(160),
        width: screenWidth * 0.43,
        // marginHorizontal: hs(20),
        borderRadius: 15,
        backgroundColor: '#e3f8ff',
        borderColor: '#e3f8ff'
    },
    profileimg:{
        width: hs(60),
        height: vs(60),
        alignSelf: 'center',
        marginTop: vs(30),
        resizeMode: 'contain'
    },
    textView5:{
        marginTop: vs(20),
        alignSelf: 'center'
    },
    text5:{
        fontSize: fs(16),
        color: '#000'
    },
    container7:{
        marginTop: vs(20),
        marginHorizontal: hs(10)
    },
    borderView6:{
        borderWidth: 1,
        // height: vs(170),
        height: screenHeight * 0.22,
        // width: hs(160),
        width: screenWidth * 0.43,
        borderRadius: 15,
        // marginHorizontal: hs(20),
        backgroundColor: '#faedd4',
        borderColor: '#faedd4'
    },
    logoutimg:{
        width: hs(60),
        height: vs(60),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: vs(30)
    },
    textview6:{
        marginTop: vs(20),
        alignSelf: 'center'
    },
    text6:{
        fontSize: fs(16),
        color: '#000'
    },
    search_input:{
        // width: screenWidth * 0.91,
        // backgroundColor: '#F2F2F2',
        // borderColor: '#F2F2F2',
        // elevation: 1,
        // marginTop: vs(10),
        // alignSelf: 'center'
        width: screenWidth * 0.91,
        height: vs(45),
        backgroundColor: '#f2f2f2',
        borderColor: '#f2f2f2',
        elevation: 1,
        marginTop: vs(10),
        borderWidth: 1,
        borderRadius: 3,
        alignSelf: 'center',
    },
    search_img:{
        width: hs(20),
        height: vs(20),
        marginHorizontal: hs(10),
        marginTop: vs(12)
    }
})

export default styles;