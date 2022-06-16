import { StyleSheet } from 'react-native'
import { hs, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    search_input: {
        // width: screenWidth * 0.91,
        // backgroundColor: '#F2F2F2',
        // borderColor: '#F2F2F2',
        // elevation: 1,
        // marginTop: vs(10),
        // alignSelf: 'center'
        width: '91%',
        height: vs(45),
        backgroundColor: '#f2f2f2',
        borderColor: '#f2f2f2',
        elevation: 1,
        marginTop: vs(10),
        borderWidth: 1,
        borderRadius: 3,
        alignSelf: 'center',
    },
    search_img: {
        width: hs(20),
        height: vs(20),
        marginHorizontal: hs(10),
        marginTop: vs(12)
    }
})

export default styles;