import { StyleSheet } from 'react-native'
import { fs, hs, vs } from '../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: hs(20),
        marginTop: vs(10)
    },
    container2: {
        alignItems: 'center'
    },
    successimg: {
        width: hs(100),
        height: vs(100),
        resizeMode: 'contain',
        marginTop: vs(30)
    },
    label: {
        marginTop: vs(20),
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold'
    },
    label2: {
        marginTop: vs(10),
        fontSize: fs(16),
    },
    done_btn:{
        backgroundColor: '#009345',
        borderRadius: 5,
        justifyContent: 'center',
        width: '90%',
        alignSelf: 'center',
        marginTop: vs(20),
    }
})

export default styles;