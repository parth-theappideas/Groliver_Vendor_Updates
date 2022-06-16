import { StyleSheet } from 'react-native'
import { hs, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    print_btn:{
        backgroundColor: '#009345',
        borderRadius: 5,
        justifyContent: 'center',
        width: '91%',
        marginHorizontal: hs(20),
        alignSelf: 'center',
        marginTop: vs(20),
    }
})

export default styles;