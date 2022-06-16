import {StyleSheet} from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { hs, vs , fs} from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        marginTop: vs(7),
        backgroundColor: 'white',
    },
    container:{
        flexDirection: 'row',
        paddingBottom: vs(10),
        marginHorizontal: hs(10)
    },
    itemimg:{
        width: hs(50),
        height: vs(50),
        resizeMode: 'contain'
    },
    container2:{
        marginTop: vs(10),
        marginLeft: hs(10)
    },
    label:{
        fontFamily: Fonts.regular,
        fontSize: fs(16),
        color: '#000'
    },
    label2:{
        fontFamily: Fonts.regular,
        fontSize: fs(13),
    },
    borderStyle:{
        borderWidth: 1,
        borderColor: '#f2f2f2',
    }
})

export default styles;