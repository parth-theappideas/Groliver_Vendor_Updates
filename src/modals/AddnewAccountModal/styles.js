import { StyleSheet } from 'react-native'
import { fs, hs, vs } from '../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: hs(20),
        marginTop: vs(20),
    },
    label: {
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold'
    },
    cancelimg: {
        width: hs(20),
        height: vs(20)
    },
    container3: {
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: '#f2f2f2'
    },
    container4: {
        marginHorizontal: hs(20),
        marginTop: vs(20)
    },
    container5: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default styles;