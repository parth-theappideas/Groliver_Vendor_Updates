import { StyleSheet } from 'react-native'
import { hs, screenWidth, vs, fs  } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    container2: {
        marginTop: vs(20),
        marginHorizontal: hs(10)
    },
    container3: {
        borderWidth: 1,
        height: vs(250),
        borderRadius: 5,
        borderColor: '#f2f2f2',
        width: screenWidth * 0.92
    },
    container4: {
        marginTop: vs(10),
        marginHorizontal: hs(20)
    },
    container5: {
        flexDirection: 'row',
    },
    person_img: {
        width: hs(70),
        height: vs(70),
        resizeMode: 'contain'
    },
    container6: {
        marginTop: vs(10),
        marginLeft: hs(10)
    },
    name_label: {
        fontSize: fs(16),
        fontWeight: 'bold'
    },
    phNo_label:{
        fontSize: fs(16),
        marginTop: vs(5)
    },
    borderStyle:{
        borderWidth: 1,
        marginTop: vs(20),
        borderColor: '#f2f2f2'
    },
    container7:{
        marginTop: vs(15),
        flexDirection: 'row',
    },
    location_img:{
        width: hs(15),
        height: vs(15),
        resizeMode: 'contain'
    },
    address_label:{
        marginLeft: hs(10),
        fontSize: fs(15)
    },
    container8:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: hs(10)
    },
    reject_btn:{
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        width: '45%',
        borderWidth: 1,
        borderColor: 'red',
        alignSelf: 'center',
        marginTop: vs(20),
    },
    accept_btn:{
        backgroundColor: '#009345',
        borderRadius: 5,
        justifyContent: 'center',
        width: '45%',
        alignSelf: 'center',
        marginTop: vs(20),
    }
})

export default styles;