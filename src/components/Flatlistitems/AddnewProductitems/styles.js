import { StyleSheet, Dimensions } from 'react-native'
import { hs, screenWidth, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    container2: {
        borderWidth: 1,
        width: screenWidth * 0.28,
        height: vs(120),
        borderColor: '#f2f2f2',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container3: {
        borderWidth: 1,
        width: screenWidth * 0.28,
        height: vs(120),
        borderColor: '#f2f2f2',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: hs(20),
    },
    add_img: {
        width: hs(20),
        height: vs(20),
        // overflow: 'hidden',
    },
    Clickimg: {
        width: hs(105),
        height: vs(120),
        maxWidth: Dimensions.get('screen').width,
        maxHeight: Dimensions.get('screen').height,
        resizeMode: 'cover'
    },
})

export default styles;