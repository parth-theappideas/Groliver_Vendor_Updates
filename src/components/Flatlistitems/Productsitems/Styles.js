import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { hs, vs, fs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: vs(15),
        paddingTop: vs(5),
        marginHorizontal: hs(15),
        flexDirection: 'row',
    },
    borderStyle: {
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: '#f2f2f2',
        marginHorizontal: hs(15),
    },
    itemimg: {
        width: hs(60),
        height: vs(59),
        borderRadius: 1,
        // resizeMode: 'contain'
    },
    container2: {
        marginLeft: hs(10),
    },
    label: {
        fontSize: fs(14),
        color: '#000',
        fontFamily: Fonts.regular,
        fontWeight: 'bold'
    },
    label2: {
        fontSize: fs(14),
        fontFamily: Fonts.regular,
        marginTop: vs(3)
    },
    label3: {
        fontSize: fs(14),
        marginTop: vs(3),
        fontFamily: Fonts.regular,
        color: 'red'
    },
    label4: {
        position: 'absolute',
        right: hs(20),
        top: vs(27),
        bottom: vs(0),
        fontWeight: 'bold',
        color: '#000',
        fontSize: fs(14)
    }
})

export default styles;