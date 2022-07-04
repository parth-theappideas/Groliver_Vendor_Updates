import { StyleSheet, Dimensions } from 'react-native';
import { hs, screenWidth, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create( {
    container: {
        flex: 1,
    },
    container2: {
        borderWidth: 1,
        width: screenWidth * 0.28,
        marginHorizontal: hs( 3.5 ),
        marginTop: vs( 7 ),
        bottom: 5,
        right: 3,
        height: vs( 120 ),
        borderColor: '#f2f2f2',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container3: {
        borderWidth: 1,
        width: screenWidth * 0.28,
        height: vs( 120 ),
        borderColor: '#f2f2f2',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: hs( 20 ),
    },
    add_img: {
        width: hs( 20 ),
        height: vs( 20 ),
        // resizeMode: 'contain'
    },
    Clickimg: {
        width: hs( 100 ),
        height: vs( 110 ),
        marginHorizontal: hs( 5 ),
        resizeMode: 'cover'
    },
} );

export default styles;