import { StyleSheet } from 'react-native'
import { hs, vs, fs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    container3: {
        flexDirection: 'row',
        marginTop: vs(10),
        marginHorizontal: hs(15)
    },
    container5: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#f2f2f2',
        height: vs(120),
        width: "31%",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: hs(10)
    },
    container6: {
        flexDirection: 'row',
        marginHorizontal: hs(15),
        marginTop: vs(10),
        justifyContent: 'space-around',
        marginBottom: vs(10)
    },
    del_btn:{
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '48%',
        borderColor: 'red',
        borderWidth: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    edit_btn:{
        backgroundColor: '#009345',
        borderRadius: 5,
        width: '48%',
        justifyContent: 'center',
        alignSelf: 'center',
    }
})

export default styles;