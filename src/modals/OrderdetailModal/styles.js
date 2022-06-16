import { StyleSheet } from 'react-native'
import { fs, hs, vs } from '../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        marginTop: vs(20),
        marginHorizontal: hs(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header: {
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold'
    },
    cancel_img: {
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain',
        tintColor: '#000'
    },
    border_styles: {
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: '#f2f2f2'
    }
})

export default styles;