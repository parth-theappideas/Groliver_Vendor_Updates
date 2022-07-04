import { StyleSheet } from 'react-native';
import { fs, hs, screenWidth, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: hs( 15 ),
    },
    container2: {
        marginTop: vs( 20 )
    },
    label1: {
        fontSize: fs( 18 ),
        color: '#000',
        fontWeight: 'bold'
    },
    container3: {
        flexDirection: 'row',
        marginTop: vs( 15 )
    },
    label2: {
        fontSize: fs( 15 ),
        color: '#000',
        fontWeight: 'bold'
    },
    label3: {
        fontSize: fs( 15 ),
        marginTop: vs( 1 )
    },
    container4: {
        flexDirection: 'row',
        marginTop: vs( 15 )
    },
    label4: {
        fontSize: fs( 15 ),
        color: '#000',
        fontWeight: 'bold'
    },
    label5: {
        fontSize: fs( 15 ),
        marginTop: vs( 1 )
    },
    container5: {
        flexDirection: 'row',
        marginTop: vs( 15 )
    },
    label6: {
        fontSize: fs( 15 ),
        color: '#000',
        fontWeight: 'bold'
    },
    label7: {
        fontSize: fs( 15 ),
        marginTop: vs( 1 )
    },
    container6: {
        flexDirection: 'row',
        marginHorizontal: hs( 20 ),
        bottom: vs( 2 )
    },
    itemimg: {
        width: hs( 100 ),
        height: hs( 120 ),
        // resizeMode: 'contain',
    },
    editImg: {
        resizeMode: 'contain',
        width: hs( 15 ),
        height: vs( 15 )
    },
    deleteImg: {
        resizeMode: 'contain',
        width: hs( 17 ),
        height: vs( 17 ),
        marginLeft: hs( 13 )
    },
    container7: {
        marginTop: vs( 25 )
    },
    label8: {
        fontSize: fs( 18 ),
        color: '#000',
        fontWeight: 'bold'
    },
    label9: {
        fontSize: fs( 15 ),
        marginTop: vs( 10 )
    },
    label10: {
        fontSize: fs( 14 ),
    },
    container8: {
        // borderWidth: 1,
        borderRadius: 5,
        borderColor: '#f2f2f2',
        height: vs( 120 ),
        width: screenWidth * 0.29,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container9: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#f2f2f2',
        height: vs( 120 ),
        width: "31%",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: hs( 10 )
    },
} );

export default styles;