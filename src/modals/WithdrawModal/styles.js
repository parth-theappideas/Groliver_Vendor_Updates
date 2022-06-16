import { StyleSheet } from 'react-native'
import { fs, hs, screenWidth, vs } from '../../utils/stylesUtils';

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
    closeimg: {
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
        marginTop: vs(10)
    },
    enterAmount_input:{
        width: screenWidth * 0.89,
        backgroundColor: '#fff',
        borderColor: '#F2F2F2',
        marginTop: vs(10)
    },
    processed_btn:{
        backgroundColor: '#009345',
        borderRadius: 5,
        justifyContent: 'center',
        width: '90%',
        alignSelf: 'center',
        marginTop: vs(20),
    }
})

export default styles;